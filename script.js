const numberOFPixel = 10;
$("body").keydown(function(e) {
    var shouldAnimate = false;
    switch (e.keyCode) {
        case 37:
            shouldAnimate = checkBoundry('x');
            if(shouldAnimate){
                $("#drone-body").finish().animate({
                    left: "-="+numberOFPixel
                });
            }
            break;
        case 38:
            shouldAnimate = checkBoundry('y');
            if(shouldAnimate){
                $("#drone-body").finish().animate({
                    top: "-="+numberOFPixel
                });
            }
            break;
        case 39:
            shouldAnimate = checkBoundry('x');
            if(shouldAnimate){
                $("#drone-body").finish().animate({
                    left: "+="+numberOFPixel
                });
            }
            break;
        case 40:
            shouldAnimate = checkBoundry('y');
            if(shouldAnimate){
                $("#drone-body").finish().animate({
                    top: "+="+numberOFPixel
                });
            }
            break;
        default:
            break;
    }
});

function checkBoundry(fromAxis){
    var droneWidth    = $('#drone-body').width();
    var dronePosition = $("#drone-body").position();
    var documentWidth  = $(document).width();
    var documentHeight = $(document).height();
    var shouldMove     = false;
    if(fromAxis == 'x'){
        var calculatedDroneLeftPosition = (2*dronePosition.left) + droneWidth + 30;
        calculatedDroneLeftPosition = Math.abs(calculatedDroneLeftPosition);
        console.log('calculatedDroneLeftPosition : ', calculatedDroneLeftPosition);
        console.log('droneWidth : ', droneWidth);
        console.log('documentWidth : ', documentWidth);
        if(calculatedDroneLeftPosition < documentWidth){
            shouldMove = true;
        }
    } else {
        var calculatedDroneTopPosition = (2*dronePosition.top) + droneWidth + 30;
        calculatedDroneTopPosition = Math.abs(calculatedDroneTopPosition);
        // console.log('calculatedDroneTopPosition : ', calculatedDroneTopPosition);
        // console.log('documentHeight : ', documentHeight);
        if((calculatedDroneTopPosition < documentHeight) && calculatedDroneTopPosition > 0){
            shouldMove = true;
        }
    }
    return shouldMove;
}

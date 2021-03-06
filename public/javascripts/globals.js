var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Click type enum
const clickTypes = {
    FILL : 1,
    MARK: 2,
    BLACK: 3,
    WHITE: 4,
    COLOR: 5
}

// Draw array
var drawArray = [];

// Click checker array
var clickArray = [];

function percentwidth(elem){
    var pa= elem.offsetParent || elem;
    return Math.floor((elem.offsetWidth/pa.offsetWidth*100)+0.5)/100;
}

// Listens for clicks
c.addEventListener('click', (e) => {
    // Border size
    var borderSize = parseInt(getComputedStyle(c).getPropertyValue("border-left-width").replace(/px/g, ''));
    var perWidth = percentwidth(c);
    var canvasSize = window.innerWidth*perWidth;
    var canvasCorrection = 1000/canvasSize;
    // Calculate click x and y with position and border
    var clickX = Math.floor((e.clientX - c.getBoundingClientRect().x - borderSize)*canvasCorrection);
    var clickY = Math.floor((e.clientY - c.getBoundingClientRect().y - borderSize)*canvasCorrection);
    console.log('correction: ' + canvasCorrection + '\nclickX: ' + clickX + ' clickY: ' + clickY);
    
    // Check clicked
    clickArray.forEach(element => {
        element.click(clickX, clickY);
    });
});

// Called every 33ms (~30 FPS)
function refresh() {

    // Clear screen
    ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    // Draw
    drawArray.forEach(element => {
        element.draw();
    });

}

// Set game loop timer
window.setInterval(refresh, 33);
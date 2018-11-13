function GridSelector(x, y, gridSize) {
    this.x = x;
    this.y = y;
    this.gridSize = gridSize;
    
    const width = 100;
    const height = 50;

    let text = this.gridSize + ' X ' + this.gridSize;
    ctx.font = (height-30) + "px Courier";
    let textWidth = ctx.measureText(text).width;

    let tempX = Math.floor( (width - textWidth) / 2 );
    let tempY = Math.floor( height / 2 );

    // Draw Grid Selector
    this.draw = function () {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.x, width, height);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x+width, this.y);
        ctx.lineTo(this.x+width, this.y+height);
        ctx.lineTo(this.x, this.y + 50);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#000000";
        ctx.textBaseline = "middle";
        ctx.fillText(text, this.x + tempX, this.y + tempY);
    }

    this.clickGridSelector = function (clickX, clickY) {

    }

}
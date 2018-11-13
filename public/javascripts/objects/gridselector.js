function GridSelector(x, y, gridSize) {
    this.x = x;
    this.y = y;
    this.gridSize = gridSize;
    
    const width = 100;
    const height = 50;

    let offset = 0;
    let counter = 0;
    let set = false;

    let text = this.gridSize + ' X ' + this.gridSize;
    ctx.font = (height-30) + "px Courier";
    let textWidth = ctx.measureText(text).width;

    let tempX = Math.floor( (width - textWidth) / 2 );
    let tempY = Math.floor( height / 2 );

    // Draw Grid Selector
    this.draw = function () {
        --counter;
        if (counter < 0) {
            counter = 0;
            offset = 0;
            if (set == true) {
                set = false;
                build(this.gridSize);
            }
        }

        ctx.fillStyle = "#FFFFFF";

        ctx.shadowColor = "#000000"
        ctx.shadowOffsetX = 4 - offset;
        ctx.shadowOffsetY = 4 - offset;
        ctx.shadowBlur = 4 - offset;

        ctx.fillRect(this.x + offset, this.y + offset, width, height);

        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.x + offset, this.y + offset);
        ctx.lineTo(this.x + offset + width, this.y + offset);
        ctx.lineTo(this.x + offset + width, this.y + offset + height);
        ctx.lineTo(this.x + offset, this.y + offset + 50);
        ctx.lineTo(this.x + offset, this.y + offset);
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#000000";
        ctx.textBaseline = "middle";
        ctx.fillText(text, this.x + offset + tempX, this.y + offset + tempY);

        
    }

    this.click = function (clickX, clickY) {
        if (clickX > this.x && clickX < this.x + width &&
            clickY > this.y && clickY < this.y + height) {
            offset = 4;
            counter = 5;
            set = true;
        }
    }

}
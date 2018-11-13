function WinGrid(posX, posY, size, cellSize) {
    this.x = posX;
    this.y = posY;
    this.size = size;
    this.cellSize = cellSize;
    this.gridWidth = size*cellSize;
    this.clickType = clickTypes.FILL;

    this.draw = function () {
        ctx.beginPath();
        ctx.lineWidth = 3;
        
        fLevel.forEach((element,i) => {
            element.forEach((winCell,j) => {
                ctx.fillStyle = winCell;
                ctx.fillRect(this.x + (j*this.cellSize),
                             this.y + (i*this.cellSize),
                             this.cellSize,
                             this.cellSize);
            });
        });

        // Draw lines
        ctx.moveTo(this.x, this.y);

        ctx.lineTo(this.x + (cellSize*size), this.y);
        ctx.lineTo(this.x + (cellSize*size), this.y + (cellSize*size));
        ctx.lineTo(this.x, this.y + (cellSize*size));
        ctx.lineTo(this.x, this.y);

        // Draw all the lines
        ctx.stroke();

        ctx.closePath();

        // Draw text
        const birthdayString = "Happy Birthday, Dyani!"
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#000000"
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        ctx.font = "50px Ariel";
        var textWidth = ctx.measureText(birthdayString).width;
        ctx.fillText(birthdayString,(c.width-textWidth)/2,500);
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;

    }

    this.click = function (clickX,clickY) {
        // Empty
    }

    function checkWin() {
        // Empty
    }
}
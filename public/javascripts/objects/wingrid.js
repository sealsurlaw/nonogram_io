function WinGrid(posX, posY, size, cellSize) {
    x = posX;
    y = posY;
    this.size = size;
    this.cellSize = cellSize;
    this.gridWidth = size*cellSize;
    this.clickType = clickTypes.FILL;

    this.drawGrid = function () {
        
        fLevel.forEach((element,i) => {
            element.forEach((winCell,j) => {
                if (winCell == R) {
                    ctx.fillStyle = "#FF0000";
                }
                else if (winCell == B) {
                    ctx.fillStyle = "#000000";
                }
                else if (winCell == Y) {
                    ctx.fillStyle = "#FFFF00";
                }
                else if (winCell == G) {
                    ctx.fillStyle = "#EEEE00";
                }
                ctx.fillRect(y+(j*this.cellSize),x+(i*this.cellSize),this.cellSize,this.cellSize);
            });
        });

        // Draw right line
        ctx.moveTo(y+(cellSize*size),x);
        ctx.lineTo(y+(cellSize*size),x+(cellSize*size));

        // Draw left line
        ctx.moveTo(y,x);
        ctx.lineTo(y,x+(cellSize*size));

        // Draw bottom line
        ctx.moveTo(y,x+(cellSize*size));
        ctx.lineTo(y+(cellSize*size),x+(cellSize*size));

        // Draw top line
        ctx.moveTo(y,x);
        ctx.lineTo(y+(cellSize*size),x);

        // Draw all the lines
        ctx.stroke();

        ctx.closePath();

        // Draw text
        const birthdayString = "Happy Birthday, Dyani!"
        ctx.font = "50px Ariel";
        var textWidth = ctx.measureText(birthdayString).width;
        ctx.fillText(birthdayString,(c.width-textWidth)/2,500);

    }

    function checkWin() {
        // Empty
    }

    this.cellWasClicked = function (clickX,clickY) {
        // Empty
    }
}
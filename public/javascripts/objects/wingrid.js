function WinGrid(posX, posY, size, cellSize) {
    this.x = posX;
    this.y = posY;
    this.size = size;
    this.cellSize = Math.floor(cellSize);
    this.gridWidth = size*cellSize;
    this.clickType = clickTypes.FILL;

    this.draw = function () {
        ctx.beginPath();
        ctx.lineWidth = 3;
        
        fLevel.forEach((element,i) => {
            element.forEach((winCell,j) => {
                ctx.fillStyle = winCell;
                ctx.strokeStyle = winCell;
                ctx.fillRect(this.x + (j*this.cellSize),
                             this.y + (i*this.cellSize),
                             this.cellSize,
                             this.cellSize);
            });
        });

    }

    this.click = function (clickX,clickY) {
        // Empty
    }

    function checkWin() {
        // Empty
    }
}
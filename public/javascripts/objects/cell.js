function Cell(posX, posY, size, filled, marked, corner) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.filled = filled;
    this.marked = marked;
    
    this.drawCell = function () {
        if (this.filled == true) {
            ctx.fillStyle = "#333333";
            ctx.fillRect(posX,posY,size,size);
        }
        else {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(posX,posY,size,size);
        }
        if (this.marked == true) {
            // ctx.strokeStyle = "#FF0000";
            ctx.moveTo(posX,posY);
            ctx.lineTo(posX+size,posY+size);

            ctx.moveTo(posX+size,posY);
            ctx.lineTo(posX,posY+size);
        }
        // ctx.strokeStyle = "#000000";
        ctx.moveTo(posX,posY);
        ctx.lineTo(posX+size,posY);

        ctx.moveTo(posX,posY);
        ctx.lineTo(posX,posY+size);
    }

    this.wasClicked = function () {
        if (grid.clickType == clickTypes.FILL) {
            if (this.filled == false) {
                this.filled = true;
                this.marked = false;
            }
            else if (this.filled == true) {
                this.filled = false;
            }
        }
        else if (grid.clickType == clickTypes.MARK) {
            if (this.marked == false && this.filled == false) {
                this.marked = true;
            }
            else if (this.marked == true) {
                this.marked = false;
            }
        }
    }

}
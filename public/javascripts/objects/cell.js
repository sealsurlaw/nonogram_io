function Cell(posX, posY, size, filled, marked) {
    this.x = posX;
    this.y = posY;
    this.size = size;
    this.filled = filled;
    this.marked = marked;
    
    this.drawCell = function () {
        if (this.filled == true) {
            ctx.fillStyle = "#00FFFF";
            ctx.fillRect(this.x, this.y, size, size);
        }
        else {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(this.x, this.y, size, size);
        }
        if (this.marked == true) {
            // ctx.strokeStyle = "#FF0000";
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + size, this.y + size);

            ctx.moveTo(this.x + size, this.y);
            ctx.lineTo(this.x, this.y + size);
        }
        // ctx.strokeStyle = "#000000";
        ctx.moveTo(this.x + size, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + size);
    }
}
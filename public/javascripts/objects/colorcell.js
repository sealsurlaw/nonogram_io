function ColorCell(posX, posY, size) {
    this.x = posX;
    this.y = posY;
    this.size = size;
    this.filled = false;
    this.color = "#000000";
    this.blackNotColor = true;
    this.blackNotWhite = true;
    
    this.drawCell = function () {
        if (this.filled == true) {
            if (this.blackNotColor) {
                if (this.blackNotWhite) {
                    ctx.fillStyle = "#333333";
                    ctx.fillRect(this.x, this.y, this.size, this.size);
                }
                else {
                    ctx.fillStyle = "#FFFFFF";
                    ctx.fillRect(this.x, this.y, this.size, this.size);
                }
            }
            else {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }
        else {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(this.x, this.y, this.size/2, this.size/2);
            ctx.fillRect(this.x + this.size/2, this.y + this.size/2, this.size/2, this.size/2);
            ctx.fillStyle = "#DDDDDD";
            ctx.fillRect(this.x + this.size/2, this.y, this.size/2, this.size/2);
            ctx.fillRect(this.x, this.y + this.size/2, this.size/2, this.size/2);
        }

        ctx.strokeStyle = "#000000";
        ctx.moveTo(this.x + size, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + size);
    }
}
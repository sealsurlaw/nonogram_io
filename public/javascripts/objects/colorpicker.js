function ColorPicker (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 30;
    this.picked = false;

    let counter = 0;
    let flash = true;

    this.draw = function () {
        ++counter;
        if (counter % 20 == 0) {
            if (flash == true) flash = false;
            else flash = true;
        }

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);

        if (this.picked == false) {
            ctx.beginPath();
            ctx.strokeStyle = "#000000";
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
            ctx.closePath();
        }
        else {
            if (flash == true) {
                ctx.strokeStyle = "#FFFFFF";
            }
            else {
                ctx.strokeStyle = "#000000";
            }
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.size/3);
            ctx.lineTo(this.x, this.y);
            ctx.lineTo(this.x + this.size/3, this.y);

            ctx.moveTo(this.x + this.size*2/3, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y + this.size/3);

            ctx.moveTo(this.x, this.y + this.size*2/3);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.lineTo(this.x + this.size/3, this.y + this.size);

            ctx.moveTo(this.x + this.size*2/3, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size*2/3);

            ctx.stroke();
            ctx.closePath();
        }
    }

    this.click = function (clickX, clickY) {
        if (clickX > this.x && clickX < this.x + this.size &&
            clickY > this.y && clickY < this.y + this.size) {
            counter = 0;
            flash = true;
            return true;
        }
        else {
            return null;
        }
    }
}
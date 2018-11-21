function ExportButton(x, y, grid) {
    this.x = x;
    this.y = y;
    this.grid = grid;

    let size = 50;
    let offset = 0;
    let counter = 0;

    this.draw = function () {
        --counter;
        if (counter < 0) {
            offset = 0;
            counter = 0;
        }

        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#FF0000";

        ctx.shadowColor = "#000000"
        ctx.shadowOffsetX = 4 - offset;
        ctx.shadowOffsetY = 4 - offset;
        ctx.shadowBlur = 4 - offset;

        ctx.beginPath();
        ctx.arc(this.x + size/2 + offset,
                this.y + size/2 + offset,
                size/2,
                0.5*Math.PI,
                1.5*Math.PI);
        ctx.lineTo(this.x + size/2 + 80 + offset, this.y + offset);     
        ctx.arc(this.x + size/2 + 80 + offset,
            this.y + size/2 + offset,
            size/2,
            1.5*Math.PI,
            0.5*Math.PI);
        ctx.lineTo(this.x + size/2 + offset, this.y + size + offset);
        ctx.fill();
        ctx.closePath();

        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(this.x + size/2 + offset,
                this.y + size/2 + offset,
                size/2,
                0.5*Math.PI,
                1.5*Math.PI);
        ctx.lineTo(this.x + size/2 + 80 + offset, this.y + offset);     
        ctx.arc(this.x + size/2 + 80 + offset,
            this.y + size/2 + offset,
            size/2,
            1.5*Math.PI,
            0.5*Math.PI);
        ctx.lineTo(this.x + size/2 + offset, this.y + size + offset);
        ctx.stroke();
        ctx.closePath();

        let exportString = "SAVE";

        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#000000"
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;

        ctx.font = "30px Courier";
        ctx.strokeStyle = "#FFFFFF";
        let textWidth = Math.floor( ctx.measureText(exportString).width );
        ctx.textBaseline = "middle";
        ctx.fillText(exportString,
                    this.x + (130 - textWidth)/2 + offset,
                    this.y + size/2 + offset);

        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
    }

    this.click = function (clickX, clickY) {
        if (clickX > this.x && clickX < this.x + 130 &&
            clickY > this.y && clickY < this.y + size) {
                offset = 4;
                counter = 5;
                saveMap();
            }
    }

    function saveMap() {
        grid.exportLevel();
    }
}
function ToggleBlackOrColor(togX,togY,initialState,gridRef) {
    this.state = initialState;  // Black or color
    this.togX = togX;           // X
    this.togY = togY;           // Y
    this.size = 30;             // Dimension size
    this.grid = gridRef;

    // Drawn every 33ms
    this.draw = function() {
        // Black and white square on left
        ctx.fillStyle = "#333333";
        ctx.fillRect(this.togX, this.togY, this.size/2, this.size/2);
        ctx.fillRect(this.togX + this.size/2, this.togY + this.size/2, this.size/2, this.size/2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.togX + this.size/2, this.togY, this.size/2, this.size/2);
        ctx.fillRect(this.togX, this.togY + this.size/2, this.size/2, this.size/2);

        // Color square on right
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.togX + 100, this.togY, this.size/3, this.size);
        ctx.fillStyle = "#FFFF00";
        ctx.fillRect(this.togX + 10 + 100, this.togY, this.size/3, this.size);
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(this.togX + 20 + 100, this.togY, this.size/3, this.size);

        // Border lines
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.lineWidth = 3;

        // Black box border
        ctx.moveTo(this.togX, this.togY);
        ctx.lineTo(this.togX + this.size, this.togY);
        ctx.lineTo(this.togX + this.size, this.togY + this.size);
        ctx.lineTo(this.togX, this.togY + this.size);
        ctx.lineTo(this.togX, this.togY);

        // White box border
        ctx.moveTo(this.togX + 100, this.togY);
        ctx.lineTo(this.togX + 100 +this.size, this.togY);
        ctx.lineTo(this.togX + 100 + this.size, this.togY + this.size);
        ctx.lineTo(this.togX + 100, this.togY + this.size);
        ctx.lineTo(this.togX + 100, this.togY);

        ctx.stroke();
        ctx.closePath();

        // Center toggle
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#000000";
        ctx.arc(this.togX + this.size + 10 + this.size/2,
                this.togY + this.size/2,
                this.size/2,
                0.5*Math.PI,
                1.5*Math.PI);
        ctx.arc(this.togX + this.size + 30 + this.size/2,
            this.togY + this.size/2,
            this.size/2,
            1.5*Math.PI,
            0.5*Math.PI);
        ctx.lineTo(this.togX + this.size + 10 + this.size/2, this.togY + this.size);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // Center circle
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.strokeStyle = "#000000";
        if (this.state == clickTypes.BLACK) {
            ctx.arc(this.togX + this.size + 10 + this.size/2,
                this.togY + this.size/2,
                this.size/2 - 5,
                0*Math.PI,
                2*Math.PI);
        }
        else {
            ctx.arc(this.togX + this.size + 30 + this.size/2,
                this.togY + this.size/2,
                this.size/2 - 5,
                0*Math.PI,
                2*Math.PI);
        }
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    // When clicked
    this.click = function(clickX,clickY) {
        if (clickX > this.togX && clickX < this.togX + 100 + this.size &&
            clickY > this.togY && clickY < this.togY + this.size) {
            if (this.state == clickTypes.BLACK) {
                this.state = clickTypes.COLOR;
                this.grid.updateToColor(true);
            }
            else {
                this.state = clickTypes.BLACK;
                this.grid.updateToColor(false);
            }
        }
    }
}
function Toggle(togX,togY,initialState,gridRef) {
    this.state = initialState;  // Fill or marked
    this.togX = togX;           // X
    this.togY = togY;           // Y
    this.size = 100;            // Dimension size

    // Drawn every 33ms
    this.drawToggle = function() {
        // Red square
        if (this.state == clickTypes.FILL) {
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(this.togX,this.togY,this.size,this.size);
        }
        // Red X
        else if (this.state == clickTypes.MARK) {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(this.togX,this.togY,this.size,this.size);

            ctx.strokeStyle = "#FF0000";
            ctx.beginPath();
            ctx.lineWidth = 5;

            ctx.moveTo(this.togX,this.togY);
            ctx.lineTo(this.togX+this.size,this.togY+this.size);

            ctx.moveTo(this.togX+this.size,this.togY);
            ctx.lineTo(this.togX,this.togY+this.size);

            ctx.stroke();

            ctx.closePath();
        }

        // Border line
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.lineWidth = 3;

        ctx.moveTo(this.togX,this.togY);
        ctx.lineTo(this.togX+this.size,this.togY);

        ctx.moveTo(this.togX,this.togY);
        ctx.lineTo(this.togX,this.togY+this.size);

        ctx.moveTo(this.togX,this.togY+this.size);
        ctx.lineTo(this.togX+this.size,this.togY+this.size);

        ctx.moveTo(this.togX+this.size,this.togY);
        ctx.lineTo(this.togX+this.size,this.togY+this.size);

        ctx.stroke();

        ctx.closePath();
    }

    // When clicked
    this.clickToggle = function(clickX,clickY) {
        if (clickX > this.togX && clickX < this.togX+this.size &&
            clickY > this.togY && clickY < this.togY+this.size) {
            if (this.state == clickTypes.FILL)
                this.state = clickTypes.MARK;
            else 
                this.state = clickTypes.FILL;
        }
        gridRef.clickType = this.state;
    }
}
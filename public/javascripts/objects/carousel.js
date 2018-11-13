function Carousel (x, y, grid) {
    this.x = x;
    this.y = y;
    this.grid = grid;

    let colors = [];

    this.draw = function () {
        colors.forEach(element => {
            element.draw();
        });
    }

    this.click = function (clickX, clickY) {
        var colorClicked;
        if (clickX > this.x && clickX < this.x + 130 &&
            clickY > this.y && clickY < this.y + 350) {
            
            colors.forEach( function(element) {
                element.picked = false;
                if ( element.click(clickX, clickY) )
                    colorClicked = element

            });

            if (colorClicked) {
                colorClicked.picked = true;
                grid.color = colorClicked.color;
            }
        }
    }

    // Black and white
    colors.push( new ColorPicker(this.x + 10, this.y, "#000000") );
    colors.push( new ColorPicker(this.x + 50, this.y, "#555555") );
    colors.push( new ColorPicker(this.x + 90, this.y, "#FFFFFF") );

    // Red
    colors.push( new ColorPicker(this.x + 10, this.y + 40, "#990000") );
    colors.push( new ColorPicker(this.x + 50, this.y + 40, "#FF0000") );
    colors.push( new ColorPicker(this.x + 90, this.y + 40, "#FF9999") );

    // Green
    colors.push( new ColorPicker(this.x + 10, this.y + 80, "#008800") );
    colors.push( new ColorPicker(this.x + 50, this.y + 80, "#55FF55") );
    colors.push( new ColorPicker(this.x + 90, this.y + 80, "#BBFFBB") );

    // Blue
    colors.push( new ColorPicker(this.x + 10, this.y + 120, "#000088") );
    colors.push( new ColorPicker(this.x + 50, this.y + 120, "#0055FF") );
    colors.push( new ColorPicker(this.x + 90, this.y + 120, "#00FFFF") );

    // Yellow
    colors.push( new ColorPicker(this.x + 10, this.y + 160, "#888800") );
    colors.push( new ColorPicker(this.x + 50, this.y + 160, "#FFFF00") );
    colors.push( new ColorPicker(this.x + 90, this.y + 160, "#FFFF99") );

    // Purple
    colors.push( new ColorPicker(this.x + 10, this.y + 200, "#550055") );
    colors.push( new ColorPicker(this.x + 50, this.y + 200, "#8855AA") );
    colors.push( new ColorPicker(this.x + 90, this.y + 200, "#FF55FF") );

    // Orange
    colors.push( new ColorPicker(this.x + 10, this.y + 240, "#885500") );
    colors.push( new ColorPicker(this.x + 50, this.y + 240, "#FF8800") );
    colors.push( new ColorPicker(this.x + 90, this.y + 240, "#FFBB00") );

    colors[0].picked = true;
    this.grid.color = colors[0].color;
    
}
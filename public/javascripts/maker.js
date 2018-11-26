// var bg = new Background(50);
var grid;
var toggle1;
var toggle2;
var carousel;
var exportButton;

// drawArray.push(bg);

var selector1 = new GridSelector(450, 80, 5);
var selector2 = new GridSelector(450, 160, 10);
var selector3 = new GridSelector(450, 240, 15);
var selector4 = new GridSelector(450, 320, 20);
var selector5 = new GridSelector(450, 400, 25);

drawArray.push(selector1);
drawArray.push(selector2);
drawArray.push(selector3);
drawArray.push(selector4);
drawArray.push(selector5);

clickArray.push(selector1);
clickArray.push(selector2);
clickArray.push(selector3);
clickArray.push(selector4);
clickArray.push(selector5);

var build = function (size) {
    const gridSize = size;              // Number of cells in height and width
    const gridCellSize = 120/(gridSize/5);

    grid = new FluidGrid(200,20,gridSize,gridCellSize);
    toggle1 = new ToggleBlackOrWhite(850, 20, clickTypes.BLACK, grid);
    toggle2 = new ToggleBlackOrColor(850, 70, clickTypes.BLACK, grid);
    carousel = new Carousel(850, 120, grid);
    exportButton = new ExportButton(850, 410, grid);

    drawArray.pop();
    drawArray.pop();
    drawArray.pop();
    drawArray.pop();
    drawArray.pop();

    // drawArray.push(bg);
    drawArray.push(grid);
    drawArray.push(toggle1);
    drawArray.push(toggle2);
    drawArray.push(carousel);
    drawArray.push(exportButton);

    clickArray.pop();
    clickArray.pop();
    clickArray.pop();
    clickArray.pop();
    clickArray.pop();

    clickArray.push(grid);
    clickArray.push(toggle1);
    clickArray.push(toggle2);
    clickArray.push(carousel);
    clickArray.push(exportButton);
}
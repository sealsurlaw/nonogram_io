var bg = new Background(50);
var grid;
var toggle1;
var toggle2;
var carousel;
var exportButton;

drawArray.push(bg);

var selector1 = new GridSelector(350, 100, 5);
var selector2 = new GridSelector(350, 200, 10);
var selector3 = new GridSelector(350, 300, 15);
var selector4 = new GridSelector(350, 400, 20);

drawArray.push(selector1);
drawArray.push(selector2);
drawArray.push(selector3);
drawArray.push(selector4);

clickArray.push(selector1);
clickArray.push(selector2);
clickArray.push(selector3);
clickArray.push(selector4);

var build = function (size) {
    grid = new FluidGrid(200,20,size,400/(size+1));
    toggle1 = new ToggleBlackOrWhite(650, 20, clickTypes.BLACK, grid);
    toggle2 = new ToggleBlackOrColor(650, 70, clickTypes.BLACK, grid);
    carousel = new Carousel(650, 120, grid);
    exportButton = new ExportButton(650, 410, grid);

    drawArray.pop();
    drawArray.pop();
    drawArray.pop();

    drawArray.push(bg);
    drawArray.push(grid);
    drawArray.push(toggle1);
    drawArray.push(toggle2);
    drawArray.push(carousel);
    drawArray.push(exportButton);

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
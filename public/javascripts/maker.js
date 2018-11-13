var bg = new Background(50);
var grid = new FluidGrid(200,20,10,40);
var toggle1 = new ToggleBlackOrWhite(650, 20, clickTypes.BLACK, grid);
var toggle2 = new ToggleBlackOrColor(650, 70, clickTypes.BLACK, grid);
var carousel = new Carousel(650, 120, grid);
var exportButton = new ExportButton(650, 410, grid);

drawArray.push(bg);
drawArray.push(grid);
drawArray.push(toggle1);
drawArray.push(toggle2);
drawArray.push(carousel);
drawArray.push(exportButton);

clickArray.push(grid);
clickArray.push(toggle1);
clickArray.push(toggle2);
clickArray.push(carousel);
clickArray.push(exportButton);
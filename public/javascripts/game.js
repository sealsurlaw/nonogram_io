const gridSize = level.length;              // Number of cells in height and width
const gridCellSize = 120/(gridSize/5);      // Size of each cell

// Create new grid and toggle
var grid = new Grid(200,70,gridSize,gridCellSize);
var toggle = new Toggle(435,20, clickTypes.FILL,grid);
// var bg = new Background(50);

// drawArray.push(bg);
drawArray.push(toggle);
drawArray.push(grid);

clickArray.push(grid);
clickArray.push(toggle);

c.addEventListener('click', (e) => {
    if (grid.checkWin()) {
        drawArray.pop();
        drawArray.push(new WinGrid(200, 70, gridSize, gridCellSize));
    }
});
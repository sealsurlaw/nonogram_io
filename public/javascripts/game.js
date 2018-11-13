const gridSize = level.length;              // Number of cells in height and width
const gridCellSize = 50 - (level.length);   // Size of each cell

// Calculate center of canvas x
var gridX = Math.floor((c.width - (gridSize*gridCellSize)) / 2);

// Create new grid and toggle
var grid = new Grid(gridX, 20, gridSize, gridCellSize);
var toggle = new Toggle(650,20, clickTypes.FILL,grid);
var bg = new Background(50);

drawArray.push(bg);
drawArray.push(grid);
drawArray.push(toggle);

clickArray.push(grid);
clickArray.push(toggle);
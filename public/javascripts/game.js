// Level solution map
const level = [[0,0,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,0,0,1,1],
                [1,0,1,0,1,0,0,0,0,1],
                [1,0,1,0,1,0,0,0,0,0],
                [1,1,1,1,1,0,0,0,0,0],
                [1,0,1,1,1,0,0,0,0,1],
                [1,1,0,0,1,1,0,0,1,1],
                [0,1,1,1,1,1,1,1,1,0],
                [0,0,1,1,1,1,1,1,0,0]];

// Colored final level
const fLevel = [[B,B,Y,G,Y,G,Y,G,Y,B],
                [B,Y,G,Y,G,Y,G,Y,G,Y],
                [Y,G,Y,G,Y,G,B,B,Y,G],
                [G,R,G,R,G,B,B,B,B,Y],
                [Y,R,Y,R,Y,B,B,B,B,B],
                [G,Y,G,Y,G,B,B,B,B,B],
                [Y,B,Y,G,Y,B,B,B,B,G],
                [G,Y,B,B,G,Y,B,B,G,Y],
                [B,G,Y,G,Y,G,Y,G,Y,B],
                [B,B,G,Y,G,Y,G,Y,B,B]];

const gridSize = 10;        // Number of cells in height and width
const gridCellSize = 40;    // Size of each cell

// Calculate center of canvas x
var gridX = Math.floor((c.width - (gridSize*gridCellSize)) / 2);

// Create new grid and toggle
var grid = new Grid(20,gridX,gridSize,gridCellSize);
var toggle = new Toggle(680,20, clickTypes.FILL,grid);

// Listens for clicks
c.addEventListener('click', (e) => {
    // Border size
    var borderSize = parseInt(getComputedStyle(c).getPropertyValue("border-left-width").replace(/px/g, ''));
    // Calculate click x and y with position and border
    var clickX = Math.floor(e.clientX - c.getBoundingClientRect().x - borderSize);
    var clickY = Math.floor(e.clientY - c.getBoundingClientRect().y - borderSize);
    // Check if a cell was clicked
    grid.cellWasClicked(clickX, clickY);
    // Check if toggle was clicked
    toggle.clickToggle(clickX,clickY);
    console.log(clickX + ", " + clickY);
});

// Called every 33ms (~30 FPS)
function refresh() {

    // Clear screen
    ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

    // Draw grid and toggle
    grid.drawGrid();
    toggle.drawToggle();

}

// Set game loop timer
window.setInterval(refresh, 33);
function Grid(posX, posY, size, cellSize) {
    x = posX;
    y = posY;
    this.size = size;
    this.cellSize = cellSize;
    this.gridWidth = size*cellSize;
    this.clickType = clickTypes.FILL;

    // All the cells in a grid
    var cellArray;

    this.drawGrid = function () {
        ctx.beginPath();
        ctx.lineWidth = 3;

        cellArray.forEach(element => {
            element.forEach(thisCell => {
                thisCell.drawCell();
            });
        });

        // Draw right line
        ctx.moveTo(y+(cellSize*size),x);
        ctx.lineTo(y+(cellSize*size),x+(cellSize*size));

        // Draw bottom line
        ctx.moveTo(y,x+(cellSize*size));
        ctx.lineTo(y+(cellSize*size),x+(cellSize*size));

        // Draw all the lines
        ctx.stroke();
        ctx.closePath();

        //Draw thick middle lines if even
        if (this.size % 2 == 0) {
            ctx.beginPath();

            ctx.lineWidth = 8;

            let midX = x + (this.gridWidth/2);
            let midY = y + (this.gridWidth/2);

            ctx.moveTo(midY,x);
            ctx.lineTo(midY,x+(cellSize*size));

            ctx.moveTo(y,midX);
            ctx.lineTo(y+(cellSize*size),midX);

            ctx.stroke();
            ctx.closePath();

        }

        // Draw side numbers
        ctx.fillStyle = "#000000";
        ctx.font = (cellSize-10) + "px Courier";

        leftSideNumbers.forEach(function(row, i){
            var leftString = leftSideNumbers[i].join();
            leftString = leftString.replace(/,/g, ' ');
            var textWidth = ctx.measureText(leftString).width;
            ctx.fillText(leftString,y-textWidth-5,cellArray[i][0].posY+30);
        });

        bottomSideNumbers.forEach((element,i) => {
            var tempY = x + this.size * this.cellSize + 25;
            element.forEach(number => {
                var tempX;
                // Single digit
                if (Math.floor(number/10) == 0) {
                    tempX = cellArray[0][i].posX + 10;
                }
                // Multidigit
                else {
                    tempX = cellArray[0][i].posX;
                }
                ctx.fillText(number,tempX,tempY);
                tempY += cellSize-5;
            });
        });

    }

    function checkWin() {
        for (var i = 0; i < cellArray.length; ++i) {
            for (var j = 0; j < cellArray[0].length; ++j) {
                if (cellArray[i][j].filled == true  && level[i][j] == 0 ||
                    cellArray[i][j].filled == false && level[i][j] == 1) {
                    return false;
                }
            }
        }
        grid = new WinGrid(20,gridX,gridSize,gridCellSize);
        return true;
    }

    this.cellWasClicked = function (clickX,clickY) {
        cellArray.forEach(function(element, i) {
            element.forEach(function(thisCell,j) {
                if (clickX > thisCell.posX && clickX < (thisCell.posX + thisCell.size)
                    && clickY > thisCell.posY && clickY < (thisCell.posY + thisCell.size)) {
                        thisCell.wasClicked();
                        checkWin();
                    }
            });
        });
    }

    

    this.exportLevel = function() {
        var exportedLevel = [];
        cellArray.forEach((element,i) => {
            exportedLevel.push([]);
            element.forEach((element2,j) => {
                if (element2["filled"] == false) {
                    exportedLevel[i].push(0);
                }
                else {
                    exportedLevel[i].push(1);
                }
            });
        });
        return JSON.stringify(exportedLevel);
    }

    // Populate side numbers
    var leftSideNumbers = [];
    var bottomSideNumbers = [];
    for (var i = 0; i < level.length; ++i) {
        var zero = true;
        var counter = 0;
        leftSideNumbers.push([]);
        for (var j = 0; j < level.length; ++j) {
            if (level[i][j] == 1) {
                zero = false;
                ++counter;
            }
            else if (level[i][j] == 0 && zero == false) {
                zero = true;
                leftSideNumbers[i].push(counter);
                counter = 0;
            }
        }
        if (zero == false) leftSideNumbers[i].push(counter);
        if (leftSideNumbers[i].length == 0) leftSideNumbers[i].push(0);
    }
    for (var i = 0; i < level.length; ++i) {
        var zero = true;
        var counter = 0;
        bottomSideNumbers.push([]);
        for (var j = 0; j < level.length; ++j) {
            if (level[j][i] == 1) {
                zero = false;
                ++counter;
            }
            else if (level[j][i] == 0 && zero == false) {
                zero = true;
                bottomSideNumbers[i].push(counter);
                counter = 0;
            }
        }
        if (zero == false) bottomSideNumbers[i].push(counter);
        if (bottomSideNumbers[i].length == 0) bottomSideNumbers[i].push(0);
    }

    cellArray = new Array(size);
    for (var i = 0; i < cellArray.length; ++i) {
        cellArray[i] = new Array(size);
    }
    for (var i = 0; i < cellArray.length; ++i) {
        for (var j = 0; j < cellArray.length; ++j) {
            var cellX = posY+(j*cellSize);
            var cellY = posX+(i*cellSize);
            var isFilled = false;
            // var isFilled;
            // if (level[i][j] == 1) {
            //     isFilled = true;
            // }
            // else {
            //     isFilled = false;
            // }
            cellArray[i][j] = new Cell(cellX, cellY, cellSize, isFilled, false, null);
        }
    }
}
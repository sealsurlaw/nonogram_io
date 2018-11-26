function Grid(posX, posY, size, cellSize) {
    this.x = posX;
    this.y = posY;
    this.size = size;
    this.cellSize = cellSize;
    this.gridWidth = size*cellSize;
    this.clickType = clickTypes.FILL;

    // All the cells in a grid
    var cellArray;

    this.draw = function () {
        ctx.beginPath();
        ctx.lineWidth = 3;

        cellArray.forEach(element => {
            element.forEach(thisCell => {
                thisCell.drawCell();
            });
        });

        // Draw right line
        ctx.moveTo(this.x + (cellSize*size), this.y);
        ctx.lineTo(this.x + (cellSize*size), this.y + (cellSize*size));
        // Draw bottom line
        ctx.lineTo(this.x, this.y + (cellSize*size));

        // Draw all the lines
        ctx.stroke();
        ctx.closePath();

        //Draw thick middle lines if multiple of 5
        let midX = this.x;
        let midY = this.y;
        if (this.size % 5 == 0) {

            ctx.beginPath();
            ctx.lineWidth = Math.floor( this.cellSize / 4 );

            for (let i = 0; i < (this.size/5) - 1; ++i) {
                midX += 5*this.cellSize;
                midY += 5*this.cellSize;

                // Vertical line
                ctx.moveTo(midX, this.y);
                ctx.lineTo(midX, this.y + (cellSize*size));

                // Horizontal line
                ctx.moveTo(this.x, midY);
                ctx.lineTo(this.x + (cellSize*size), midY);

                ctx.stroke();
            }

            ctx.closePath();

        }

        // Draw side numbers
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#000000"
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;

        ctx.font = (cellSize/2) + "px Courier";

        leftSideNumbers.forEach( (row, i) => {
            var leftString = leftSideNumbers[i].join();
            leftString = leftString.replace(/,/g, ' ');
            let textWidth = Math.floor( ctx.measureText(leftString).width );
            ctx.textBaseline = "middle";
            ctx.fillText(leftString,
                         this.x - textWidth - 5,
                         cellArray[i][0].y + (this.cellSize/2));
            ctx.fillText(leftString,
                         this.x - textWidth - 5,
                         cellArray[i][0].y + (this.cellSize/2));
        });

        bottomSideNumbers.forEach( (element,i) => {
            var tempY = this.y + (this.size * this.cellSize) + 5;
            element.forEach( number => {
                ctx.textBaseline = "hanging";
                let tempX = (cellArray[0][i].x + (this.cellSize - ctx.measureText(number).width)/2);
                ctx.fillText(number,tempX,tempY);
                ctx.fillText(number,tempX,tempY);
                tempY += cellSize/2 + 5;
            });
        });

        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;

    }

    this.click = function (clickX,clickY) {
        cellArray.forEach( (element) => {
            element.forEach( (thisCell) => {
                if (clickX > thisCell.x && clickX < (thisCell.x + thisCell.size)
                    && clickY > thisCell.y && clickY < (thisCell.y + thisCell.size)) {
                        wasClicked(thisCell, this.clickType);
                    }
            });
        });
    }

    this.checkWin = function () {
        for (var i = 0; i < cellArray.length; ++i) {
            for (var j = 0; j < cellArray[0].length; ++j) {
                if (cellArray[i][j].filled == true  && level[i][j] == 0 ||
                    cellArray[i][j].filled == false && level[i][j] == 1) {
                    return false;
                }
            }
        }
        return true;
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
        return JSON.stringify(exportedLevel).replace(/\],\[/g, '],\n [');
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
    for (let i = 0; i < level.length; ++i) {
        var zero = true;
        var counter = 0;
        bottomSideNumbers.push([]);
        for (let j = 0; j < level.length; ++j) {
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

    // Create cell array
    cellArray = new Array(size);
    for (let i = 0; i < cellArray.length; ++i) {
        cellArray[i] = new Array(size);
    }
    for (let i = 0; i < cellArray.length; ++i) {
        for (let j = 0; j < cellArray.length; ++j) {
            let cellX = this.x + (i*cellSize);
            let cellY = this.y + (j*cellSize);
            let isFilled = false;
            // var isFilled;
            // if (level[i][j] == 1) {
            //     isFilled = true;
            // }
            // else {
            //     isFilled = false;
            // }
            cellArray[j][i] = new Cell(cellX, cellY, this.cellSize, isFilled, false);
        }
    }

    function wasClicked(cell, ct) {
        if (ct == clickTypes.FILL) {
            if (cell.filled == false) {
                cell.filled = true;
                cell.marked = false;
            }
            else if (cell.filled == true) {
                cell.filled = false;
            }
        }
        else if (ct == clickTypes.MARK) {
            if (cell.marked == false && cell.filled == false) {
                cell.marked = true;
            }
            else if (cell.marked == true) {
                cell.marked = false;
            }
        }
    }
}
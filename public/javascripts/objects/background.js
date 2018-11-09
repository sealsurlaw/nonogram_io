// const colors = ["#FF0000",
//                 "#00FF00",
//                 "#0000FF",
//                 "#AAAA00",
//                 "#888888",
//                 "#000000"];

// const colors = ["#005500",
//                 "#227722",
//                 "#449944",
//                 "#66BB66",
//                 "#449944",
//                 "#227722"];

const colors = ["#005500",
                "#116611",
                "#227722",
                "#338833",
                "#227722",
                "#116611"];

function Background(numStripes) {
    this.numStripes = numStripes;
    this.counter = 0;

    this.drawBackground = function () {
        ctx.lineWidth = 3;

        if (this.numStripes%2 == 1) {
            this.numStripes++;
        }

        let stripesVert = c.height/(this.numStripes/2)
        let stripesHoriz = c.width/(this.numStripes/2)

        // Down
        var lastI = 0;
        var lp = {x: c.width,
                  y: c.height};
        for (var i = 0; i < this.numStripes/2; ++i) {
            ctx.fillStyle = colors[i%colors.length];
            ctx.beginPath();
            ctx.moveTo(0,lp.y);
            ctx.lineTo(c.width-lp.x,c.height);
            ctx.lineTo(c.width-lp.x + stripesHoriz,c.height);
            ctx.lineTo(0,lp.y - stripesVert);
            lp.x -= stripesHoriz;
            lp.y -= stripesVert;
            ctx.closePath();
            ctx.fill();
            lastI = i+1;
        }

        // Right
        lp = {x: c.width,
              y: c.height};
        for (var i = 0; i < this.numStripes/2; ++i) {
            ctx.fillStyle = colors[(colors.length-i+lastI)%colors.length];
            ctx.beginPath();
            ctx.moveTo(lp.x,0);
            ctx.lineTo(c.width,c.height-lp.y);
            ctx.lineTo(c.width,c.height-lp.y+stripesVert);
            ctx.lineTo(lp.x - stripesHoriz, 0);
            lp.x -= stripesHoriz;
            lp.y -= stripesVert;
            ctx.closePath();
            ctx.fill();
        }

        ++this.counter;
        if (this.counter%25 == 0)
            colors.push(colors.shift());
    }
}
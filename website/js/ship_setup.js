function setupShipPlanning() {
    var grid = new Array(4);
    for (var i = 0; i < 4; i++) {
        grid[i] = new Array(5);
    }

    var SVG = d3.select("#ship_planner");
        /*.append("svg:svg")
        .attr("id", "ship_planner")
        .attr("width", "100%")
        .attr("height", 620);*/

    SVG.append("svg:g")
        .attr("id", "ship")
        .attr("transform", "translate(270, 182.5)");

    var ship = d3.select("#ship");

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 5; j++) {
            createGrid(i, j);
            grid[i][j] = false;
        }
    }

    function createGrid(x, y) {
        ship.append("svg:rect")
            .attr("x", (75 * x))
            .attr("y", (75 * y))
            .attr("width", 75)
            .attr("height", 75)
            .attr("fill", "#006D75")
            .attr("stroke", "#00858f");
    }

    SVG.append("svg:rect")
    .attr("id", "blueSquare")
    .attr("x", 100)
    .attr("y", 100)
    .attr("width", 75)
    .attr("height", 75)
    //.attr("fill", "blue")
    .style("cursor", "pointer")
    .call(d3.behavior.drag()
          .on("drag", move)
          .on("dragend", soltar));


    var dragTarget;
    function move(){
        this.parentNode.appendChild(this);
        dragTarget = d3.select(this);
        dragTarget
            .attr("x", function(){return d3.event.dx + parseInt(dragTarget.attr("x"))})
            .attr("y", function(){return d3.event.dy + parseInt(dragTarget.attr("y"))});
    }

    var pos;
    function soltar() {
        this.parentNode.appendChild(this);
        dragTarget = d3.select(this);
        
        pos = d3.mouse(this);
        pos[0] = parseInt((pos[0] - 270) / 75);
        pos[1] = parseInt((pos[1] - 182.5) / 75);

        if ((pos[0] < 4) && (pos[1] < 5) && (pos[0] >= 0) && (pos[1] >= 0)) {
            grid[pos[0]][pos[1]] = true;
            
          dragTarget
            .attr("x", (pos[0] * 75) + 270)
            .attr("y", (pos[1] * 75) + 182.5);
        }
    }
}

$(document).ready( function() {
    setupShipPlanning();
});
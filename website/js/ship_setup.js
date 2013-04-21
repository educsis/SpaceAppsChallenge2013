function setupShipPlanning() {
    var grid = new Array(4);
    for (var i = 0; i < 4; i++) {
        grid[i] = new Array(5);
    }

    var SVG = d3.select("#visual")
        .append("svg:svg")
        .attr("id", "ship_planner")
        .attr("width", "100%")
        .attr("height", 620);

    SVG.append("svg:g")
        .attr("id", "ship");
}

$(document).ready( function() {
    setupShipPlanning();
});
/*
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
        .attr("fill", "#eee")
        .attr("stroke", "#999");
}

SVG.append("svg:rect")
    .attr("id", "blueSquare")
    .attr("x", 350)
    .attr("y", 150)
    .attr("width", 75)
    .attr("height", 75)
    .attr("fill", "blue")
    .style("cursor", "pointer")
    .call(d3.behavior.drag()
          .on("drag", move)
          .on("dragend", soltar));

function move(){
    this.parentNode.appendChild(this);
    var dragTarget = d3.select(this);
    dragTarget
        .attr("x", function(){return d3.event.dx + parseInt(dragTarget.attr("x"))})
        .attr("y", function(){return d3.event.dy + parseInt(dragTarget.attr("y"))});
}

function soltar() {
    this.parentNode.appendChild(this);
    var dragTarget = d3.select(this);
    
    var posX = parseInt(event.pageX / 75);
    var posY = parseInt(event.pageY / 75);
   
    
    if ((posX < 4) && (posY < 5)) {
        grid[posX][posY] = true;
        
      dragTarget
        .attr("x", (posX * 75))
        .attr("y", (posY * 75));
        
        console.log(grid[0][0]);
    }
    
}*/
var margin = { top: 10, right: 30, bottom: 50, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

// append svg object to the body of the page to house Scatterplot 1
var svg1 = d3
  .select("#dataviz_brushScatter")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//TODO: append svg object to the body of the page to house Scatterplot 2
var svg2 = d3
  .select("#dataviz_brushScatter2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var svg3 = d3
  .select("#dataviz_brushScatter3")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var svg4 = d3
  .select("#dataviz_brushScatter4")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


//TODO: append svg object to the body of the page to house Bar chart 

// Define color scale
var color = d3
  .scaleOrdinal()
  .domain(["setosa", "versicolor", "virginica"])
  .range(["#FF7F50", "#21908dff", "#fde725ff"]);

// Read data and make plots 
d3.csv("data/iris.csv").then((data) => {
  
  //Scatterplot 1
  {
    var xKey1 = "Sepal_Length";
    var yKey1 = "Petal_Length";

    //Add X axis
    var x1 = d3
      .scaleLinear()
      .domain(d3.extent(data.map((val) => val[xKey1])))
      .range([0, width]);
    svg1
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x1))
      .call((g) =>
        g
          .append("text")
          .attr("x", width)
          .attr("y", margin.bottom - 4)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text(xKey1)
      );

    //Add Y axis
    var y1 = d3
      .scaleLinear()
      .domain(d3.extent(data.map((val) => val[yKey1])))
      .range([height, 0]);
    svg1
      .append("g")
      .call(d3.axisLeft(y1))
      .call((g) =>
        g
          .append("text")
          .attr("x", -margin.left)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text(yKey1)
      );

    // Add dots
    var myCircle1 = svg1
      .append("g")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("id", (d) => d.id)
      .attr("cx", function (d) {
        return x1(d[xKey1]);
      })
      .attr("cy", function (d) {
        return y1(d[yKey1]);
      })
      .attr("r", 8)
      .style("fill", function (d) {
        return color(d.Species);
      })
      .style("opacity", 0.5);

    var brush1 = d3
      .brush()
      .extent([
        [0, 0],
        [width, height],
      ])
      .on("start", clear)
      .on("brush", updateChart1);


    svg1.call(brush1);
    
  }

  //TODO: Scatterplot 2 (show Sepal width on x-axis and Petal width on y-axis)
  {
    var xKey2 = "Sepal_Width";
    var yKey2 = "Petal_Width";

    //Add X axis
    var x2 = d3
      .scaleLinear()
      .domain(d3.extent(data.map((val) => val[xKey2])))
      .range([0, width]);
    svg2
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x2))
      .call((g) =>
        g
          .append("text")
          .attr("x", width)
          .attr("y", margin.bottom - 4)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text(xKey2)
      );

    //Add Y axis
    var y2 = d3
      .scaleLinear()
      .domain(d3.extent(data.map((val) => val[yKey2])))
      .range([height, 0]);
    svg2
      .append("g")
      .call(d3.axisLeft(y2))
      .call((g) =>
        g
          .append("text")
          .attr("x", -margin.left)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text(yKey2)
      );

    // Add dots
    var myCircle2 = svg2
      .append("g")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("id", (d) => d.id)
      .attr("cx", function (d) {
        return x2(d[xKey2]);
      })
      .attr("cy", function (d) {
        return y2(d[yKey2]);
      })
      .attr("r", 8)
      .style("fill", function (d) {
        return color(d.Species);
      })
      .style("opacity", 0.5);

    var brush2 = d3
      .brush()
      .extent([
        [0, 0],
        [width, height],
      ])
      .on("start", clear)
      .on("brush", updateChart2);

    svg2.call(brush2);
    
  }

  // Scatterplot 3

  {
    var xKey4 = "Sepal_Length";
    var yKey4 = "Sepal_Width";

    //Add X axis
    var x4 = d3
      .scaleLinear()
      .domain(d3.extent(data.map((val) => val[xKey4])))
      .range([0, width]);
    svg4
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x4))
      .call((g) =>
        g
          .append("text")
          .attr("x", width)
          .attr("y", margin.bottom - 4)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text(xKey4)
      );

    //Add Y axis
    var y4 = d3
      .scaleLinear()
      .domain(d3.extent(data.map((val) => val[yKey4])))
      .range([height, 0]);
    svg4
      .append("g")
      .call(d3.axisLeft(y4))
      .call((g) =>
        g
          .append("text")
          .attr("x", -margin.left)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text(yKey4)
      );

    // Add dots
    var myCircle4 = svg4
      .append("g")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("id", (d) => d.id)
      .attr("cx", function (d) {
        return x4(d[xKey4]);
      })
      .attr("cy", function (d) {
        return y4(d[yKey4]);
      })
      .attr("r", 8)
      .style("fill", function (d) {
        return color(d.Species);
      })
      .style("opacity", 0.5);

    var brush3 = d3
      .brush()
      .extent([
        [0, 0],
        [width, height],
      ])
      .on("start", clear)
      .on("brush", updateChart3);

    svg4.call(brush3);
    
  }

  //TODO: Barchart with counts of different species

{
  var speciesnames = [
  {
    species: "setosa",
    value: "50",
  },
  {

    species: "versicolor",
    value: "50",
  },
  {
    species: "virginica",
    value: "50",
  }
  ];
  // X axis
  var x3 = d3.scaleBand()
    .range([ 0, width ])
    .domain(['virginica','versicolor', 'setosa'])
    .padding(0.2);
  svg3.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x3))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  var y3 = d3.scaleLinear()
    .domain([0, 50])
    .range([ height, 0]);
  svg3.append("g")
    .call(d3.axisLeft(y3));

    // Bars
  var bars = svg3
    .selectAll("mybar")
    .data(speciesnames)
    .enter()
    .append("rect")
      .attr("y", function (d){ return y3(d.value);})
      .attr("x", function (d){ return x3(d.species);})
      .attr("width", x3.bandwidth())
      .attr("height", function(d) { return height - y3(d.value); })
      .style("fill", function (d) {
        return color(d.species);
      })
  }

  //Brushing Code---------------------------------------------------------------------------------------------
    
  //Removes existing brushes from svg
    function clear() {
      svg1.call(brush1.move, null);
      svg2.call(brush2.move, null);
      svg4.call(brush3.move, null);
    }

    //Is called when we brush on scatterplot #1
    function updateChart1(brushEvent) {
        let extent = brushEvent.selection;
        myCircle1.classed("selected", (d) => { 
        return isBrushed(extent, x1(d[xKey1]), y1(d[yKey1])); 
        })
        myCircle2.classed("selected", (d) => {
          return isBrushed(extent, x1(d[xKey1]), y1(d[yKey1]))
        })
        myCircle4.classed("selected", (d) => {
          return isBrushed(extent, x1(d[xKey1]), y1(d[yKey1]))
        })
    }

    //Is called when we brush on scatterplot #2
    function updateChart2(brushEvent) {
      let extent = brushEvent.selection;
      var selectedSpecies = new Set();
      myCircle2.classed("selected", (d) => {
        let brushed = isBrushed(extent, x2(d[xKey2]), y2(d[yKey2]));
        if (brushed) {
          selectedSpecies.add(d.Species);
        }
        return brushed;
      });

      myCircle1.classed("selected", (d) => {
        return isBrushed(extent, x2(d[xKey2]), y2(d[yKey2]));
      });

      myCircle4.classed("selected", (d) => {
        return isBrushed(extent, x2(d[xKey2]), y2(d[yKey2]));
      });

      bars.classed("selected", function (d) {
        return selectedSpecies.has(d["species"]);
      });
    }

    function updateChart3(brushEvent) {
      let extent = brushEvent.selection;
      var selectedSpec = new Set();
      myCircle4.classed("selected", (d) => {
        let brushed = isBrushed(extent, x4(d[xKey4]), y4(d[yKey4]));
        if (brushed) {
          selectedSpec.add(d.Species);
        }
        return brushed;
      });

      myCircle1.classed("selected", (d) => {
        return isBrushed(extent, x4(d[xKey4]), y4(d[yKey4]));
      });

      myCircle2.classed("selected", (d) => {
        return isBrushed(extent, x4(d[xKey4]), y4(d[yKey4]));
      });

      bars.classed("selected", function (d) {
        return selectedSpec.has(d["species"]);
      });
    }

    //Finds dots within the brushed region
    function isBrushed(brush_coords, cx, cy) {
      if (brush_coords === null) return;

      var x0 = brush_coords[0][0],
        x1 = brush_coords[1][0],
        y0 = brush_coords[0][1],
        y1 = brush_coords[1][1];
      return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1; // This return TRUE or FALSE depending on if the points is in the selected area
    }
});

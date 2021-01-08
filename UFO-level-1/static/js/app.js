// from data.js
var tableData = data;

// Creating variables for required d3 selectors
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#input-form");


console.log(tableData);


tableData.forEach(ufoReport => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([_, value]) => {
        row.append("td").text(value);
    });
});

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach(ufoReport => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([_, value]) => {
            row.append("td").text(value);
        });
    });
  
    // // First, create an array with just the age values
    // var ages = filteredData.map(person => person.age);
  
    // // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    // var mean = math.mean(ages);
    // var median = math.median(ages);
    // var mode = math.mode(ages);
    // var variance = math.var(ages);
    // var standardDeviation = math.std(ages);
  
    // // Then, select the unordered list element by class name
    // var list = d3.select(".summary");
  
    // // remove any children from the list to
    // list.html("");
  
    // // append stats to the list
    // list.append("li").text(`Mean: ${mean}`);
    // list.append("li").text(`Median: ${median}`);
    // list.append("li").text(`Mode: ${mode}`);
    // list.append("li").text(`Variance: ${variance}`);
    // list.append("li").text(`Standard Deviation: ${standardDeviation}`);
  };
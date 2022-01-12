function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("../../Resources/CEIR_energy_copy.json").then((data) => {
        console.log(data);
        var sampleState = data.id;
  
      sampleState.forEach((state) => {
        selector
          .append("option")
          .text(state)
          .property("value", state);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstState = sampleState[0];
      buildCharts(firstState);
      buildEnergyData(firstState);
    });
  }

  init();

  function optionChanged(newState) {
      buildEnergyData(newState);
      buildCharts(newState);
  }

function buildEnergyData(state) {
    d3.json("../../Resources/CEIR_energy_copy.json").then((data) => {
        var energyData = data.metadata;
        console.log(energyData);
        var resultArray = energyData.filter(sampleObj => sampleObj.State == state);
        var result = resultArray[0];

        var PANEL = d3.select("#sample-energyData");

        PANEL.html("");

        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
 }
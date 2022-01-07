// function init() {
//     // Grab a reference to the dropdown select element
//     var selector = d3.select("#selDataset");
  
//     // Use the list of sample names to populate the select options
//     d3.json("../../CEIR_energy.json").then((data) => {
//       var State = data.id;
  
//       sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
  
//       // Use the first sample from the list to build the initial plots
//       var firstSample = sampleNames[0];
//       buildCharts(firstSample);
//       buildMetadata(firstSample);
//     });
//   }

d3.json("../../Resources/CEIR_energy.json").then((data) => {
    console.log(data);
    var state = data[0];
    console.log(state);
});
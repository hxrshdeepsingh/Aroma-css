module.exports = {
  content: ["../../**/*.html"], // Specify the path to the HTML file located outside the "aroma" folder
  css: ["styles.css"],
  output: "../../output.css", // Specify the path to the CSS file located within the "aroma" folder // Specify the output directory relative to the location of the HTML file
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] // Specify the output directory relative to the location of the HTML file
};

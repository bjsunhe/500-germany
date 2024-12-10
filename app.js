// Function to normalize headers to camelCase (optional)  
function toCamelCase(str) {  
    return str  
        .toLowerCase()  
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());  
}  
  
// Select the header row  
var headerRow = document.querySelector('tr.datawrapper-d4D8Y-1wbuely');  
  
// Check if header row exists  
if (!headerRow) {  
    console.error('Header row not found');  
} else {  
    // Get all the header cells within the row, excluding the sentinel cell  
    var headers = headerRow.querySelectorAll('th');  
  
    // Initialize an array to hold the headers  
    var columnHeaders = [];  
  
    // Extract and clean the headers  
    headers.forEach(function(header) {  
        var headerText = header.textContent.trim().replace(/\s+/g, ' ');  
        headerText = headerText.replace(/\^.*?\^/g, '').replace(/<[^>]*>/g, '').trim();  
        // Normalize the header text (optional)  
        headerText = toCamelCase(headerText);  
        columnHeaders.push(headerText);  
    });  
  
    
}  
    var allData = [];  

    // Now, select all the data rows in the table  
    // Exclude rows that do not contain data, if necessary  
    var dataRows = document.querySelectorAll('tr.datawrapper-d4D8Y-1c5djey');  
  
    // Initialize an array to hold all rows' data  

  
    // Iterate over each data row  
    dataRows.forEach(function(dataRow) {  
        // Get all the data cells within the row, excluding the sentinel cell  
        var dataCells = dataRow.querySelectorAll('th, td:not(.sentinel)');  
  
        // Initialize an object to hold the data for the current row  
        var rowData = {};  
  
        // Iterate over the cells and map them to the headers  
        dataCells.forEach(function(cell, index) {  
            var cellText = cell.textContent.trim().replace(/\s+/g, ' ');  
            var headerText = columnHeaders[index];  
            rowData[headerText] = cellText;  
        });  
  
        // Add the row data to the array  
        allData.push(rowData);  
    });  
  
    // Output the array of data  
    console.log(allData.length)
    console.log(JSON.stringify(allData, null, 2));  

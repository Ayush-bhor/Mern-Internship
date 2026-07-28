const fs= require('fs');
function fileoperation() {
    console.log("File operation started");
    fs.writeFile("file1.txt", "Data write from the file operation ", () => {
        console.log("File written successfully");
    });
    console.log("File operation ended");
}
module.exports = fileoperation;
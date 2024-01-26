const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'newsData.json');
let newsData = [];

if (fs.existsSync(dataFilePath)) {
    try {
        const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
        newsData = JSON.parse(fileContent);
    } catch (error) {
        console.error('Error loading data from file:', error.message);
    }
}

const saveDataToFile = () => {
    try {
        const dataToSave = JSON.stringify(newsData, null, 2);
        fs.writeFileSync(dataFilePath, dataToSave, 'utf-8');
        console.log('Data saved to file:', dataFilePath);
    } catch (error) {
        console.error('Error saving data to file:', error.message);
    }
};

module.exports = {
    getDataArray: () => newsData,
    pushToDataArray: (newData) => {
        newsData.push(newData);
        saveDataToFile();
    },
};

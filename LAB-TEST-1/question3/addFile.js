const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logDir = path.join(__dirname, 'Logs');

// Function to create log files
const createLogs = () => {
    // Create the Logs directory if it doesn't exist
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
        console.log('Logs directory created');
    }

    // Change the current process directory to the Logs directory
    process.chdir(logDir);

    // Create 10 log files
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        console.log(`Created file: ${fileName}`);
    }

    // Change back to the parent directory (optional)
    process.chdir('..');
};

// Execute the function
createLogs();

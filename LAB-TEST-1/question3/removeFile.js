const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logDir = path.join(__dirname, 'Logs');

// Function to remove log files and directory
const removeLogs = () => {
    // Check if the Logs directory exists
    if (fs.existsSync(logDir)) {
        // Read the directory and get all files
        const files = fs.readdirSync(logDir);

        // Output the file names and delete them
        files.forEach((file) => {
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(path.join(logDir, file));  // Delete each file
        });

        // Remove the Logs directory
        fs.rmdirSync(logDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
};

// Execute the function
removeLogs();

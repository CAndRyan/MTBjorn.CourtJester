import fs from 'fs';

export const writeToFile = (filePath, text) => new Promise((resolve, reject) => {
    fs.writeFile(filePath, text, (error) => {
        if (error) reject(error);
        else resolve();
    });
});

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Manu-MD&TBc1BDTL#0hBTbcu3f90y4UVynEug3yASasjfIya5_GOZWMo5Fjs', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '3000',
MONGODB: process.env.MONGODB || 'mongodb+srv://yesiy77559:edT6bMboc8n0jXDQ@manucustomize.n0rxcdd.mongodb.net/'
};

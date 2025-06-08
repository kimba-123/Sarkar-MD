// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JaWEg1eGoyUmNvbmUzT2xoKzM1d2ZTQjZEaFpiNlJudG1HaHhlMHZYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTZ6aWVaZnYrVjVFaXRGMEFxYTFPZjFGdVc2K1VJZHZBemJuWmZsS2prUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UDNRZGVIT3NQa0VKRlVYUlNwNi9NQXdHbVZvWmFya21yWG5ZS3d0cVZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMK2lVY1NpdVVWbDVGQjhFTlVjcFpBb3lwdVJad3JjbmxtdTNJV2FmOVMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFeW5WWi9tVnJSSlAwQ3RkQ3JEbHJyUklRZE11NUN5SHFsTzRvWDAvbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGM0o4KzVwU3pFaE5pQVRlMTlhdk51SW0vZ1h1VTJZcUd6cmpVWFI1d3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01zdlArRTlDUEkxTVhCdXpWRnpBaXc5ZUh2dWFIM08vOVh2YTRKVThsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkZJdTc2NHJZNHNQUU9xT1RVekliZmdIelJFQkJ5UkV0a25GaU5OS2N4ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE2UmpiWjkrcGNUUDcrVTg2RkNhWWdScTM3WTRqSFBHWWd1QmxVOGp4SjVkakpyMFhNNnhLY25HMWpid2V2dEVGa1JiODBDNWw3bG00Wi8xbVExUmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJLdDE2MFNBRExQSkJTbUJNbUNWcUNCaGUyVVRqTDhXNjVzYU1rS21jQXgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiOTQ3NzUxMjAxMDg6NzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiyarqnLHhtJzKgOG0nCDqnLHhtIDJtOG0heG0gMqA4bSc4bSh4bSAybQiLCJsaWQiOiI2NTEyMDU5NjE4OTM2OTo3OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AzcmxzY0VFTENibGNJR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZEcDlhNWw2WEs4ZlpmOXVIWG1FdCtVU1pSOUVxOGhpVzNSNW91Uk9jV289IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBySHVCM1pkSGF2aUtZZlpBa3JaT3QyZTBKWXVBc3BULytqcWZQZTZ6eUhiZU96TmhMSUVlTmxOcXg0MnFCdXBSSmx2TWZJblFIamgrcnpMZFVKOUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDODJQMXlSa0tROG55dnl5bXI2WTFoYnlMKzJ6OE9KWVdkRFNyUnBld3RiTWFlMnhCYkljVTBqSG00TUhVc3Zud0lDcGpxRW1yU2ZpaHZJN2lwcStodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1MTIwMTA4Ojc5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJRNmZXdVplbHl2SDJYL2JoMTVoTGZsRW1VZlJLdklZbHQwZWFMa1RuRnEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTM3MjMzOCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDMEYifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "©Bandaheali",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923253617422",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;

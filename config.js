//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENGYm1xeXRBc21DYU1IVFNzZkxVOG9hbjFndWxrVzdVa0t3U1BQZm4zOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzlEeVQ2aEdDaVFEZFd6a2RFYWZwbXRNM2M2WmZvYVFPWWNFcXBRTlpFRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUElwZnRTY3NxdXlGd01rWHA4SzdwTjIrd2EzeHVseTF6OUFJUjVuTDJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTEN2NVhTek5ZcjE3MUNuaVBCU3RhNzdiUENacjdiZ3B4TFA2eDVScFM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQQmhGSnRhVVVNSi96THR3bjBTSm9IcytNOEYxbnVCTEUyci95aXZpbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMzWHNVZFpTaTNHeDZpZTYzRWllRG84ZnNFbVpCTC9UMnFYUVlwWHoyVGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZaalJ4R3loak1obk85UmpldzIrRVZnOG9QNG9lZmY5R0VKS2VxcitVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm5oajJ3bmkzR3hOQ29ML2tRUW9Ldkl2TisvN243cEl4aUZqVUhJT0ZFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktvOGhmSTVMdmRPOVZTRFk2VCtIWWJhYVpBcE1rbUVOeFRhdVdtclpTM3l6K1U3M0NycUdxU2VRQ0xtdUZGWlBFOFFHWVk2K0JUVE4yV1h4YnZqaERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6ImVYYzU1OEFsQi9SMW8xWmoxVWl1T3FtZUEyTEVtYVkyUy9MUGczRTk3dkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTc2NTYxODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkY2M0MzQUNCQjIwOEM2NUQzQTFBMjBBOTc2REIyMTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDM2ODQyNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSGZHZXgyZlJTS3lpMjhhSnBQc1BEdyIsInBob25lSWQiOiI5ZTQxMzljYy1mNjMyLTRhZjktYjkyZC0yNGQ0MzBkMzdjNGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDJZdzJ5Y0ZrMUo2eEJiMmdtbzBHZkdpM1JJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9CMTlVVStBWjZVWFpndFFEcWRMTHJCdlhMQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNN05NVlRFQiIsIm1lIjp7ImlkIjoiOTQ3NTc2NTYxODE6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLipIRfX19fX19fX/CdmbLwnZqI8J2ZsfCdmbTwnZqBIPCdmbzwnZqBIPCdmbPwnZqB8J2ZsPCdmbLwnZm6IPCdmb/wnZqB8J2ZvvCdmbbwnZqB8J2ZsPCdmbzwnZmw8J2agV9fX19fX19fX1/ipIQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wyWG1mRUNFSnI2cXJRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZXbWJoTTBwS3RjdFJLbGVOMzRmUm1ENDNidFVOMXo3cFkzMkNicDZCVmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVrY2MvY2NSOUVISDFDUGIrd1g1REFjVDFiNjRxVEdMT2xRblkwRmxkMDlyOHU4dlNGY0srTi96bk1lV0wreUdYV1FWcyswMXMycXM1T3VOQzVVc0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiVDZsRGxUVWJ6akN5RU16aHRSaTVDOGlTRlZ2UkhES0FGS3ovRFp3WGdqeDU4YUNEV1kzYy9JdUU1cEFzbWdTbnRtS3E2a3RwK1BaUVFlUDltemhDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU3NjU2MTgxOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjFwbTRUTktTclhMVVNwWGpkK0gwWmcrTjI3VkRkYys2V045Z202ZWdWWSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDM2ODQyMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKQWsifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

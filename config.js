//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kevinowoeye17@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Kevinowoeye17/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/F4VEfG5kf0nCAMB4qDA65S";
global.website = process.env.GURL || "https://chat.whatsapp.com/F4VEfG5kf0nCAMB4qDA65S";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349125096374";
global.sudo = process.env.SUDO || "2349066008519";
global.owner = process.env.OWNER_NUMBER || "2349125096374";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhKOTFTd3ljSWJkNkdmekZ4bTc3dDZPV2RtMTFkUndOekZDZ1VvZ1prdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXU3OHpZN1BEL25VS2RnK0s1Z1p3VUcrcnpPSWc2aWd5V2RnNTRmWFpDST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT0pOOENyRE1iYmFnTmVXN3ZhSHhaK3gyTithbEFDb01yNWs3VFo5SVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvV2lzQ3ZKYy96NEpUSFRWL0c4NWJ1ZVFjb1VtTzUxZHBPMll3Ulk3b1U0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLaHM5QTMwS2R2VGVnWlFxUmM0Q3AyNWo3WUpCUG01Ykc0WlpUK1RNVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRnb0RBSVFQM0NDWHVaa01CQ3hOVTZjbEQ0NnNnb1VFUk1pdHZzMExUUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElmeDFnbTdxQ2xzWEhITFhLQlJPRDU3eUJ0TGtMclZheHViUmZjaExYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZGcFp5UmZjK21DNG55WFpCenlqcXJCaTBIM1pDRVMxVzhxTDdseEIxUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUyRVcvNFF1d2tCcEJwa21vNy9oNzRsb0lrNDA0c2NvWlFMWUZKZmpkbExDR1ZQNmY2VXhFMnlzNVVhK0x6YmtRQjVtVmsyU2VEVTIrR2FkazhScWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6InFsN0xhMk92SW9ZU1h2TFduUmQ0UFdQR1VGdTI5NnVaZTdoWFQrZmt3bUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkViTmFwRjNlUjgtYlpLY2NxV3FuZnciLCJwaG9uZUlkIjoiZmZmMTA4ZjUtODQyYy00ZWE3LTk1YmYtMzgxZDhkMGVkZDM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF6dlNISHJQNlFINi9ZK1lOd1pvdTA0bWR6cz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFZkdm1TWFh1cUpLeTQ4aUMwOFdwUGptWlBJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1NsNXRVSEVPR2t0N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRktvOWtaaGV6YlpJb25nTjBvUFFRSmhuVE16SW1jbTh0Zk9sSU04MFoxVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM0RYb1U2RDUyYWQvWUkxbWZYK011NmJzWUtsejUwK0srL2dmQmpJWktKUnlRMGNPZEh3Y1dGU2JSZyt2TXA5UHVoaGFjTjRhSGlocHMwOCswZGpPQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjhOVFg4WUFRbUpyQUlIbm1TRGdaQ0c3K1VydDlGUEhYNlNwQisraTZHNVJtKzUrVGZ5cFpLYUZKU3V6MnIrRDZVTVRaUkdNMFAyaFZPYUR5K015WGpnPT0ifSwibWUiOnsiaWQiOiIyMzQ5MDY2MDA4NTE5OjEwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzE4Mzg5NjE3MDkxMjQ6MTBAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNjYwMDg1MTk6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlNxUFpHWVhzMjJTS0o0RGRLRDBFQ1laMHpNeUpuSnZMWHpwU0RQTkdkViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMDU2MjM5LCJsYXN0UHJvcEhhc2giOiI0Q3E0RWsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVAzaCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 GREAT DEALS",
  author: process.env.PACK_AUTHER || "Great Deals",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "GREAT DEALS",
  ownername: process.env.OWNER_NAME || "Great Deals",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "kevinowoeye17",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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

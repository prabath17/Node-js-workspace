const os = require("os");

console.log("Operating System Info:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory (MB):", os.totalmem() / (1024 * 1024));
console.log("Free Memory (MB):", os.freemem() / (1024 * 1024));
console.log("Home Directory:", os.homedir());
console.log("Uptime (seconds):", os.uptime());
console.log("OS operations completed.");
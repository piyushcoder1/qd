// Create a node js program to display system information.
const os = require('os');

console.log('Operating system:', os.type());
console.log('Platform:', os.platform());
console.log('Release:', os.release());
console.log('Hostname:', os.hostname());
console.log('Total memory:', Math.round(os.totalmem() / (1024 * 1024)) + ' MB');
console.log('Free memory:', Math.round(os.freemem() / (1024 * 1024)) + ' MB');
console.log('CPU architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);
console.log('Home directory:', os.homedir());
console.log('Temporary directory:', os.tmpdir());

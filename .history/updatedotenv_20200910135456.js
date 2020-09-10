const fs = require('fs');
let envVar = 'HOST =octankdb.cluster-ck9o565lblc0.ap-southeast-1.rds.amazonaws.com\n' +
    'USER=octankdbadmin\n' +
    'USER=octankdbadmin\n' +
    'PASSWORD=devpass\n' +
    'DB=octankdb';

fs.writeFileSync('octank.env', envVar, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
});



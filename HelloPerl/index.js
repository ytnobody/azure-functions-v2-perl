const exec = require('child_process').execSync;
const fs = require('fs');
const tmp = require('tmp');

module.exports = async function (context, req) {
    const tmpobj = tmp.fileSync();
    const tmpfile = tmpobj.name;
    fs.writeFileSync(tmpfile, JSON.stringify(context.bindings));
 
    const result = exec(`perl ./HelloPerl/task.pl < ${tmpfile}`).toString();
    fs.unlink(tmpfile);
 
    context.res = JSON.parse(result);
};
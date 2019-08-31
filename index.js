const schedule = require('node-schedule')

const args = process.argv;

module.exports = {
    getLogs: async function() {
        const exec = require('child_process').exec
        return new Promise(async (resolve, reject) => {
            // Get response of promises
            let cmd;
            if(args.length > 2) {
                cmd = `firebase functions:log ${args[args.length - 2]} ${args[args.length -1]}`
            } else {
                cmd = `firebase functions:log`
            }
            
            await exec(cmd, (err, stdout, stderr) => {
                if (err) {
                    console.warn("Something went wrong, " + err)
                    reject(err)
                }
                resolve(stdout ? stdout : stderr)
            })
        })
    },
    
    run: async() => {
        setInterval(async() => {
            await this.getLogs().then((logs) => {
                console.log(logs)
            })
        },10000)
    }
}

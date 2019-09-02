const fl = require('./generate-logs')

fl.run().then().catch(err => {
    console.log(err)
})
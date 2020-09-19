const {debounce} = require('./debounce_util')

process.stdin.resume()
console.log("start writing")
process.stdin.on('data', debounce((data) => {
    console.log(`current data ${data.toString()}`)
}, 10000))
/*
* author: flitrue
* date: 2019-04-25
*/

const fs = require('fs')
const path = require('path')
const { exec} = require('child_process')

const options = process.argv.slice(2);

console.log('')

if(options.length<3) {
  console.log('Warning: 请传入需要安装的模块名称')
  return false
}
 
const cmd = 'npm i -g ' + options.join(' ')
console.log("> " + cmd)
execCommand(cmd)


var arr = []

fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function(err, data){
  if (err) throw err
  data = JSON.parse(data)
  arr = data.modules

  for(let i=0;i<options.length;i++){
    if(!arr.includes(options[i])){
      data.modules.push(options[i])
    }
  }

  let json = JSON.stringify(data)
  writeFile(json)

})

function execCommand(cmd) {
  exec(cmd, function(err, stdout, stderr){
    if (err) throw err

    if (stderr) console.log('stderr: ' + stderr)

    console.log('stdout: ' + stdout)
  })
}

function writeFile(data){
  fs.writeFile('data.json', data, 'utf8', function(err){
    if (err) throw err
    console.log("> Writing to data.json File...")
  })
}
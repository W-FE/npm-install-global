/*
* author: flitrue
* date: 2019-04-25
*/

const fs = require('fs')
const path = require('path')
const { exec} = require('child_process')

const options = process.argv;

console.log('')

if(!options[2]) {
  console.log('Warning: 请传入需要安装的模块名称')
  return false
}

const cmd = 'npm i -g ' + options[2]
execCommand(cmd)


var arr = []

fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function(err, data){
  if (err) throw err
  data = JSON.parse(data)
  arr = data.modules

  for(let i=0;i<arr.length;i++){
    if(arr[i] != options[2]){
      data.modules.push(options[2])
      let json = JSON.stringify(data)
      writeFile(json)
      break;
    }
  }

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
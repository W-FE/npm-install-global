/*
* author: flitrue
* date: 2019-04-25
*/

const fs = require('fs')
const path = require('path')
const { exec} = require('child_process')

fs.readFile(path.join(__dirname, 'data.json'), 'utf8', function(err, data){
  if (err) throw err
  data = JSON.parse(data)

  let leg = data.modules && data.modules.length
  let cmd = 'npm i -g '
  for(let i=0;i<leg;i++){
    cmd += data.modules[i] + ' '
  }
  cmd = cmd.trim(' ')

  console.log('')
  console.log('> '+cmd)
  exec(cmd, function(err, stdout, stderr){
    if (err) throw err

    if (stderr) console.log('stderr: ' + stderr)

    console.log('stdout: ' + stdout)

  })
})
import webpack from 'webpack'
import webPackConfig from '../webpack.config'
import { execFile } from 'child_process'

const compiler = webpack(webPackConfig)

const completeCompile = () => {
  console.log('run code...')
  execFile("node", ["bundle.js"], {
    cwd: './build/'
  }, (error, stdout, stderr) => {
    if(error){
      console.log("error:", error.message)
    }

    stdout && console.log("stdout:", stdout)
    stderr && console.log("stderr:", stderr)
  })
}

compiler.run((error, stats) => {
  error && console.log(error)
  console.log('webpack compile finised')
})

const watching = compiler.watch({
  aggregateTimeout: 400,
  poll: true
}, (error, stat) => {
  console.log('webpack watching...')
  completeCompile()
})


console.log('webpack compile start...')
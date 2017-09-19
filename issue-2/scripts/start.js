import webpack from 'webpack'
import webPackConfig from '../webpack.config'
import { execFile } from 'child_process'

webpack(webPackConfig, (error, stat) => {
  console.log('webpack compile finished...')
})

console.log('webpack compile start...')
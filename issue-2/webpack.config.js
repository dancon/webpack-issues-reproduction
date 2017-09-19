import path from 'path'

const common = {
  entry: ['./src/webpack-dependence.js', './src/webpack-entry-1.js'],
  output: {

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src')
        ]
      }
    ]
  }
}

const web = {
  ...common,
  target: 'web',
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(__dirname, './build')
  }
}

const node = {
  ...common,
  target: 'node',
  output: {
    filename: 'bundle.node.js',
    path: path.resolve(__dirname, './build')
  }
}

export default [web, node]
Object.prototype.greeting = name => {
  console.log(`Hello, ${name || 'Webpack!'}`)
}
import chalk from "chalk"
const { blue, green, red, yellow } = chalk
const colors = {
  info: blue,
  success: green,
  error: red,
  warn: yellow,
  default: blue
}

export function log(type, ...args) {
  const color = colors[type] || colors.default
  console.log(color(`[${type}]`), ...args)
}

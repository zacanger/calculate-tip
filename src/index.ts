if (!process.argv[2]) {
  console.log(`
    Usage:
    calculate-tip price percentage
    percentage defaults to 20
    Examples:
    calculate-tip 39.99
    calculate-tip 39.99 17
`)
  process.exit(0)
}

const cost = Number(process.argv[2])
const perc = Number(process.argv[3] || 20)
const tip = cost * (perc / 100)

console.log(`
  Tip: ${tip.toFixed(2)}
  Total: ${(tip + cost).toFixed(2)}
`)

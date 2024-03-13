export const csvToJson = (file) => {
  const lines = file.trim().split('\n')

  const jsonLines = []

  lines.slice(1).forEach((line) => {
    const columns = line.split(',').filter(Boolean)

    if (columns.length < 4) return

    const parsedLine = {
      text: columns[1],
      number: parseInt(columns[2]),
      hex: columns[3]
    }

    jsonLines.push(parsedLine)
  })

  return jsonLines
}

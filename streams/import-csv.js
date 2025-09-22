import { parse } from "csv-parse";
import fs from "node:fs"

const csvFilePath = new URL("./tasks.csv", import.meta.url)

const streamCSVFile = fs.createReadStream(csvFilePath)

const csvFileParse = parse({
  delimiter: ',',
  from_line: 2,
  skip_empty_lines: true
})

async function importCSVFile() {
  const parseLines = streamCSVFile.pipe(csvFileParse)

  for await (const line of parseLines) {
    const [title, description] = line

    await fetch('http://localhost:3333/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
      })
    })
  }
}

importCSVFile()
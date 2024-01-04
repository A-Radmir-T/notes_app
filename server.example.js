import http from "http";
import fs from "fs/promises";
import path from "path";
import {addNote} from "./nodes.controller";

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    const content  =  await fs.readFile(path.join(basePath, 'index.html'))
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.end(content)
  } else if (req.method === 'POST') {
    const body = []

    res.writeHead(200,   {
      'content-type': 'text/html; charset=utf-8'
    })

    req.on('data', (data) => {
      body.push(Buffer.from(data))

    })
    req.on('end', () => {
      const title = body.toString().split('=')[1].replaceAll('+', ' ')
      addNote(title)
    })

    res.end('Post success')
  }
})
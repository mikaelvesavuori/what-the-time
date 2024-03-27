/**
 * @see https://fastify.dev/docs/v4.15.x/Guides/Serverless/#google-cloud-run
 */

import { WhatTheTime } from './WhatTheTime.mjs'

import Fastify from 'fastify'
const fastify = Fastify({
  logger: true,
  trustProxy: true
})

async function start() {
  const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined
  const port = process.env.PORT || 8080
  const host = IS_GOOGLE_CLOUD_RUN ? "0.0.0.0" : undefined

  try {
    const address = await fastify.listen({ port, host })
    console.log(`Listening on ${address}`)

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

fastify.get("/", async (request, reply) => {
  const time = new WhatTheTime()
  const timeString = time.is()

  reply
    .header("Content-Type", "text/html")
    .send(html(timeString)
    )
})

const html = (timeString) => `
<html>
  <head>
    <title>What The Time</title>
    <style>
      html {
        font-family: system-ui, sans-serif;
        font-weight: 900;
      }

      p {
        font-size: 5rem;
        text-align: center;
        margin-top: 10%;
      }
    </style>
  </head>
  <body>
    <p>${timeString}</p>
  </body>
</html>`

start()
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer-core'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Buffer>
) {
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    headless: true,
    args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-sandbox",
    ]
  })
  const page = await browser.newPage()
  const baseUrl = process.env.WEB_BASE_URL || 'http://localhost:3000'
  await page.goto(`${baseUrl}/invoice`)
  const pdf = await page.pdf({
    format: 'a4',
    printBackground: true,
  })
  await browser.close();

  res.status(200)
    .setHeader('Content-Type', 'application/pdf')
    .setHeader('Content-Disposition', 'attachment; filename=invoice.pdf')
    .send(pdf)
}

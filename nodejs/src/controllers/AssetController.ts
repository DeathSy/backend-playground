import { Request, Response } from 'express'

export const all = (request: Request, response: Response) => {
  response.send({ assets: [] })
}

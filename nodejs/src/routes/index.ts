import { Router } from 'express'
import assets from './assets'

const router = Router()

router.get("/", (req, res) => {
  res.status(200).send({
    message: "pong"
  })
})

router.use("/assets", assets)

export default router

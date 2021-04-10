import { Router } from 'express'
import { all } from '../controllers/AssetController'

const router = Router()

router.get("/", all)

export default router

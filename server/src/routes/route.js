import { Router } from 'express'
import { getFiles, getAllFiles } from '../controllers/controller.js'

const router = Router()

router.get('/files/list', getAllFiles)
router.get('/files/data', getFiles)

export default router

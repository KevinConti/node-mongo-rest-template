import { Router } from 'express'

const router = Router()

router.route('/').get(helloWorld)

function helloWorld(req, res) {
  return res.status(200).json({ message: 'Hello World! ' })
}

export default router

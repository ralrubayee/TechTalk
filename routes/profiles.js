import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/:id', checkAuth, profilesCtrl.show )
router.post('/todos',checkAuth, profilesCtrl.create)
router.get('/', checkAuth, profilesCtrl.index)

export { router }


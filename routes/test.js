import { Router } from 'express';
import * as testCtrl from '../controllers/test.js'
const router = Router();

router.post('/', testCtrl.cutString);


export default router;
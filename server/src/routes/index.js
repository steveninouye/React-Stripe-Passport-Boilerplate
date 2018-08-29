import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import stripeDonationsRouter from './stripeDonations';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

// currently anyone can donate because it is above the middle ware
// if we wanted to only allow users that are logged in to make a payment
// we would need to move this line below the middle ware in this file
// router.route('*').post(tokenMiddleware, isLoggedIn).put(tokenMiddleware, isLoggedIn).delete(tokenMiddleware, isLoggedIn);
router.use('/donate', stripeDonationsRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/classes', classesRouter);
router.use('/people', peopleRouter);
router.use('/users', usersRouter);

export default router;
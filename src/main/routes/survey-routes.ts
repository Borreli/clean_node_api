/* eslint-disable @typescript-eslint/no-misused-promises */
import { adaptRoute } from '@/main/adapters'
import { makeAddSurveyController } from '@/main/factories/controllers'
import { Router } from 'express'
import { makeAuthMiddleware } from '@/main/factories/middlewares'
import { adaptMiddleware } from '@/main/adapters/express-middleware-adapter'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
}

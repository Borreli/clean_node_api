/* eslint-disable @typescript-eslint/no-misused-promises */
import { adaptRoute } from '@/main/adapters'
import { makeSaveSurveyResultController } from '@/main/factories/controllers'
import { Router } from 'express'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
}

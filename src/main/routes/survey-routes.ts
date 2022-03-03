/* eslint-disable @typescript-eslint/no-misused-promises */
import { adaptRoute } from '@/main/adapters'
import { makeAddSurveyController } from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/surveys', adaptRoute(makeAddSurveyController()))
}

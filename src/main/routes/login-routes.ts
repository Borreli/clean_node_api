import { adaptRoute } from '@/main/adapters'
import { makeSignupController } from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/signup', adaptRoute(makeSignupController()))
}

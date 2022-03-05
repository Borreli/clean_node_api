import { SignupController } from '@/presentation/controllers/login'
import { Controller } from '@/presentation/protocols'
import { makeSignupValidation } from '@/main/factories/controllers'
import { makeDbAddAccount } from '@/main/factories/usecases/account/add-account/db-add-account-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbAuthentication } from '@/main/factories/usecases'

export const makeSignupController = (): Controller => {
  return makeLogControllerDecorator(new SignupController(makeDbAddAccount(), makeSignupValidation(), makeDbAuthentication()))
}

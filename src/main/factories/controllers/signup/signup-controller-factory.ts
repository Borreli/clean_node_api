import { SignupController } from '@/presentation/controllers/login'
import { Controller } from '@/presentation/protocols'
import { makeSignupValidation, makeDbAuthentication, makeLogControllerDecorator } from '@/main/factories'
import { makeDbAddAccount } from '@/main/factories/usecases/add-account/add-account-factory'

export const makeSignupController = (): Controller => {
  return makeLogControllerDecorator(new SignupController(makeDbAddAccount(), makeSignupValidation(), makeDbAuthentication()))
}

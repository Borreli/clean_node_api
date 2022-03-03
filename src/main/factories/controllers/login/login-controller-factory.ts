import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers/login'
import { makeLoginValidation, makeLogControllerDecorator } from '@/main/factories'
import { makeDbAuthentication } from '@/main/factories/usecases/authentication/db-authentication-factory'

export const makeLoginController = (): Controller => {
  return makeLogControllerDecorator(new LoginController(
    makeLoginValidation(),
    makeDbAuthentication()
  ))
}

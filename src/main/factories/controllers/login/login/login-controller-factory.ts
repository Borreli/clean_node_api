import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers/login'
import { makeLoginValidation } from '@/main/factories/controllers'
import { makeDbAuthentication } from '@/main/factories/usecases/account/authentication/db-authentication-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators'

export const makeLoginController = (): Controller => {
  return makeLogControllerDecorator(new LoginController(
    makeLoginValidation(),
    makeDbAuthentication()
  ))
}

import { AddAccount, Authentication } from '@/domain/usecases'
import {
  Controller,
  HttpResponse,
  HttpRequest
} from '@/presentation/protocols'
import { badRequest, ok, serverError, forbidden } from '@/presentation/helpers/http'
import { Validation } from '@/presentation/helpers/validators'
import { EmailInUseError } from '@/presentation/errors'

export class SignupController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication?: Authentication
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      if (!account) {
        return forbidden(new EmailInUseError())
      }
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}

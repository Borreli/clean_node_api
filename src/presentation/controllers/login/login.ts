import { Controller, HttpRequest, HttpResponse, EmailValidator } from '@/presentation/protocols'
import { badRequest, serverError } from '@/presentation/helpers/http-helper'
import { MissingParamError, InvalidParamError } from '@/presentation/errors'

export class LoginController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
      } else if (!password) {
        return new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return new Promise(resolve => resolve(badRequest(new InvalidParamError('email'))))
      }
    } catch (error) {
      return serverError(error)
    }
  }
}

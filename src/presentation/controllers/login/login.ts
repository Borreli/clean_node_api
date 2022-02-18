import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { badRequest } from '@/presentation/helpers/http-helper'
import { MissingParamError } from '@/presentation/errors'
import { EmailValidator } from '@/presentation/controllers/signup/protocols'

export class LoginController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    } else if (!httpRequest.body.password) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
    this.emailValidator.isValid(httpRequest.body.email)
  }
}

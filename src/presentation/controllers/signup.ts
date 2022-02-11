import { MissingParamError } from '@/presentation/errors/missing-param-error'
import { badRequest } from '@/presentation/helpers/http-helper'
import { HttpResponse, HttpRequest } from '@/presentation/protocols/http'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    } else if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}

import { Middleware } from '@/presentation/protocols/middleware'
import { HttpRequest, HttpResponse } from '@/presentation/protocols'
import { forbidden } from '@/presentation/helpers/http'
import { AccessDeniedError } from '@/presentation/errors'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise(resolve => resolve(forbidden(new AccessDeniedError())))
  }
}

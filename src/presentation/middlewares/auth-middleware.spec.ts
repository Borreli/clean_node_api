import { forbidden } from '@/presentation/helpers/http'
import { AccessDeniedError } from '@/presentation/errors'
import { AuthMiddleware } from '@/presentation/middlewares'

describe('AuthMiddleware', () => {
  test('Should return 403 if no x-access-token exists in headers', async () => {
    const sut = new AuthMiddleware()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})

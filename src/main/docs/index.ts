import { loginPath } from '@/main/docs/paths'
import { accountSchema, loginParamsSchema, errorSchema } from '@/main/docs/schemas'
import { badRequestComponent, unauthorizedComponent, serverErrorComponent, notFoundComponent } from '@/main/docs/components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango para realizar enquetes entre programadores',
    version: '0.5.1'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest: badRequestComponent,
    unauthorized: unauthorizedComponent,
    notFound: notFoundComponent,
    serverError: serverErrorComponent
  }
}

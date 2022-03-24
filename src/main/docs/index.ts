import { loginPath, surveyPath, signupPath } from '@/main/docs/paths'
import {
  accountSchema,
  loginParamsSchema,
  errorSchema,
  surveySchema,
  surveysSchema,
  surveyAnswerSchema,
  apiKeyAuthSchema,
  signupParamsSchema
} from '@/main/docs/schemas'
import {
  badRequestComponent,
  unauthorizedComponent,
  serverErrorComponent,
  notFoundComponent,
  forbiddenComponent
} from '@/main/docs/components'

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
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signupPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    survey: surveySchema,
    surveys: surveysSchema,
    surveyAnswer: surveyAnswerSchema,
    signupParams: signupParamsSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest: badRequestComponent,
    unauthorized: unauthorizedComponent,
    forbidden: forbiddenComponent,
    notFound: notFoundComponent,
    serverError: serverErrorComponent
  }
}

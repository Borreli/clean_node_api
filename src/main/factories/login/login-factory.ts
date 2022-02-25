import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers'
import { LogControllerDecorator } from '@/main/decorators'
import { DbAuthentication } from '@/data/usecases'
import { makeLoginValidation } from '@/main/factories'
import { AccountMongoRepository, LogMongoRepository } from '@/infra/db/mongodb'
import { BcryptAdapter, JwtAdapter } from '@/infra/cryptography'
import env from '@/main/config/env'

export const makeLoginController = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAuthentication = new DbAuthentication(
    accountMongoRepository,
    bcryptAdapter,
    jwtAdapter,
    accountMongoRepository
  )
  const loginController = new LoginController(
    makeLoginValidation(),
    dbAuthentication
  )
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(loginController, logMongoRepository)
}

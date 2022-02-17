import { DbAddAccount } from '@/data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter'
import { AccountMongoRepository, LogMongoRepository } from '@/infra/db/mongodb'
import { LogControllerDecorator } from '@/main/decorators'
import { SignupController } from '@/presentation/controllers/signup/signup'
import { Controller } from '@/presentation/protocols'
import { EmailValidatorAdapter } from '@/utils/email-validator-adapter'

export const makeSignupController = (): Controller => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signupController = new SignupController(emailValidator, dbAddAccount)
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(signupController, logMongoRepository)
}

import { Authentication, AuthenticationModel } from '@/domain/usecases'
import { HashComparer, TokenGenerator } from '@/data/protocols/cryptography'
import { LoadAccountByEmailRepository } from '@/data/protocols/db'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly tokenGenerator: TokenGenerator
  ) {}

  async auth (authentication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authentication.email)
    if (account) {
      await this.hashComparer.compare(authentication.password, account.password)
      await this.tokenGenerator.generate(account.id)
    }
    return null
  }
}

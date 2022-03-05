import { LoadAccountByToken } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { Decrypter } from '@/data/protocols/cryptography'
import { LoadAccountByTokenRepository } from '@/data/protocols/db'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      await this.loadAccountByTokenRepository.loadByToken(accessToken, role)
    }
    return null
  }
}

import { LoadAccountByToken } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { Decrypter } from '@/data/protocols/cryptography'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (private readonly decrypter: Decrypter) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    await this.decrypter.decrypt(accessToken)
    return null
  }
}

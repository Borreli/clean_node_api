import { Hasher } from '@/data/protocols/cryptography'
import { AddAccountRepository, LoadAccountByEmailRepository } from '@/data/protocols/db'
import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountParams } from '@/domain/usecases'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async add (data: AddAccountParams): Promise<AccountModel> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(data.email)
    if (!account) {
      const hashedPassword = await this.hasher.hash(data.password)
      const newAccount = await this.addAccountRepository.add(
        Object.assign({}, data, { password: hashedPassword })
      )
      return newAccount
    }
    return null
  }
}

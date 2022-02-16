import { AddAccountRepository } from '@/data/protocols'
import { AccountModel } from '@/domain/models'
import { AddAccountModel } from '@/domain/usecases'
import { MongoHelper } from '@/infra/db/mongodb/helpers'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return MongoHelper.map(result.ops[0])
  }
}

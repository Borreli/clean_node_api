import { MongoHelper } from '@/infra/db/mongodb/helpers'
import { Collection } from 'mongodb'
import { LogMongoRepository } from '@/infra/db/mongodb/log-repository/log'

describe('LogMongoRepository', () => {
  let errorCollection: Collection

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  test('Should create an error log on success', async () => {
    const sut = new LogMongoRepository()
    await sut.logError('your_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})

import { DbLoadSurveys } from '@/data/usecases'
import { SurveyMongoRepository } from '@/infra/db/mongodb'
import { LoadSurveys } from '@/domain/usecases'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(surveyMongoRepository)
}

import { DbLoadSurveyById } from '@/data/usecases'
import { SurveyMongoRepository } from '@/infra/db/mongodb'
import { LoadSurveyById } from '@/domain/usecases'

export const makeDbLoadSurveyById = (): LoadSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(surveyMongoRepository)
}

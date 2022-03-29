import { Controller } from '@/presentation/protocols'
import { LoadSurveyResultController } from '@/presentation/controllers/survey-result'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbLoadSurveyResult, makeDbLoadSurveyById } from '@/main/factories/usecases'

export const makeLoadSurveyResultController = (): Controller => {
  return makeLogControllerDecorator(new LoadSurveyResultController(
    makeDbLoadSurveyById(),
    makeDbLoadSurveyResult()
  ))
}

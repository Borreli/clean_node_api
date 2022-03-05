import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers/survey'
import { makeAddSurveyValidation } from '@/main/factories/controllers'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/add-survey/db-add-survey-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators'

export const makeAddSurveyController = (): Controller => {
  return makeLogControllerDecorator(new AddSurveyController(
    makeAddSurveyValidation(),
    makeDbAddSurvey()
  ))
}

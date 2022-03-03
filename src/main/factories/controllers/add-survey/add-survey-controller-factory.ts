import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers/survey'
import { makeAddSurveyValidation, makeLogControllerDecorator } from '@/main/factories'
import { makeDbAddSurvey } from '@/main/factories/usecases/add-survey/db-add-survey-factory'

export const makeAddSurveyController = (): Controller => {
  return makeLogControllerDecorator(new AddSurveyController(
    makeAddSurveyValidation(),
    makeDbAddSurvey()
  ))
}

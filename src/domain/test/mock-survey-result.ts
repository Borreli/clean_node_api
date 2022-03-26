import { SurveyResultModel } from '@/domain/models'
import { SaveSurveyResultParams } from '@/domain/usecases'

export const mockSurveyResultModel = (): SurveyResultModel => ({
  surveyId: 'any_survey_id',
  question: 'any_question',
  answers: [{
    answer: 'any_answer',
    count: 1,
    percent: 25
  }, {
    answer: 'other_answer',
    count: 3,
    percent: 75
  }],
  date: new Date()
})

export const mockSaveSurveyResultParams = (): SaveSurveyResultParams => ({
  surveyId: 'any_survey_id',
  accountId: 'any_account_id',
  answer: 'any_answer',
  date: new Date()
})

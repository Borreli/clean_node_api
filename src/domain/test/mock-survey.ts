import { AddSurveyParams } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'

export const mockSurveyModel = (): SurveyModel =>
  Object.assign({}, mockAddSurveyParams(), { id: 'any_id' })

export const mockSurveyModels = (): SurveyModel[] => {
  return [
    mockSurveyModel(),
    {
      id: 'other_id',
      question: 'other_question',
      answers: [{
        image: 'other_image',
        answer: 'other_answer'
      }],
      date: new Date()
    }
  ]
}

export const mockAddSurveyParams = (): AddSurveyParams => ({
  question: 'any_question',
  answers: [{
    answer: 'any_answer',
    image: 'any_image'
  }, {
    answer: 'other_answer'
  }],
  date: new Date()
})

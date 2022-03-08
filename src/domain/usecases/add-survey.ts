import { SurveyAnswerModel } from '@/domain/models'

export interface AddSurveyModel {
  question: string
  answers: SurveyAnswerModel[]
  date: Date
}

export interface AddSurvey {
  add (Survey: AddSurveyModel): Promise<void>
}

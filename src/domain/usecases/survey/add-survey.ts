import { SurveyModel } from '@/domain/models'

export type AddSurveyParams = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add (Survey: AddSurveyParams): Promise<void>
}

import { SurveyModel } from '@/domain/models'

export type AddSurveyModel = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add (Survey: AddSurveyModel): Promise<void>
}

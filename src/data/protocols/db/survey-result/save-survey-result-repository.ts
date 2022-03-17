import { SaveSurveyResultParams } from '@/domain/usecases'
import { SurveyResultModel } from '@/domain/models'

export interface SaveSurveyResultRepository {
  save (data: SaveSurveyResultParams): Promise<SurveyResultModel>
}

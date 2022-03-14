import { SaveSurveyResultModel } from '@/domain/usecases'
import { SurveyResultModel } from '@/domain/models'

export interface SaveSurveyResultRepository {
  save (data: SaveSurveyResultModel): Promise<SurveyResultModel>
}

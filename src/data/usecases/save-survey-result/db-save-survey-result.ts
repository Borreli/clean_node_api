import { SaveSurveyResult, SaveSurveyResultModel } from '@/domain/usecases'
import { SurveyResultModel } from '@/domain/models'
import { SaveSurveyResultRepository } from '@/data/protocols/db'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (private readonly saveSurveyResultRepository: SaveSurveyResultRepository) {}

  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    await this.saveSurveyResultRepository.save(data)
    return null
  }
}

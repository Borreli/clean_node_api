import { LoadSurveys } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'
import { LoadSurveysRepository } from '@/data/protocols/db'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}

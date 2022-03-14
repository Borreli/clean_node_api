import { AddSurvey, AddSurveyModel } from '@/domain/usecases'
import { AddSurveyRepository } from '@/data/protocols/db'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}

  async add (data: AddSurveyModel): Promise<void> {
    await this.addSurveyRepository.add(data)
  }
}

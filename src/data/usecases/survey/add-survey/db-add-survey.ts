import { AddSurvey, AddSurveyParams } from '@/domain/usecases'
import { AddSurveyRepository } from '@/data/protocols/db'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}

  async add (data: AddSurveyParams): Promise<void> {
    await this.addSurveyRepository.add(data)
  }
}

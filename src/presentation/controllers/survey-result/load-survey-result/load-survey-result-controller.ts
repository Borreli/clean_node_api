import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { LoadSurveyById } from '@/domain/usecases'

export class LoadSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { surveyId } = httpRequest.params
    await this.loadSurveyById.loadById(surveyId)
    return Promise.resolve(null)
  }
}

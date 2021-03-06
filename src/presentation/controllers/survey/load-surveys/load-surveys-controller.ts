import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { LoadSurveys } from '@/domain/usecases'
import { ok, serverError, noContent } from '@/presentation/helpers/http'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      return surveys.length ? ok(surveys) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

import { RequiredFieldValidation } from '@/presentation/helpers/validators/required-field-validation'
import { MissingParamError } from '@/presentation/errors'

describe('RequiredFieldValidation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})

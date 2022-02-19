import { makeSignupValidation } from '@/main/factories'
import {
  ValidationComposite,
  RequiredFieldValidation,
  Validation,
  CompareFieldsValidation
} from '@/presentation/helpers/validators'

jest.mock('@/presentation/helpers/validators/validation-composite')

describe('SignupValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignupValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})

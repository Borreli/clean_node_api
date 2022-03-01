import {
  ValidationComposite,
  RequiredFieldValidation,
  Validation,
  CompareFieldsValidation,
  EmailValidation
} from '@/presentation/helpers/validators'
import { EmailValidatorAdapter } from '@/main/adapters'

export const makeSignupValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}

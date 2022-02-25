import {
  ValidationComposite,
  RequiredFieldValidation,
  Validation,
  EmailValidation
} from '@/presentation/helpers/validators'
import { EmailValidatorAdapter } from '@/main/adapters'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
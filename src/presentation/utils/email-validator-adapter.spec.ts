import { EmailValidatorAdapter } from '@/presentation/utils/email-validator-adapter'

describe('EmailValidatorAdapter', () => {
  test('Sould return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})

import { AccountModel } from '@/domain/models'
import { AddAccountParams, AuthenticationParams } from '@/domain/usecases'

export const mockAccountModel = (): AccountModel =>
  Object.assign({}, mockAddAccountParams(), { id: 'any_id', password: 'hashed_password' })

export const mockAddAccountParams = (): AddAccountParams =>
  Object.assign({}, mockAuthenticationParams(), { name: 'any_name' })

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})

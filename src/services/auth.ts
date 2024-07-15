import type { LoginRequest, RegisterRequest } from '@/types/requests/auth'
import type { APIResponse } from '@/types/responses'
import type { AuthToken } from '@/types/responses/auth'
import apiService from '@/utils/apiService'
import { wrapError } from '@/utils/exception'

export const login = async (payload: LoginRequest): Promise<APIResponse<AuthToken> | undefined> => {
  try {
    const res = await apiService.post<APIResponse<AuthToken>>('auth/login', {
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res
  } catch (e) {
    throw await wrapError(e)
  }
}

export const register = async (
  payload: RegisterRequest
): Promise<APIResponse<null> | undefined> => {
  try {
    console.log(payload)
    const res = await apiService.post<APIResponse<null>>('auth/register', {
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res
  } catch (e) {
    throw await wrapError(e)
  }
}

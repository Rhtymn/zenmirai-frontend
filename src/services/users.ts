import type { APIResponse } from '@/types/responses'
import type { UserProfile } from '@/types/responses/users'
import apiService from '@/utils/apiService'
import { wrapError } from '@/utils/exception'

export const getProfile = async (token: string): Promise<APIResponse<UserProfile> | undefined> => {
  try {
    const res = await apiService.get<APIResponse<UserProfile>>('users/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    return res
  } catch (e) {
    throw await wrapError(e)
  }
}

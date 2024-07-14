import { HttpStatus } from '@/constants/api'
import { BadRequest } from '@/exceptions/badRequest'
import { InternalServerError } from '@/exceptions/internalServerError'
import { ResponseError } from '@/exceptions/responseError'
import { Unauthorized } from '@/exceptions/unauthorized'

export const wrapError = async (e: unknown): Promise<Error> => {
  if (e instanceof ResponseError) {
    const res = await e.response.json()
    switch (e.response.status) {
      case HttpStatus.BadRequest:
        return new BadRequest(res.message)
      case HttpStatus.Unauthorized:
        return new Unauthorized(res.message)
      default:
        return new InternalServerError(res.message)
    }
  }
  return new InternalServerError(`something went wrong`)
}

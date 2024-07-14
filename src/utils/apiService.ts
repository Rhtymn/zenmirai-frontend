import { ResponseError } from '@/exceptions/responseError'

class ApiService {
  constructor(private baseUrl: string) {}

  private async request<T>(
    resource: string,
    method: string,
    req?: Omit<RequestInit, 'method'>
  ): Promise<T | undefined> {
    const res = await fetch(`${this.baseUrl}/${resource}`, {
      ...req,
      method: method,
      headers: {
        ...req?.headers
      }
    })

    if (res.status >= 400) {
      throw new ResponseError('something went wrong', res)
    }

    try {
      return await res.json()
    } catch (e) {
      return undefined
    }
  }

  async get<T>(resource: string, req?: Omit<RequestInit, 'method'>): Promise<T | undefined> {
    console.log(this, resource, req)
    return await this.request(resource, 'GET', req)
  }

  async post<T>(resource: string, req: Omit<RequestInit, 'method'>): Promise<T | undefined> {
    return await this.request(resource, 'POST', req)
  }

  async put<T>(resource: string, req: Omit<RequestInit, 'method'>): Promise<T | undefined> {
    return await this.request(resource, 'PUT', req)
  }

  async patch<T>(resource: string, req: Omit<RequestInit, 'method'>): Promise<T | undefined> {
    return await this.request(resource, 'PATCH', req)
  }

  async delete<T>(resource: string, req?: Omit<RequestInit, 'method'>): Promise<T | undefined> {
    return await this.request(resource, 'DELETE', req)
  }
}

const apiService = new ApiService(import.meta.env.VITE_API_URL)
export default apiService

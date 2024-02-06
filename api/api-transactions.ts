import { URL_BASE } from './url';

export async function getTransactions({ page, perPage }: { page: Number, perPage: number }): Promise<Response> {
  // const token = localStorage.getItem("token")

  const response =  await fetch(`${URL_BASE}transactions?page=${page}&perPage=${perPage}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDQwNWNlNjJlYTQxYThmY2RhYTZkMCIsImlhdCI6MTcwNzE0MTk1Mn0.5mtygD60dPer3PqgwE2z0kRGQgat3Z_zpPF9cdjq-fQ`
    },
  })

  return response
}
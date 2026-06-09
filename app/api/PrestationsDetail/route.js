import { getAllPrestationsDetail } from '@/server/PrestationsDetailDal'

export async function GET() {
  try {
    const details = await getAllPrestationsDetail()
    return Response.json(details)
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}
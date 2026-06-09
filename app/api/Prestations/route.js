import { getAllPrestations } from '@/server/PrestationsDal'

export async function GET() {
  try {
    const prestations = await getAllPrestations()
    return Response.json(prestations)
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}

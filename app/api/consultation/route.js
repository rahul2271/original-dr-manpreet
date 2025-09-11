import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const record = { ...body, createdAt: new Date().toISOString() }
    return NextResponse.json({ success: true, message: 'Consultation request received', data: record })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

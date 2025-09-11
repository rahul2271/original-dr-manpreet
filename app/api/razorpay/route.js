import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const order = { id: 'order_fake_123', amount: body.amount, currency: 'INR' }
    return NextResponse.json({ success: true, order })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

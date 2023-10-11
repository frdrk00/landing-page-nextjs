import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, message } = body

    if (!firstName || !lastName || !email || !message) {
      return new NextResponse('Missing fields', { status: 400 })
    }

    const createMessage = await db.message.create({
      data: {
        firstName,
        lastName,
        email,
        message,
      },
    })

    return NextResponse.json(createMessage)
  } catch (error) {
    console.log('[MESSAGE_POST:', error)
    return new NextResponse('Internal Error_MESSAGE', { status: 500 })
  }
}

export async function GET() {
  try {
    const messages = await db.message.findMany()

    return NextResponse.json(messages)
  } catch (error) {
    console.log('[MESSAGE_GET:', error)
    return new NextResponse('Internal Error_MESSAGE', { status: 500 })
  }
}

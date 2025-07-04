
import pool from '../../utils/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    client.release();
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

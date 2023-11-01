import { NextResponse } from 'next/server';
import db from '../../../_data/db.json';

export async function GET(req: Request) {
  return NextResponse.json(db.recipes);
}

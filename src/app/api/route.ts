import { NextResponse } from "next/server";
import db from "../config/db";

export async function get(req: any) {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err: any, results: []) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    console.log(results);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error }), { status: 500 };
  }
}

import { NextRequest, NextResponse } from "next/server";

export function GET(req, res) {
  console.log("masukkk ", req)
  return NextResponse.json({message: "ridwan"});
 }
 
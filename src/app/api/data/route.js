import { NextRequest, NextResponse } from "next/server";

export function GET(req, res) {
  if(req.method === "GET"){
    try {
      const {q} = req.query;

      // Search posts
      
      return NextResponse.json({posts: []},{status: 200});
      
    } catch (error) {
      
    }
  }
 }
 
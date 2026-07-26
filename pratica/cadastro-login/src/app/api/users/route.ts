import fs from "fs" 
import { NextResponse } from "next/server" 
import path from "path" 
const filePath = path.join(process.cwd(), "src", "db", "users.json") 

function readUsers() { 
    if(!fs.existsSync(filePath)) { 
        return [] 
    } 
    
    const data = fs.readFileSync(filePath, "utf-8") 
    
    return data ? JSON.parse(data): [] 
} 

export async function GET() {
    const users = readUsers() 
    
    return NextResponse.json(users)
} 


export async function POST(request: Request) { 
    const body = await request.json() 
    const currentUsers = readUsers() 
    const newUser = { id: Date.now(), ...body, } 

    currentUsers.push(newUser) 

    fs.writeFileSync(filePath, JSON.stringify(currentUsers, null, 2)) 
    
    return NextResponse.json(newUser, { status: 201 })
}
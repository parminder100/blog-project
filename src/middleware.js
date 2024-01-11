import { NextResponse } from "next/server"

const MiddleWare = (request) =>{
    return NextResponse.redirect(new URL("/Login", request.url));
};
export default MiddleWare;

export const config = {
    matcher: "/Study/:path*",
};
const { NextResponse } = require("next/server")

const login = async (Request) => {
    NextResponse.json({ hello: "server" })
}

export default login
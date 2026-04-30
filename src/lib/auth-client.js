import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://skill-sphere-ten-lac.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()
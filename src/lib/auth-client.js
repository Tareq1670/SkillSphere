import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://skill-sphere-7eoq9f0zf-tareq1670s-projects.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()
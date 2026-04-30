import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://skill-sphere-iuclgnh7e-tareq1670s-projects.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()
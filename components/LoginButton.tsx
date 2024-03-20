"use client"

import { usePrivy } from '@privy-io/react-auth'

export default function LoginButton() {
  const { login, logout, ready, authenticated, user  } = usePrivy()

  const disableLogout = !ready || (ready && !authenticated)

  return (
    <>
      {ready && !authenticated && (
        <button
          onClick={login}
        >
          Log in
        </button>
      )}
      {ready && authenticated && (
        <>
          <p>User {user?.id} is logged in.</p>
          <button disabled={disableLogout} onClick={logout}>
            Log out
          </button>
        </>
      )}
    </>
  )
}

"use client"

import { usePrivy } from '@privy-io/react-auth'

export default function LoginButton() {
  const { login, ready, authenticated, user  } = usePrivy()

  return (
    <>
      {ready && !authenticated && (
        <button
          onClick={login}
        >
          Log in
        </button>
      )}
      {ready && authenticated && <p>User {user?.id} is logged in.</p>}
    </>
  )
}

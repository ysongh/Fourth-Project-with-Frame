"use client"

import {usePrivy} from '@privy-io/react-auth'

export default function LoginButton() {
  const { login } = usePrivy()

  return (
    <button
      onClick={login}
    >
      Log in
    </button>
  )
}

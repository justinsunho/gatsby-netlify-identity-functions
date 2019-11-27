import React from "react"
import { useNetlifyIdentity } from "react-netlify-identity-widget"

const Identity = () => {
  const identity = useNetlifyIdentity(
    "https://elastic-hoover-c89024.netlify.com/"
  )

  return identity && identity.user ? (
    <>
      <p>Hello {identity.user.user_metadata.full_name}</p>
      <pre>{JSON.stringify(identity, null, 2)}</pre>
    </>
  ) : null
}

export default Identity

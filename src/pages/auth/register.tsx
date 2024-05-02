import Link from 'next/link'
import React from 'react'

const RegiterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>Sudah memiliki akun? login <Link href={'/auth/login'}>disini</Link></p>
    </div>
  )
}

export default RegiterPage
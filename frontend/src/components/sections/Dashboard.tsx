'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function Dashboard() {
  const { currentUser, userDataObj } = useAuth()
  const [data, setData] = useState({})

  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return
    }
    setData(userDataObj)
  }, [currentUser, userDataObj])

  return (
    <div className='flex flex-col flex-1'>
      <div className='grid grid-cols-1 sm:grid-cols-3'>
        Home
      </div>
    </div>
  )
}

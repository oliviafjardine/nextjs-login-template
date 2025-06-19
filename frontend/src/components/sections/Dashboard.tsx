'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Loading from "@/components/ui/Loading";
import Login from "@/components/sections/Login";

export default function Dashboard() {
  const { currentUser, userDataObj, setUserDataObj, loading } = useAuth()
  const [data, setData] = useState({})

  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return
    }
    setData(userDataObj)
  }, [currentUser, userDataObj])
  
    if (loading) {
        return <Loading />
    }

    if (!currentUser) {
        return <Login />
    }

  return (
    <div className='flex flex-col flex-1'>
      <div className='grid grid-cols-1 sm:grid-cols-3'>
        Home
      </div>
    </div>
  )
}

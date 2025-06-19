"use client";

import React from 'react'
import Button from '../ui/Button'
import { useAuth } from '@/context/AuthContext'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Logout() {
  const { logout, currentUser } = useAuth();
  const pathname = usePathname();
  console.log(pathname);
  if (!currentUser) return null;

  if (pathname === '/') {
    return (
      <Link href={'/dashboard'}>
        <Button text='Go to Dashboard'></Button>
      </Link>
    )
  }

  return (
    <Button text='Logout' onClick={logout}></Button>
  )
}

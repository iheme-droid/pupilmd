'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies();
  
  // Force expire the cookie across the entire domain
  cookieStore.set('auth_session', '', {
    path: '/',
    maxAge: 0,
    expires: new Date(0),
  });

  redirect('/auth');
}
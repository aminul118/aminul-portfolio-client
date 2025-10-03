/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { cookies } from 'next/headers';

import envVars from '@/config/env.config';
import { apiPost } from '@/lib/apiClient';
import { redirect } from 'next/navigation';

// Register
export const registerUser = async (formData: any) => {
  return await apiPost({
    endpoint: '/user/register',
    tag: 'USER',
    data: formData,
  });
};

// Login
export const loginUser = async (formData: any) => {
  const res = await apiPost({
    endpoint: '/auth/login',
    tag: 'USER',
    data: formData,
  });

  const { accessToken, refreshToken } = res?.data;

  if (accessToken) {
    (await cookies()).set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });
  }

  if (refreshToken) {
    (await cookies()).set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  }

  return res;
};

// Logout
export const logoutUser = async () => {
  (await cookies()).delete('accessToken');
  (await cookies()).delete('refreshToken');
  redirect('/login');
};

export const forgot = async () => {};

interface IPayload {
  plainPassword: string;
  token: string;
}

export const setPasswordAction = async (payload: IPayload) => {
  const { plainPassword, token } = payload;

  try {
    const res = await fetch(`${envVars.baseUrl}/auth/set-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(plainPassword),
      cache: 'no-store',
    });

    return await res.json();
  } catch (err) {
    console.error('setPasswordAction error:', err);
    throw err;
  }
};

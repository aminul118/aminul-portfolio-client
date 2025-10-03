/* eslint-disable @typescript-eslint/no-explicit-any */
import envVars from '@/config/env.config';
import { revalidateTag } from 'next/cache';

export interface IApiParams {
  [key: string]: string | number | undefined;
}

export interface IFetchOptions {
  cache?: RequestCache; // 'force-cache' | 'no-store' | 'reload' | 'only-if-cached'
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

export interface ApiGetOptions {
  path: string;
  params?: IApiParams;
  fetchOptions?: IFetchOptions;
}

export const apiGet = async <T>({
  path,
  params = {},
  fetchOptions = { cache: 'force-cache' },
}: ApiGetOptions): Promise<T> => {
  // Convert params object to query string
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });

  const queryString = query.toString();
  const url = `${envVars.baseUrl}${path}${queryString ? `?${queryString}` : ''}`;

  // Fetch API
  const res = await fetch(url, {
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status}`);
  }

  const data = (await res.json()) as T;

  // Revalidate tags if provided
  if (fetchOptions.next?.tags) {
    fetchOptions.next.tags.forEach((tag) => revalidateTag(tag));
  }

  return data;
};

export async function apiPost({
  endpoint,
  data,
  tag,
}: {
  endpoint: string;
  data: any;
  tag: string;
}) {
  try {
    const res = await fetch(`${envVars.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include',
      cache: 'no-store',
    });

    const result = await res.json();

    if (tag) revalidateTag(tag);

    return result;
  } catch (error: any) {
    return {
      statusCode: 500,
      success: false,
      message: error.message || 'Something went wrong',
      data: null as any,
    };
  }
}

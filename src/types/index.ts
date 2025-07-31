import React from 'react';

export type Children = {
  children: React.ReactNode;
};

export type Params = {
  params: Promise<{ slug: string }>;
};

export type MetaProps = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  path?: string;
};

export type Routes = {
  url: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

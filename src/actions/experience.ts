'use server';
import { apiPost } from '@/lib/apiClient';

export async function addExperience(formData: FormData) {
  return await apiPost({
    endpoint: '/experience',
    tag: 'Experience',
    data: formData,
  });
}

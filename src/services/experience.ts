import envVars from '@/config/env.config';
import { IExperience } from '@/types/apiData.types';
import { ApiResponse } from './../types/index';

export const getAllExperience = async (): Promise<
  ApiResponse<IExperience[]>
> => {
  const res = await fetch(`${envVars.baseUrl}/experience`, {
    cache: 'force-cache',
    next: {
      tags: ['Experience'],
    },
  });

  return await res.json();
};

// Dependencies
import { useQuery } from '@tanstack/react-query';

// Fetch
import { fetchBreedList } from './fetchBreedList';

export const useBreedList = (animal) => {
  const results = useQuery(['breeds', animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results?.status];
};

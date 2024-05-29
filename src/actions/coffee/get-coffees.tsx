'use server';

import { Coffee } from "@/interfaces/coffee.interface";

const API_URL = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

export const getCoffees = async (): Promise<Coffee[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) return [];

  return response.json();
};
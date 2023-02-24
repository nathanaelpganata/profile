import { NextSeoProps } from 'next-seo';

export type SEOTypes = {
  title: string;
  description?: string;
} & NextSeoProps;

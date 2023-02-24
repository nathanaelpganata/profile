import { NextSeo } from 'next-seo';

import { SEOTypes } from '@/types/entities/seo';

export default function SEO({ title, description, ...rest }: SEOTypes) {
  return (
    <NextSeo
      title={title}
      description={description}
      {...rest}
      openGraph={{
        type: 'website',
        url: 'https://profile-nathanpg.vercel.app',
        title: 'Nathanael PG Profile',
        description: "Nathanael Putra Ganata's profile",
        images: [
          {
            url: 'https://profile-nathanpg.vercel.app/og.png',
            width: 800,
            height: 600,
            alt: 'Nathanael PG Profile Image',
          },
        ],
      }}
    />
  );
}

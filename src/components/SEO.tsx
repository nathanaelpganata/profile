import { NextSeo } from 'next-seo';

import { SEOTypes } from '@/types/entities/seo';

export default function SEO({ title, description, ...rest }: SEOTypes) {
  return (
    <NextSeo
      title={title}
      description={description}
      {...rest}
      additionalMetaTags={[
        {
          name: 'google-site-verification',
          content: 'vHFS_i2JTa4SbtokZ6dHtPXhruGUBNqsSs3lLjCLnCo',
        },
      ]}
      openGraph={{
        type: 'website',
        url: 'https://profile-nathanpg.vercel.app',
        title: 'Nathanael PG | Profile',
        description:
          "Nathanael Putra Ganata's profile and portfolio as a web developer",
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

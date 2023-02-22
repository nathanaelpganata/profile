import { NextSeo, NextSeoProps } from 'next-seo';

type SEOProps = {
  title: string;
  description?: string;
} & NextSeoProps;

export default function SEO({ title, description, ...rest }: SEOProps) {
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

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
        url: '',
        title: '',
        description:
          "",
        images: [
          {
            url: '',
            width: 800,
            height: 600,
            alt: '',
          },
        ],
      }}
    />
  );
}

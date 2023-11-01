import BlockRenderer from 'components/BlockRenderer';
import { notFound } from 'next/navigation';
import React from 'react';
import { getPage } from 'utils/getPage';
import { getSeo } from 'utils/getSeo';

export default async function Page({ params }) {
  const data = await getPage(params.slug.join('/'));
  if (!data) {
    notFound();
  }
  return <BlockRenderer blocks={data} />;
}

export async function generateMetadata({ params }) {
  console.log('PARAMS: ', params);
  const seo = await getSeo(params.slug.join('/'));
  return {
    title: seo?.title || '',
    description: seo?.metaDesc || '',
  };
}

/**
 * params is an array that works like this:
 * slug:  selling/my-book
 *
 * index[0] => selling
 * index[1] => my-book
 */

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

##

## PAGINATION

Install first the plugin <a href="https://github.com/valu-digital/wp-graphql-offset-pagination">wp-graphql-offset-pagination</a>

<p>In GraphQl select pageInfo and total (to show how many properties do we have) then I divide this total by the amount properties I want to display. ex: display 3 per page and we have 6 properties, then we will have 6 / 3 = 2 pages to paginate...</p>

<hr>
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# FORM CONTACT US Formspree

> Link: https://formspree.io

# Wordpress Plugins:

## Plugins:

> Add WPGraphQL SEO

> Advanced Custom Fields PRO

> Custom Post Type UI

> Disable Gutenberg Blocks - Block Manager

> Font Awesome

> Vercel Deploy Hooks

> WP GraphQL Blocks ACF

> WP GraphQL

> WPGraphQL Blocks

> WPGraphQL for Advanced Custom Fields

> WPGraphQL Meta Query

> WPGraphQL Offset Pagination

> Yoast SEO

# ESSUE - fontawesome

- Essue because Server Render Side cause in fontawesome

> import { config } from '@fortawesome/fontawesome-svg-core';

> import '@fortawesome/fontawesome-svg-core/styles.css';

> config.autoAddCss = false;

> DOC: https://fontawesome.com/docs/web/use-with/react/use-with

# Problems with Cache in Next js 14

> Both Server router and Client router have cache and need to be revalidated after all updates.

> When I change anything in Wordpress the NextJs save everything in cache and we need to create some kind of REVALIDATION of this data.

- Solution:

<ol>
  <li> Create a folder "revalidate" inside of the [app] - [api] folder</li>
  <li> Create a file named route.js</li>
  <li> An api will be created to revalidate and empty the cache</li>
  <li> Install a plugin in Wordpress (Vercel Deploy Hooks)</li>
  <li> In setting, paste the api url and save</li>
  <li> Problem solved...</li>
</ol>

> route.js - Will be responsible for clearing all cache from my site any time I update a Post in Wordpress.

> An api will be created to revalidate and empty the cache. http://localhost:3000/api/revalidate

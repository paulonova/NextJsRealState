/**
 * Function substitute the url http://hot-dang-home.local for an
 * empty array.
 *
 * This is used to change the url address to go to http://localhost:3000 when
 * when clicked in url '/'
 */

export const relativeToAbsoluteUrls = (htmlString = '') => {
  return htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join('')
}

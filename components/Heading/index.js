import React from 'react'
import { getFontSizeForHeading, getTextAlign } from 'utils/fonts'

/**
 * textAlign, content, level are info that comes from Wordpress
 * via API and I want to define them!
 */
const Heading = ({ textAlign, content, level }) => {
  // Create a tag according to the Wordpress API
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)} `,
  })
  return tag
}

export default Heading

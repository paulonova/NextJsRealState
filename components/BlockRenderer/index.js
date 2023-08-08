//export {BlockRenderer} from './BlockRenderer';

import Cover from 'components/Cover'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import { theme } from 'theme'

const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/paragraph': {
        return (
          <Paragraph
            level={block.attributes.level}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            textAlign={block.attributes.align}
            content={block.attributes.content}
            key={block.id}
          />
        )
      }
      case 'core/heading': {
        return (
          <Heading
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            key={block.id}
          />
        )
      }
      case 'core/cover': {
        console.log('BLOCK: ', block)
        return (
          <Cover key={block.id} background={block.attributes.url}>
            {/* To render any innerBlocks inside of the "core/cover" */}
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      default:
        return null
    }
  })
}

export default BlockRenderer

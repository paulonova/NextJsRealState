//export {BlockRenderer} from './BlockRenderer';

import Cover from 'components/Cover'
import Heading from 'components/Heading'

const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
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

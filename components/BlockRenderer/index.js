import CallToActionButton from 'components/CallToActionButton'
import Column from 'components/Column'
import Columns from 'components/Columns'
import Cover from 'components/Cover'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import PropertySearch from 'components/PropertySearch'
import Image from 'next/image'
import { theme } from 'theme'

const BlockRenderer = ({ blocks }) => {
  console.log('BLOCKS: ', blocks)
  return blocks.map((block) => {
    switch (block.name) {
      case 'acf/ctabutton': {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            buttonDestination={block.attributes.data.destination || '/'}
            buttonAlign={block.attributes.data.align}
          />
        )
      }
      case 'core/columns': {
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        )
      }
      case 'core/column': {
        return (
          <Column key={block.id}>
            <BlockRenderer
              blocks={block.innerBlocks}
              width={block.attributes.width}
            />
          </Column>
        )
      }
      case 'core/image': {
        return (
          <Image
            key={block.id}
            alt={block.attributes.alt || ''}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
          />
        )
      }

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
      case 'core/post-title':
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
      case 'core/block':
      case 'core/group': {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />
      }
      case 'acf/propertysearch': {
        return <PropertySearch key={block.id} />
      }
      case 'core/cover': {
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

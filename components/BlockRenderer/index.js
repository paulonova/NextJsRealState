import CallToActionButton from 'components/CallToActionButton';
import Column from 'components/Column';
import Columns from 'components/Columns';
import Cover from 'components/Cover';
import FormspreeForm from 'components/FormspreeForm';
import Gallery from 'components/Gallery';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import PropertyFeatures from 'components/PropertyFeatures';
import PropertySearch from 'components/PropertySearch';
import TickItem from 'components/TickItem';
import Image from 'next/image';
import { theme } from 'theme';

const BlockRenderer = ({ blocks }) => {
  console.log('BLOCKS: ', blocks);
  return blocks.map((block) => {
    switch (block.name) {
      case 'acf/tickitem': {
        return (
          <TickItem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </TickItem>
        );
      }

      case 'core/gallery': {
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3} // 3 as a default col
            cropImages={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        );
      }
      case 'acf/propertyfeatures': {
        return (
          <PropertyFeatures
            key={block.id}
            price={block.attributes.price}
            bathrooms={block.attributes.bathrooms}
            bedrooms={block.attributes.bedrooms}
            hasParking={block.attributes.has_parking}
            petFriendly={block.attributes.pet_friendly}
          />
        );
      }

      case 'acf/formspreeform': {
        return (
          <FormspreeForm
            key={block.id}
            formId={block.attributes.data.form_id}
          />
        );
      }

      case 'acf/ctabutton': {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            buttonDestination={block.attributes.data.destination || '/'}
            buttonAlign={block.attributes.data.align}
          />
        );
      }
      case 'core/columns': {
        console.log('COLUMNS: ', block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case 'core/column': {
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case 'core/image': {
        console.log('IMAGE: ', block.attributes.url);
        return (
          <Image
            key={block.id}
            alt={block.attributes.alt || ''}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
          />
        );
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
        );
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
        );
      }
      case 'core/block':
      case 'core/group': {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case 'acf/propertysearch': {
        return <PropertySearch key={block.id} />;
      }
      case 'core/cover': {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            {/* To render any innerBlocks inside of the "core/cover" */}
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      default:
        console.log('UNKNOWN: ', block);
        return null;
    }
  });
};

export default BlockRenderer;

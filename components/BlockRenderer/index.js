//export {BlockRenderer} from './BlockRenderer';

import Cover from "components/Cover";

const BlockRenderer = ({ blocks }) => {
	return (
		blocks.map((block) => {
			switch (block.name) {
				case 'core/cover':
					return <Cover key={block.id} background={block.attributes.url}/>;
				default:
					return null;
			}

		})
	)
}

export default BlockRenderer;
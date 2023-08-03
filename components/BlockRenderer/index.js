//export {BlockRenderer} from './BlockRenderer';

const BlockRenderer = ({ blocks }) => {
	return (
		blocks.map((block, index) => {
			switch (block.name) {
				case 'core/cover':
					return <div key={block.id}>Core Cover</div>;
				default:
					return null;
			}

		})
	)
}

export default BlockRenderer;
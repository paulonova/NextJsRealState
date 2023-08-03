/**
 * This a recommended way to pass a key value to the array in GraphQl and Apollo
 * 
 * Aqui eu vou inserir um ID nos blocks e se houver algum innerBlocks será inserido tambem um id, para nao dar erro no react
 */

import { v4 as uuid } from 'uuid'

const cleanAndTransformBlocks = (blocksJSON) => {
	const blocks = JSON.parse(JSON.stringify(blocksJSON))

	// Check all levels of the array
	const assignId = (b) => {
		b.forEach(block => {
			block.id = uuid();
			if(block.innerBlocks?.length){
				assignId(block.innerBlocks)
			}
		});
	}

	assignId(blocks);
	return blocks;
}


export default cleanAndTransformBlocks;
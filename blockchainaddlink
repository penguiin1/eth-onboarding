// TODO: BlockHash 파일로 가서 먼저 코드를 작성해주세요.
import BlockHash from "./BlockHash";

export default class BlockChainAddLink {
  constructor() {
    const genesisBlock = new BlockHash("hello");
    this.chain = [genesisBlock];
  }

  // TODO: 새로운 블록을 추가하기 전에 이전 블록의 해시값을 previousHash에 추가해주세요.
  addBlock(block) {
    if (this.chain.length > 0) {
      // 이전 블록의 해시값을 새로운 블록의 previousHash에 설정
      const previousBlock = this.chain[this.chain.length - 1];
      block.previousHash = previousBlock.toHash();
    }
    this.chain.push(block);
  }
}

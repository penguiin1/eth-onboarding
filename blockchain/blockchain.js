import BlockData from "./BlockData";

export default class BlockChain {
  // TODO 1
  // BlockChain 클래스의 chain이라는 속성에 제네시스 블록을 추가해주세요.
  constructor() {
    this.chain = [];
    this.getBlock();
  }

  getBlock() {
    const block = new BlockData();
    this.chain.push(block);
  }
}

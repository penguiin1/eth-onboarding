export default class MerkleTreeProof {
  /*
  TODO: 다음의 조건을 만족하는 생성자를 만들어주세요.
  - 생성자의 첫번째 인자는 리프 노드들로 구성된 배열을 받습니다.
  - 생성자의 두번째 인자는 두 노드를 결합하고 해시하는 함수를 받습니다.
  - root 속성에 트리의 루트 노드를 할당해주세요.
  - leaves 속성에는 입력 받은 leaves 배열을 할당해주세요.
  - hash 속성에는 입력 받은 concat 함수를 할당해주세요.
  */
  constructor(leaves, concat) {
      this.leaves = leaves;
      this.hash = concat;
      this.layers = [];
      this.root = this.getTree();
  }

  getTree(){
    if (this.leaves.length === 0) return null;

    this.layers = [this.leaves];
    let currentLayer = this.leaves;

    while (currentLayer.length > 1) {
        const nextLayer = [];
        
        for (let i = 0; i < currentLayer.length; i += 2) {
            if (i + 1 === currentLayer.length) {
                nextLayer.push(currentLayer[i]);
            } else {
                const combined = this.hash(currentLayer[i], currentLayer[i + 1]);
                nextLayer.push(combined);
            }
        }
        
        this.layers.push(nextLayer);
        currentLayer = nextLayer;
    }

    return currentLayer[0];
  }


  /*
  TODO: 다음의 조건을 만족하는 함수를 만들어주세요.
  - 트리의 루트 노드를 찾아주는 함수입니다.
  */
  getRoot() {
    return this.root;
  }

  /*
  TODO: 리프 노드의 인덱스를 받아서 proof를 반환합니다.
  증명은 해시를 나타내는 data 속성과 해시가 왼쪽에 있는지를 나타내는 left 속성을 가진 객체들의 배열이 됩니다.
  (예시)
  [
  { data: 'D', left: false },
  { data: 'AB', left: true },
  { data: 'E', left: false }
  ]
  */
  getProof(index) {
    if (index < 0 || index >= this.leaves.length) {
      throw new Error('인덱스 잘못됨');
  }

  const proof = [];
  let currentIndex = index;

  for (let i = 0; i < this.layers.length - 1; i++) {
      const currentLayer = this.layers[i];
      const isEven = currentIndex % 2 === 0;
      const pairIndex = isEven ? currentIndex + 1 : currentIndex - 1;

      if (pairIndex < currentLayer.length) {
          proof.push({
              data: currentLayer[pairIndex],
              left: !isEven
          });
      }

      currentIndex = Math.floor(currentIndex / 2);
  }

  return proof;
  }
}

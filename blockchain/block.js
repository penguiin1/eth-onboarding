import sha256 from "crypto-js/sha256";

export default class Block {
  // TODO: sha256 함수를 이용하여 원하는 문자열을 해시값으로 변환한 뒤 반환해보세요.
  toHash() {
    const a = sha256("sha");
    return a;
  }
}

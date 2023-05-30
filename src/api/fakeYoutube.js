import axios from "axios";

export default class FakeYoutube {
  // 생성할 때 아무것도 전달하지 않아도 됨
  constructor() {}

  async search(keyword) {
    // popular.json과 search.json의 id가 있는 위치가 다르기에 설정
    // this: 멤버함수를 가르킴
    // #함수: 프라이빗 함수
    // 클래스 내부적으로는 호출이 가능하나 클래스 외부에서 호출 x
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}

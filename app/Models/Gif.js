export default class Gif {
  constructor(data) {
    this.title = data.title || ""
    this.myurl = data.myurl || data.embed_url
  }

  get Template() {

    return ``
  }

}
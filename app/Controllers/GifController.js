import GifService from "../Services/GifService.js";

//Private
let _gifService = new GifService()

function _drawApiGif() {
    let giphy = _gifService.ApiGif
    let template = '<ul class="list-group list-group-horizontal>'

}

<ul class="list-group list-group-horizontal">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
</ul>

//Public
export default class GifController {
    constructor() {
        //NOTE Register all subscribers
        _gifService.addSubscriber('apiGif', _drawApiGif)


        //NOTE Retrieve data
        _gifService.getAllApi()
    }
}
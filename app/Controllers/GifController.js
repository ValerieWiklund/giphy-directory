import GifService from "../Services/GifService.js";

//Private
let _gifService = new GifService()

function _drawApiGif() {
    let giphy = _gifService.ApiGif
    let template = '<ul class="list-group list-group-horizontal-sm">'
    giphy.forEach(g => {
        template += `<li class="list-group-item"><iframe src="${g.myurl}" frameborder = "0"></iframe></li>`
    })
    document.getElementById('api-gif').innerHTML = template += '</ul>'
}



//Public
export default class GifController {
    constructor() {
        //NOTE Register all subscribers
        _gifService.addSubscriber('apiGif', _drawApiGif)


        //NOTE Retrieve data
        _gifService.getAllApi()
    }
}
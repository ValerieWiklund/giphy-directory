import Value from "../Models/Gif.js";

let _giphyApi = axios.create({ baseURL: 'http://api.giphy.com/v1/gifs/trending?api_key=WQ2te6L8eIJ2SUKLHrJEbldTyOn27UAr' })
let sandboxApi = axios.create({ baseURL: 'bcw-sandbox.herokuapp.com/api/Valerie/gifs' })


//Private
let _state = {
    apiGif: [],
    myGif: [],
    currentGif: {}

}


//NOTE methods to run when a given property in state changes
let _subscribers = {
    apiGif: [],
    myGif: [],
    currentGif: []

}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class GifService {
    //#region GETTERS
    get ApiGif() {
        return _state.apiGif
    }



    //endregion

    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }


    //#region GiphyAPI
    getAllApi() {
        _giphyApi.get()
            .then(res => {
                _setState('apiGif', res.data.data)
                console.log(res.data.data)
            })
            .catch(err => console.error(err))
    }



}

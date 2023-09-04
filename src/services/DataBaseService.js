
import {DBUtils} from "./DataBaseUtilityFunctions.js";


const searchForCardByName = (cardName, callbackFunction) =>
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({cardName: cardName, skipNum: 1, limitNum: 5})}

    return fetch("http://localhost:8080/search-card-by-name", requestObject)

}

const searchForSetByName = (setName, callbackFunction) =>
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({setName: setName, skipNum: 0, limitNum: 5})}
    return fetch("http://localhost:8080/search-set-by-name", requestObject)
}

const searchForSetByCode = (setCode, callbackFunction) => 
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({setCode: setCode, skipNum: 0, limitNum: 5})}

    return fetch("http://localhost:8080/search-set-by-code", requestObject)
}

export const DataBaseService = {searchForCardByName, searchForSetByName, searchForSetByCode}

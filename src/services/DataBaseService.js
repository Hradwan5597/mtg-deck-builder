
import {DBUtils} from "./DataBaseUtilityFunctions.js";


const searchForCardByName = (cardName, skipNum, limitNum) =>
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({cardName: cardName, skipNum: skipNum, limitNum: limitNum})}
    return fetch("http://localhost:8080/search-card-by-name", requestObject);
}

const searchForSetByName = (setName, skipNum, limitNum) =>
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({setName: setName, skipNum: skipNum, limitNum: limitNum})}
    return fetch("http://localhost:8080/search-set-by-name", requestObject)
}

const searchForSetByCode = (setCode, skipNum, limitNum) => 
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({setCode: setCode, skipNum: skipNum, limitNum: limitNum})}
    return fetch("http://localhost:8080/search-set-by-code", requestObject)
}

export const DataBaseService = {
    searchForCardByName, 
    searchForSetByName, 
    searchForSetByCode
}

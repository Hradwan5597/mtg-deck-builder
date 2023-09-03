const searchForCardByName = (cardName, callbackFunction) =>
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({cardName: cardName})}

    fetch("http://localhost:8080/search-card-by-name", requestObject)
    .then(response => {
        response.json()
        .then(result => {
            return result
        })
    })
}

const searchForSetByName = (setName, callbackFunction) =>
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({setName: setName})}
    fetch("http://localhost:8080/search-set-by-name", requestObject)
    .then(response => {
        response.json()
        .then(result => {
            return result;
        })
    })
}

const searchForSetByCode = (setCode, callbackFunction) => 
{
    let requestObject = {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({setCode: setCode})}

    fetch("http://localhost:8080/search-set-by-code", requestObject)
    .then(response => {
        response.json()
        .then(result => {
            return result;
        })
    });
}

export const DataBaseService = {searchForCardByName, searchForSetByName, searchForSetByCode}

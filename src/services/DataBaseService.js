const searchForCardByName = cardName =>
{
    console.log("DataBaseService::searchForCardByName(...)", cardName)
}

const searchForSetByName = setName =>
{
    console.log("DataBaseService::searchForSetByName(...)", setName)
}

const searchForSetByCode = setCode => 
{
    console.log("DataBaseService::searchForSetByCode(...)", setCode)
}

export const DataBaseService = 
{
    searchForCardByName: searchForCardByName,
    searchForSetByName: searchForSetByName,
    searchForSetByCode: searchForSetByCode
}

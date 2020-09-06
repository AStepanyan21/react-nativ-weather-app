class SearchCitySDK {
  constructor(network_service){
    this._network_service = network_service
  }

  searchCity(url){
    return this._network_service.makeAPIGetRequest(url)
  }
}

export default  SearchCitySDK
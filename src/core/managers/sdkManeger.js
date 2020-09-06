import SearchCitySDK from '../api-sdk/SearchCitySDK'
import ServiceManager from './serviceManager'

const searchCitySDK = new SearchCitySDK(ServiceManager.networkService)

export default {
    searchCitySDK
}
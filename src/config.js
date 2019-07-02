const adServiceApi = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8080'
  : 'https//[DOMAIN_NAME]'

const mode = process.env.NODE_ENV === 'development'
  ? 'dev'
  : 'prod'

const ERROR_CODE = {
  '001': 'AD api does not exist, please notify adminstrator',
  '002': 'No add has been loaded or ad type is other',
  '003': `You have to specify "onAdLoaded" listener in order to control 
  the timing to show ad or remove "isAutoLoad: false" from AD.Init()`,
  '004': 'Please provide client ID'
}

module.exports = {
  adServiceApi,
  mode,
  ERROR_CODE
}
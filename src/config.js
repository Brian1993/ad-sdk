const adServiceApi = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'https//[DOMAIN_NAME]'

const mode = process.env.NODE_ENV === 'development'
  ? 'dev'
  : 'prod'

module.exports = {
  adServiceApi,
  mode
}
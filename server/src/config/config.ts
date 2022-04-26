export const ENVIRONMENT = process.env.APP_ENV || 'dev'
export const IS_PRODUCTION = ENVIRONMENT === 'production'
export const IS_TEST = ENVIRONMENT === 'test'
export const APP_PORT = Number(process.env.APP_PORT)
export const DB_URI = process.env.DB_URI
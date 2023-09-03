import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'

const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
require('dayjs/locale/ru')
dayjs.locale('ru')

export const formateDate = (date: string) => dayjs(String(date)).format('DD-MM-YYYY')

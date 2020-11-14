import moment from 'moment'

const SECONDS_TO_MS = 1000
const MINUTES_TO_MS = SECONDS_TO_MS * 60
const HOURS_TO_MS = MINUTES_TO_MS * 60
const DAYS_TO_MS = HOURS_TO_MS * 24
const WEEKS_TO_MS = DAYS_TO_MS * 7
const MONTHS_TO_MS = WEEKS_TO_MS * 30
const YEARS_TO_MS = MONTHS_TO_MS * 12

const TIME_TEXT = {
    second: 'second',
    minute: 'minute',
    hour: 'hour',
    day: 'day',
    week: 'week',
    month: 'month',
    year: 'year',
}

const getSpecificTimeText = (text, number) => {
    if(number === 1) {
        if(text === TIME_TEXT.hour){
            return 'an hour'
        }
        else {
            return `a ${text}`
        }
    }

    return `${text}s`
}

const getTimeText = (timeString, number) => `thought of ${getSpecificTimeText(timeString, number)} ago.`

const getTimeMap = (milliseconds) => ({
    year: Math.floor(milliseconds / YEARS_TO_MS),
    month: Math.floor(milliseconds / MONTHS_TO_MS),
    week: Math.floor(milliseconds / WEEKS_TO_MS),
    day: Math.floor(milliseconds / DAYS_TO_MS),
    hour: Math.floor(milliseconds / HOURS_TO_MS),
    minute: Math.floor(milliseconds / MINUTES_TO_MS),
    second: Math.floor(milliseconds / SECONDS_TO_MS),
})

const convertTimestampText = (timestamp) => {

    const nowDate = moment.utc()
    const momentDate = moment(timestamp)
    const diffInMilliseconds = nowDate.diff(momentDate)
    const timeMap = getTimeMap(diffInMilliseconds)

    if(timeMap.year > 0){
        return getTimeText(TIME_TEXT.year, timeMap.year)
    }
    if(timeMap.month > 0){
        return getTimeText(TIME_TEXT.month, timeMap.month)
    }
    if(timeMap.week > 0){
        return getTimeText(TIME_TEXT.week, timeMap.week)
    }
    if(timeMap.day > 0){
        return getTimeText(TIME_TEXT.day, timeMap.day)
    }
    if(timeMap.hour > 0){
        return getTimeText(TIME_TEXT.hour, timeMap.hour)
    }
    if(timeMap.minute > 0){
        return getTimeText(TIME_TEXT.minute, timeMap.minute)
    }

    return getTimeText(TIME_TEXT.second, timestamp.second)
}

export default convertTimestampText

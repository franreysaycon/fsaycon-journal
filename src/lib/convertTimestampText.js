import moment from 'moment'

const TIMESTAMP_TEXT = {
    secondsAgo: "though of seconds ago.",
    minutesAgo: "thought of minutes ago.",
    hoursAgo: "thought of hours ago.",
    daysAgo: "thought of days ago.",
    weeksAgo: "thought of weeks ago.",
    monthsAgo: "thought of months ago.",
    yearsAgo: "thought of years ago."
}

const SECONDS_TO_MS = 1000
const MINUTES_TO_MS = SECONDS_TO_MS * 60
const HOURS_TO_MS = MINUTES_TO_MS * 60
const DAYS_TO_MS = HOURS_TO_MS * 24
const WEEKS_TO_MS = DAYS_TO_MS * 7
const MONTHS_TO_MS = WEEKS_TO_MS * 30
const YEARS_TO_MS = MONTHS_TO_MS * 12

const convertTimestampText = (timestamp) => {

    const nowDate = moment.utc()
    const momentDate = moment(timestamp)

    const diffInMilliseconds = nowDate.diff(momentDate)

    if(Math.floor(diffInMilliseconds / YEARS_TO_MS) > 0){
        return TIMESTAMP_TEXT.yearsAgo
    }
    else if(Math.floor(diffInMilliseconds / MONTHS_TO_MS) > 0){
        return TIMESTAMP_TEXT.monthsAgo
    }
    else if(Math.floor(diffInMilliseconds / WEEKS_TO_MS) > 0){
        return TIMESTAMP_TEXT.weeksAgo
    }
    else if(Math.floor(diffInMilliseconds / DAYS_TO_MS) > 0){
        return TIMESTAMP_TEXT.daysAgo
    }
    else if(Math.floor(diffInMilliseconds / HOURS_TO_MS) > 0){
        return TIMESTAMP_TEXT.hoursAgo
    }
    else if(Math.floor(diffInMilliseconds / MINUTES_TO_MS) > 0){
        return TIMESTAMP_TEXT.minutesAgo
    }

    return TIMESTAMP_TEXT.secondsAgo
}

export default convertTimestampText

import axios from 'axios'
import { useQuery } from 'react-query'
import QUERY_KEYS from '../queryKeys'
import moment from 'moment'

const callEntryApi = async () => {
    const response = await axios.get('https://firestore.googleapis.com/v1/projects/fsaycon-journal/databases/(default)/documents/entries')
    return response.data
}

const sortByDate = (a, b) => {
    return moment(b.createTime).diff(moment(a.createTime))
}

const useGetEntries = () => {
    const query = useQuery(QUERY_KEYS.entry, callEntryApi)
    const data = query?.data ? [...query?.data?.documents].sort(sortByDate) : [] 

    return {
        ...query,
        data,
    }
}

export default useGetEntries

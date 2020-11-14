import axios from 'axios'
import { useQuery } from 'react-query'
import queryKeys from '../queryKeys'

const callEntryApi = async () => {
    const response = await axios.get('https://firestore.googleapis.com/v1/projects/fsaycon-journal/databases/(default)/documents/entries')
    return response.data
}

const useEntryQuery = () => {
    const query = useQuery(queryKeys.entry, callEntryApi)
    return {
        ...query,
        data: query?.data?.documents,
    }
}

export default useEntryQuery

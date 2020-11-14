import axios from 'axios'
import { useMutation, useQueryCache } from 'react-query'
import QUERY_KEYS from '../queryKeys'

const createEntryApi = async (content) => {
    const response = await axios.post('https://firestore.googleapis.com/v1/projects/fsaycon-journal/databases/(default)/documents/entries', {
        fields: {
            content
        }
    })

    return response
}

const useCreateEntry = () => {

    const cache = useQueryCache()
    const [mutate, mutationStatus] = useMutation(createEntryApi, {
        onSuccess: () => {
            cache.invalidateQueries(QUERY_KEYS.entry)
        }
    })

    return {
        createEntry: mutate,
        ...mutationStatus,
    }
}

export default useCreateEntry

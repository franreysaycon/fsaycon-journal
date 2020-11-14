import axios from 'axios'
import { useMutation, useQueryCache } from 'react-query'
import QUERY_KEYS from '../queryKeys'

const deleteEntry = async (firebaseName) => {
    const response = await axios.delete(`https://firestore.googleapis.com/v1/${firebaseName}`)
    return response
}

const useCreateEntry = () => {

    const cache = useQueryCache()
    const [mutate, mutationStatus] = useMutation(deleteEntry, {
        onSuccess: () => {
            cache.invalidateQueries(QUERY_KEYS.entry)
        }
    })

    return {
        deleteEntry: mutate,
        ...mutationStatus,
    }
}

export default useCreateEntry

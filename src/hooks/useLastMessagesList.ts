import useSWR from 'swr'
import { getLastMessages as fetcher } from 'actions/lastMessagesService'

export const useLastMessagesList = () => {
  const { data, error } = useSWR('lastMessages', fetcher)
  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

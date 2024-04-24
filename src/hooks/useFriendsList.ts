import useSWR from 'swr'
import { getNewFriends as fetcher } from 'actions/newFriendsServices'

const useFriendsList = (link: string) => {
  const { data, error } = useSWR(link, fetcher)
  return {
    data,
    error,
    isLoading: !data && !error,
  }
}
export default useFriendsList

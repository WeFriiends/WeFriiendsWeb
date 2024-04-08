import useSWR from 'swr'
import { getNewFriends as fetcher } from 'actions/getNewFriends'

const useFriendsList = () => {
  const { data, error } = useSWR('../data/friendsProfile.json', fetcher)
  return {
    data,
    error,
    isLoading: !data && !error,
  }
}
export default useFriendsList

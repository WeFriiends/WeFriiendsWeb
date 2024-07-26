import GenericCarousel from '../../common/components/Carousel'
import { commonStyles } from 'styles/commonStyles'
import Pagination from 'common/components/Pagination'
import useHandleCarousel from 'hooks/useHandleCarousel'
import NameInput from './NameInput'
import DateOfBirthPicker from './DateOfBirthPicker'
import PrimaryButton from 'common/components/PrimaryButton'
import { getItemsFromLocalStorage } from 'utils/localStorage'
import { createProfile } from 'actions/profile'
import useBearerToken from 'hooks/useBearToken'
import { useNavigate } from 'react-router-dom'
import GenderPick from './GenderPick'
import ArrowBackButton from 'common/components/ArrowBackButton'
import UserLocation from './location/UserLocation'
import { useAuth0 } from '@auth0/auth0-react'
import Status from './Status'

const carouselData = [
  // {
  //   component: <NameInput />,
  //   label: 'nameInput',
  // },
  // {
  //   component: <DateOfBirthPicker />,
  //   label: 'dateOfBirthPicker',
  // },
  // {
  //   component: <GenderPick />,
  //   label: 'genderPick',
  // },
  {
    component: <UserLocation />,
    label: 'userLocation',
  },
  {
    component: <Status />,
    label: 'status',
  },
]
const ProfileCarousel = () => {
  const { classes } = commonStyles()
  const token = useBearerToken()
  const { user } = useAuth0()
  console.log({ user })
  const { activeStep, handleBack, handleNext, handleClickPagination } =
    useHandleCarousel()

  const carouselDataLength = carouselData.length
  const navigate = useNavigate()

  const onSubmit = async () => {
    const { name, dob } = getItemsFromLocalStorage(['name', 'dob'])
    await createProfile({ name, dateOfBirth: dob }, token)
    navigate('/user/friends')
  }
  return (
    <>
      {activeStep > 0 && <ArrowBackButton stepBackHandler={handleBack} />}
      <GenericCarousel
        items={carouselData}
        renderItem={(item) => item.component}
        activeStep={activeStep}
      />

      <Pagination
        key={carouselData.map((c) => c.label)}
        activeStep={activeStep}
        dots={carouselData.length}
        onChangeIndex={handleClickPagination}
      />

      {activeStep < carouselDataLength - 1 && (
        <PrimaryButton onClickHandler={handleNext} label="Next" />
      )}
      {activeStep === carouselDataLength - 1 && (
        <PrimaryButton onClickHandler={onSubmit} label="Submit" />
      )}
    </>
  )
}

export default ProfileCarousel

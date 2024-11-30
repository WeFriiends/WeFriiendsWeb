import React from 'react'
import GenericCarousel from '../../common/components/Carousel'
import Pagination from 'common/components/Pagination'
import useHandleCarousel from 'hooks/useHandleCarousel'
import NameInput from './name/NameInput'
import DateOfBirthPicker from './DateOfBirthPicker'
import PrimaryButton from 'common/components/PrimaryButton'
import { createProfile } from 'actions/profile'
import useBearerToken from 'hooks/useBearToken'
import { useNavigate } from 'react-router-dom'
import GenderPick from './GenderPick'
import ArrowBackButton from 'common/components/ArrowBackButton'
import Status from './Status'
import UserLocation from './location/UserLocation'
import Interests from './interests/Interests'
import UploadPhotos from 'components/firstProfile/uploadPhotos/UploadPhotos'

const carouselData = [
  { component: <NameInput />, label: 'nameInput' },
  { component: <DateOfBirthPicker />, label: 'dateOfBirthPicker' },
  { component: <GenderPick />, label: 'genderPick' },
  { component: <UserLocation />, label: 'userLocation' },
  { component: <Status />, label: 'status' },
  { component: <Interests />, label: 'interests' },
  { component: <UploadPhotos />, label: 'uploadPhotos' },
]

const ProfileCarousel: React.FC = () => {
  const token = useBearerToken()
  const { activeStep, handleBack, handleNext, handleClickPagination } =
    useHandleCarousel()
  const navigate = useNavigate()

  const carouselDataLength = carouselData.length

  const onSubmit = async () => {
    try {
      await createProfile({ token })

      navigate('/user/friends')
    } catch (error) {
      console.error('Profile creation failed:', error)
    }
  }

  return (
    <>
      {activeStep > 0 && <ArrowBackButton stepBackHandler={handleBack} />}
      <GenericCarousel
        items={carouselData}
        renderItem={(item) => item.component}
        activeStep={activeStep}
      />
      {activeStep < carouselDataLength - 1 && (
        <PrimaryButton onClickHandler={handleNext} label="Next" />
      )}
      {activeStep === carouselDataLength - 1 && (
        <PrimaryButton onClickHandler={onSubmit} label="Submit" />
      )}
      <Pagination
        activeStep={activeStep}
        dots={carouselData.length}
        onChangeIndex={handleClickPagination}
      />
    </>
  )
}

export default ProfileCarousel

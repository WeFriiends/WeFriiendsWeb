import GenericCarousel from '../../common/components/Carousel'
import useHandleCarousel from 'hooks/useHandleCarousel'
import NameInput from './name/NameInput'
import DateOfBirthPicker from './DateOfBirthPicker'
import PrimaryButton from 'common/components/PrimaryButton'
import { getItemsFromLocalStorage } from 'utils/localStorage'
import { createProfile } from 'actions/profile'
import useBearerToken from 'hooks/useBearToken'
import { useNavigate } from 'react-router-dom'
import GenderPick from './GenderPick'
import ArrowBackButton from 'common/components/ArrowBackButton'
import Status from './Status'
import UserLocation from './location/UserLocation'
import MobileStepper from '@mui/material/MobileStepper'
import { makeStyles } from 'tss-react/mui'

const carouselData = [
  {
    component: <NameInput />,
    label: 'nameInput',
  },
  {
    component: <DateOfBirthPicker />,
    label: 'dateOfBirthPicker',
  },
  {
    component: <GenderPick />,
    label: 'genderPick',
  },
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
  const { classes } = useStyles()
  const token = useBearerToken()
  const { activeStep, handleBack, handleNext } =
    useHandleCarousel()

  const carouselDataLength = carouselData.length
  const navigate = useNavigate()

  const onSubmit = async () => {
    const {
      name,
      dob,
      gender,
      lat,
      lng,
      country,
      city,
      street,
      houseNumber,
      selectedStatuses,
    } = getItemsFromLocalStorage([
      'name',
      'dob',
      'gender',
      'lat',
      'lng',
      'country',
      'city',
      'street',
      'houseNumber',
      'selectedStatuses',
    ])
    await createProfile(
      {
        name,
        dateOfBirth: dob,
        gender,
        location: { lat, lng, country, city, street, houseNumber },
        reasons: selectedStatuses,
      },
      token
    )
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

      {activeStep < carouselDataLength - 1 && (
        <PrimaryButton onClickHandler={handleNext} label="Next" />
      )}
      {activeStep === carouselDataLength - 1 && (
        <PrimaryButton onClickHandler={onSubmit} label="Submit" />
      )}
      <MobileStepper
        className={classes.stepper}
        variant="dots"
        steps={carouselData.length}
        position="static"
        activeStep={activeStep}
        backButton={<></>}
        nextButton={<></>}
      />
    </>
  )
}

export default ProfileCarousel

const useStyles = makeStyles()((theme) => ({
  stepper: {
    '& .MuiLinearProgress-root': { width: '100%' },
    '& .MuiMobileStepper-dot': {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.palette.primary.main,
      margin: '0 6px',
    },
    '& .MuiMobileStepper-dot.MuiMobileStepper-dotActive': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}))

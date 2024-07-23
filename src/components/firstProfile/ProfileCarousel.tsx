import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
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
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

const carouselData = [
  {
    component: <NameInput />,
    label: 'NameInput',
  },
  {
    component: <DateOfBirthPicker />,
    label: 'DateOfBirthPicker',
  },
]
const ProfileCarousel = () => {
  const { classes } = commonStyles()
  // const token = useBearerToken()
  const { user, getAccessTokenSilently } = useAuth0()
  const { activeStep, handleBack, handleNext, handleClickPagination } =
    useHandleCarousel()

  const carouselDataLength = carouselData.length

  const [token, setToken] = useState('')
  useEffect(() => {
    const getToken = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user',
          },
        })
        setToken(accessToken)
      } catch (e) {
        console.log(e)
      }
    }

    getToken()
  }, [getAccessTokenSilently, user?.sub])

  const onSubmit = async () => {
    const { name, dob } = getItemsFromLocalStorage(['name', 'dob'])
    await createProfile({ name, dateOfBirth: dob }, token)
    console.log({ token })
    const response = await axios.post(
      'http://localhost:8080/api/profile',
      { name, dateOfBirth: dob },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
    console.log({ response })
  }
  return (
    <>
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

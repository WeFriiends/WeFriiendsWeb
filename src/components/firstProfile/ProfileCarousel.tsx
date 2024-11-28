import React from 'react'
import GenericCarousel from '../../common/components/Carousel'
import Pagination from 'common/components/Pagination'
import useHandleCarousel from 'hooks/useHandleCarousel'
import NameInput from './name/NameInput'
import DateOfBirthPicker from './DateOfBirthPicker'
import PrimaryButton from 'common/components/PrimaryButton'
import {
  getItemsFromLocalStorage,
  getItemFromLocalStorage,
} from 'utils/localStorage'
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

function base64ToBlob(base64: string, mimeType: string): Blob {
  const byteCharacters = atob(base64) // Декодируем Base64 в байтовые символы
  const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0)) // Создаем массив кодов символов
  const byteArray = new Uint8Array(byteNumbers) // Преобразуем массив в Uint8Array
  return new Blob([byteArray], { type: mimeType }) // Создаем Blob
}

const ProfileCarousel: React.FC = () => {
  const token = useBearerToken()
  const { activeStep, handleBack, handleNext, handleClickPagination } =
    useHandleCarousel()
  const navigate = useNavigate()

  const carouselDataLength = carouselData.length

  const onSubmit = async () => {
    // Проверяем, если window.choosenFiles определен
    /*if (!window.choosenFiles || window.choosenFiles.length === 0) {
      console.error('No files selected for upload')
      return
    }*/
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
      userPreferences,
      userPicsStorage: photos,
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
      'userPreferences',
      'userPicsStorage',
    ])
    const formData = new FormData()

    formData.append('name', name)
    formData.append('dateOfBirth', dob)
    formData.append('gender', gender)
    //location: { lat, lng, country, city, street, houseNumber }
    /* reasons: selectedStatuses,
          preferences: userPreferences,*/
    formData.append(
      'location',
      JSON.stringify({ lat, lng, country, city, street, houseNumber })
    )
    formData.append('reasons', JSON.stringify(selectedStatuses))
    formData.append('preferences', JSON.stringify(userPreferences))

    interface ChoosenFile {
      id: string
      url: string
      fileName: string
    }
    const choosenFiles: ChoosenFile[] = getItemFromLocalStorage(
      'userPicsStorage'
    ).filter((cf: ChoosenFile) => cf.url)
    // Добавляем файлы в FormData
    /*window.choosenFiles.forEach((file: File, index: number) => {
      formData.append(`file${index}`, file)
    })*/
    console.log(choosenFiles)
    choosenFiles.forEach((cf, index) => {
      const fileBase64 = cf.url
      console.log(fileBase64)
      // fileBase64 предполагается в формате "data:<mimeType>;base64,<data>"
      const [header, base64Data] = fileBase64.split(',')
      const [, mimeType] = header.match(/:(.*?);/) || [] // Извлекаем MIME-тип
      const blob = base64ToBlob(base64Data, mimeType)
      formData.append(`file${index}`, blob, cf.fileName)
    })

    try {
      const response = await fetch('http://localhost:8080/api/profile', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`, // Пример авторизации
        },
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      const result = await response.json()
      console.log('Upload successful:', result)

      // Сохраняем профиль после успешной загрузки

      /*await createProfile(
        {
          name,
          dateOfBirth: dob,
          gender,
          location: { lat, lng, country, city, street, houseNumber },
          reasons: selectedStatuses,
          preferences: userPreferences,
          photos,
        },
        token
      )*/

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

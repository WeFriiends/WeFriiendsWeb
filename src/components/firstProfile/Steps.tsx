import React, { ChangeEvent, useEffect, useState } from 'react'
import GetName from './steps/GetName'
import GetDateOfBirth from './steps/GetDateOfBirth'
import GetGender from './steps/GetGender'
import GetPurpose from './steps/GetPurpose'

interface StepsProps {
  activeStep: number
  setNextDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const Steps: React.FC<StepsProps> = ({ activeStep, setNextDisabled }) => {
  const [name, setName] = useState<string>('')
  const [dob, setDob] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [lookingFor, setLookingFor] = useState<string>('')
  const [maleHovered, setMaleHovered] = useState<boolean>(false)
  const [femaleHovered, setFemaleHovered] = useState<boolean>(false)
  const [maleClicked, setMaleClicked] = useState<boolean>(false)
  const [femaleClicked, setFemaleClicked] = useState<boolean>(false)
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    setNextDisabled(false)
  }
  const handleDobChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDob(event.target.value)
    setNextDisabled(false)
  }
  const handleGenderChange = (selectedGender: string) => {
    setGender(selectedGender)
    if (selectedGender === 'male') {
      setMaleClicked(true)
      setFemaleClicked(false)
    } else {
      setFemaleClicked(true)
      setMaleClicked(false)
    }
    setNextDisabled(false)
  }
  const handleLookingForChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLookingFor(event.target.value)
    setNextDisabled(false)
  }
  useEffect(() => {
    const storedName = localStorage.getItem('name')
    const storedDob = localStorage.getItem('dob')
    const storedGender = localStorage.getItem('gender')
    const storedPurpose = localStorage.getItem('lookingFor')

    if (storedName) setName(storedName)
    if (storedDob) setDob(storedDob)
    if (storedGender) setGender(storedGender)
    if (storedPurpose) setLookingFor(storedPurpose)
  }, [])

  useEffect(() => {
    localStorage.setItem('name', name)
    localStorage.setItem('dob', dob)
    localStorage.setItem('gender', gender)
    localStorage.setItem('lookingFor', lookingFor)
  }, [name, dob, gender, lookingFor])
  return (
    <>
      {activeStep === 0 && (
        <GetName name={name} handleNameChange={handleNameChange} />
      )}

      {activeStep === 1 && (
        <GetDateOfBirth dob={dob} handleDobChange={handleDobChange} />
      )}
      {activeStep === 2 && (
        <GetGender
          handleGenderChange={handleGenderChange}
          maleHovered={maleHovered}
          femaleHovered={femaleHovered}
          setMaleHovered={setMaleHovered}
          setFemaleHovered={setFemaleHovered}
          maleClicked={maleClicked}
          femaleClicked={femaleClicked}
        />
      )}
      {activeStep === 3 && (
        <GetPurpose
          lookingFor={lookingFor}
          handleLookingForChange={handleLookingForChange}
        />
      )}
    </>
  )
}

export default Steps

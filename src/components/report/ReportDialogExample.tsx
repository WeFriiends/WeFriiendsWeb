import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { CommonModal } from '../commonModal/CommonModal'
import ReportAction from './ReportAction'
import UserIsBlocked from './UserIsBlocked'
import ReportForm from './ReportForm'
import ReportReceived from './ReportReceived'

const ReportDialogExample = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleClose = () => {
    setIsModalVisible(false)
    setCurrentView('chooseAction')
  }

  const [currentView, setCurrentView] = useState('chooseAction')
  const [modalHeight, setModalHeight] = useState<370 | 320 | 605 | undefined>(
    320
  )

  const handleOpenReportDialog = () => {
    setIsModalVisible(true)
  }

  useEffect(() => {
    // Update modal height based on the current view
    const viewHeights: { [key: string]: 370 | 320 | 605 | undefined } = {
      chooseAction: 320,
      userIsBlocked: 320,
      reportForm: undefined,
      reportReceived: 370,
    }
    setModalHeight(viewHeights[currentView])
  }, [currentView])

  return (
    <>
      <Button onClick={handleOpenReportDialog} variant="text" disableRipple>
        Report user?
      </Button>
      <CommonModal
        isOpened={isModalVisible}
        modalTitle={'Report User'}
        modalDescription={'Choose an action to report or block the user.'}
        onClose={handleClose}
        height={modalHeight}
      >
        {currentView === 'chooseAction' && (
          <ReportAction
            chooseBlock={() => setCurrentView('userIsBlocked')}
            chooseReport={() => setCurrentView('reportForm')}
          />
        )}
        {currentView === 'userIsBlocked' && (
          <UserIsBlocked closeModal={() => handleClose()} />
        )}
        {currentView === 'reportForm' && (
          <ReportForm
            sendReport={() => setCurrentView('reportReceived')}
            goBack={() => setCurrentView('chooseAction')}
          />
        )}
        {currentView === 'reportReceived' && (
          <ReportReceived closeModal={() => handleClose()} />
        )}
      </CommonModal>
    </>
  )
}

export default ReportDialogExample

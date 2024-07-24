import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextareaAutosize,
  Button,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import { useNavigate } from 'react-router'
import { CommonModal } from '../commonModal/CommonModal'
import React, { useState } from 'react'
import ReportInputRadio from './ReportInputRadio'

const ReportForm = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  const [comment, setComment] = useState('')

  const handleSendReport = () => {
    // TODO: Add API and code for sending a report
    navigate('/report/report-received')
  }

  const reportReasons = [
    { text: 'Spam', value: 'spam' },
    { text: 'Abuse', value: 'abuse' },
    {
      text: 'Inappropriate photos',
      value: 'inappropriate-photos',
    },
    { text: 'Other', value: 'other' },
  ]

  return (
    <CommonModal
      isOpened={true}
      modalTitle={'modal-modal-title'}
      modalDescription={'modal-modal-description'}
      onClose={handleGoBack}
    >
      <Box className={classes.reportContainer}>
        <img
          src="/img/report/icon-alert.svg"
          alt="Alert circle"
          className={classes.imgAlert}
        />
        <Box>
          <Typography variant="h2" className={classes.title}>
            Report
          </Typography>
          <Typography className={classes.content}>
            Select the reason for the complaint – <br /> we will definitely take
            action
          </Typography>
        </Box>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="spam"
            name="radio-buttons-group"
          >
            {reportReasons.map((reason) => (
              <FormControlLabel
                key={reason.value}
                value={reason.value}
                control={<ReportInputRadio />}
                label={reason.text}
                className={classes.formControlLabel}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Typography className={classes.comment}>
          Also you can leave a comment. <br />
          We will better understand what has happened.
        </Typography>
        <TextareaAutosize
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={classes.textarea}
        />
        <Box className={classes.groupBtn}>
          <Button
            className={classes.button}
            disableFocusRipple
            disableRipple
            onClick={handleGoBack}
          >
            cancel
          </Button>
          <Button
            className={classes.button}
            disableFocusRipple
            disableRipple
            onClick={handleSendReport}
          >
            send
          </Button>
        </Box>
      </Box>
    </CommonModal>
  )
}

export default ReportForm

const useStyles = makeStyles()({
  reportContainer: {
    display: 'grid',
  },
  title: {
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  content: {
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 25,
    color: theme.palette.common.black,
    lineHeight: 1.3,
  },
  imgAlert: {
    margin: '0 auto',
  },
  formControlLabel: {
    '& .MuiTypography-root.MuiFormControlLabel-label': { fontSize: 14 },
  },
  textarea: {
    width: '100%',
    height: '100%',
    minHeight: '115px',
    flexShrink: 0,
    borderRadius: '10px',
    background: theme.palette.common.white,
    boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
    border: '1px solid #eee',
    fontFamily: 'inherit',
    padding: 10,
    '&:focus': {
      outline: 'none',
    },
  },
  comment: {
    fontSize: 14,
    lineHeight: 1.2,
    textAlign: 'left',
    margin: '30px 0 10px',
  },
  groupBtn: {
    display: 'flex',
    gap: 15,
    justifyContent: 'center',
    margin: '20px 0 5px',
  },
  button: {
    borderRadius: 10,
    fontSize: 12,
    width: 124,
    height: 38,
    textDecoration: 'none',
    textTransform: 'none',
    fontWeight: 500,
    boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.14)',
    color: theme.palette.primary.main,
    border: '1px solid ' + theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
})

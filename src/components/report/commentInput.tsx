import React, { useState } from 'react'
import { Box, Typography, Button, TextareaAutosize } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useNavigate } from 'react-router-dom'
import theme from '../../styles/createTheme'

const CommentInput = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const [comment, setComment] = useState('')

  const handleCancel = () => {
    navigate('/')
    // код для обработки отмены
  }

  const handleSend = () => {
    // код для обработки отправки комментария
    // Переход на страницу reportReceived
    navigate('/reportReceived')
  }

  return (
    <Box className={classes.mainBox}>
      <Typography className={classes.comment}>
        Please, leave a comment. We will better understand what has happened.
      </Typography>
      <TextareaAutosize
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={classes.textarea}
      />
      <Box className={classes.groupBtn}>
        <Button
          className={`${classes.button} ${classes.laterButton}`}
          onClick={handleCancel}
          disableFocusRipple
          disableRipple
        >
          cancel
        </Button>
        <Button
          className={`${classes.button} ${classes.sendButton}`}
          onClick={handleSend}
          disableFocusRipple
          disableRipple
        >
          send
        </Button>
      </Box>
    </Box>
  )
}

export default CommentInput

const useStyles = makeStyles()(() => {
  return {
    mainBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    groupBtn: {
      display: 'flex',
      gap: 15,
      justifyContent: 'center',
      margin: '35px 0 25px',
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
      boxSizing: 'border-box',
      '&:focus': {
        outline: 'none',
      },
    },
    comment: {
      fontSize: 14,
      textAlign: 'left',
      margin: '30px 0 10px',
    },
    button: {
      borderRadius: 10,
      fontSize: 12,
      width: 124,
      height: 38,
      textDecoration: 'none',
      textTransform: 'none',
      fontWeight: 700,
      boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.14)',
      color: theme.palette.primary.main,
      border: '1px solid ' + theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
    laterButton: {
      fontWeight: 500,
    },
    sendButton: {
      fontWeight: 600,
    },
  }
})

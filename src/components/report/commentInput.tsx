import React, { useState } from 'react'
import { Box, Typography, Button, TextareaAutosize } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useNavigate } from 'react-router-dom'

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
          variant="outlined"
          className={classes.dialogBtn}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          className={classes.dialogBtn}
          onClick={handleSend}
        >
          Send
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
      width: '90%',
      margin: '70px auto',
    },
    textarea: {
      width: '100%',
      height: '100%',
      minHeight: '135px',
      flexShrink: 0,
      borderRadius: '10px',
      background: '#FFF',
      boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
      border: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
    dialogBtn: {
      border: '1px solid #FB8F67',
      marginBottom: 8,
      boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
      height: 38,
      lineHeight: '36px',
      borderRadius: 10,
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'none',
      width: '40%',
      color: 'var(--red, #F1562A)',
      '&:active, &:hover': {
        border: 'none',
        backgroundColor: '#FB8F67',
        transition: 'background-color 0.5s',
        color: '#fff',
      },
    },
    comment: {
      paddingBottom: 15,
      fontSize: 14,
      textAlign: 'center',
    },
  }
})

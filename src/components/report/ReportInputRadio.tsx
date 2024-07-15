import * as React from 'react'
import Radio, { RadioProps } from '@mui/material/Radio'
import { makeStyles } from 'tss-react/mui'

export default function ReportInputRadio(props: RadioProps) {
  const { classes } = useStyles()
  return (
    <Radio
      disableRipple
      className={classes.inputRadioWrapper}
      checkedIcon={
        <span
          className={`${classes.inputRadioChecked} ${classes.inputRadio}`}
        />
      }
      icon={<span className={classes.inputRadio} />}
      {...props}
    />
  )
}

const useStyles = makeStyles()({
  inputRadioWrapper: {
    padding: '4px 10px',
  },
  inputRadio: {
    borderRadius: '50%',
    width: 20,
    height: 20,
    backgroundColor: '#C5C5C5',
    '& input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(197,197,197,0.5)',
    },
  },
  inputRadioChecked: {
    '&::before': {
      display: 'flex',
      width: 20,
      height: 20,
      backgroundImage: 'radial-gradient(#166c70,#166c70 40%,transparent 45%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#C5C5C5',
    },
  },
})

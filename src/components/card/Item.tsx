import React from 'react'

import { makeStyles } from 'tss-react/mui'

const Item = (props: { item: { src: string } }) => {
  const { classes } = useStyles()
  return <img src={props.item.src} alt="card" className={classes.foto} />
}

export default Item

const useStyles = makeStyles()(() => {
  return {
    foto: {
      width: '100%',
      height: '51vh',
      objectFit: 'cover',
    },
  }
})

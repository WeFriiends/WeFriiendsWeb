import React from 'react'
import { Box, Typography } from '@mui/material'
import { commonStyles } from './CommonStyles'

type PageCompProps = {
  toShow?: boolean
  contentASObj?: {
    path?: string
    alt?: string
  }
  textArr?: any[]
  content?: string
  heading1?: string
  heading2?: string
  goForward?: () => void
}
const PageComponent: React.FC<PageCompProps> = ({
  contentASObj,
  textArr,
  content,
}) => {
  const { classes } = commonStyles()

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="460px"
    >
      {/* third element */}
      {content && (
        <Box>
          {contentASObj?.path && (
            <img
              src={`/img/${contentASObj?.path}.svg`}
              alt={contentASObj?.alt}
              className={classes.img}
            />
          )}
        </Box>
      )}
      {/* first and third elements */}
      <Typography sx={{ margin: '6rem' }} className={classes.text}>
        {content}
      </Typography>

      {/* Spots and texts */}
      {textArr &&
        textArr.map((t, i) => (
          <Box
            key={i}
            className={`item${i + 1}`}
            display="flex"
            flexDirection="row"
            sx={{ position: 'relative', left: i % 2 === 0 ? '10%' : '30%' }}
          >
            <img
              src={`/img/${contentASObj?.path}${i + 1}.svg`}
              alt={`${contentASObj?.alt} ${i + 1}`}
            />
            <Typography
              className={classes.text}
              sx={{
                position: 'absolute',
                top: '10%',
                left: '30px',
                padding: '15px',
              }}
            >
              {t.line}
            </Typography>
          </Box>
        ))}
    </Box>
  )
}
export default PageComponent

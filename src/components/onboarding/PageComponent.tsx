import React from 'react'
import { Box, Typography, IconButton, Button } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from './CommonStyles'

type PageCompProps = {
  isFirst?: boolean
  url?: string
  isStart?: boolean
  isNext?: boolean
  multiLine?: boolean
  contentASObj?: {
    // it can be object of only strings or image attributs
    line?: string
    path?: string
    alt?: string
  }

  textArr?: any[]
  content?: string
  contents?: JSX.Element[]
  heading1?: string
  heading2?: string
  withButton?: boolean
  goBack?: () => void
  goForward?: () => void
}
const PageComponent: React.FC<PageCompProps> = ({
  contentASObj,
  textArr,
  content,
  isFirst,
  heading1,
  heading2,
  goBack,
  goForward,
}) => {
  const { classes } = commonStyles()

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      {/* Header of the page. TODO fix condition to toShow */}
      {heading1 && (
        <Typography variant="h3" className="heading">
          {heading1}
        </Typography>
      )}
      <Logo />
      {heading2 && <Typography variant="h4">{heading2}</Typography>}

      {/* body of page. TODO fix condition to toShow */}

      {/* First page */}
      {isFirst && (
        <>
          <Typography sx={{ margin: '6rem' }} className={classes.text}>
            {content}
          </Typography>
          <Button
            sx={{ padding: '0 3rem' }}
            onClick={goForward}
            className={`${classes.linkBtnSecondary} `}
          >
            start
          </Button>
        </>
      )}
      {/* Next pages */}
      {goBack && (
        <IconButton
          className={`${classes.iconButton} ${classes.content}`}
          onClick={goBack}
        >
          <img src="/img/back.svg" alt="back" />
        </IconButton>
      )}

      {content && (
        <Box>
          {contentASObj?.path && (
            <img
              src={`/img/${contentASObj?.path}.svg`}
              alt={contentASObj?.alt}
              className={classes.img}
            />
          )}
          {contentASObj && (
            <Typography className={classes.text}>{content}</Typography>
          )}
        </Box>
      )}

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

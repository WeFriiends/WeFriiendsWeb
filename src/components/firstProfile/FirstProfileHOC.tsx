import { useEffect, useState } from 'react'

const FirstProfileComponentHOC = (
  BaseComponent: any,
  header: string,
  profileQuestion: string
) => {
  return function EnhancedComponent(props: any) {
    return (
      <>
        <h1>{header}</h1>
        <p>{profileQuestion}</p>
        <BaseComponent />
      </>
    )
  }
}

export default FirstProfileComponentHOC

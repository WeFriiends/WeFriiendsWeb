import { useState } from 'react'

// would be nice to refactor this hook - img should be in the component and not in the hook
const useTogglePasswordType = () => {
  const [visible, setVisibility] = useState(false)

  const icon = (
    <img
      src={visible ? '/img/eye.svg' : '/img/eye-hide.svg'}
      alt=""
      onClick={() => {
        setVisibility((visibility) => !visibility)
      }}
    />
  )
  const inputType = visible ? 'text' : 'password'
  return [inputType, icon]
}

export default useTogglePasswordType

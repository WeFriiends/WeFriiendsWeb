import React from 'react'
import { RenderIconProps } from '../common/types/navigationTypes'

const RenderIcon: React.FC<RenderIconProps> = ({
  isActive,
  imagePath,
  alt,
  width,
  height,
}) => (
  <img
    src={isActive ? `${imagePath}_red.svg` : `${imagePath}.svg`}
    alt={alt}
    width={width}
    height={height}
  />
)

export default RenderIcon

import React from 'react'

interface RenderIconProps {
  isActive: boolean
  imagePath: string
  alt: string
  width: number
  height: number
}

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
    style={{ filter: isActive ? 'brightness(1.2)' : 'brightness(1)' }}
  />
)

export default RenderIcon

// GridItem.tsx
import React from 'react'

interface GridItemProps{
    src: string;
}

const GridItem: React.FC<GridItemProps> = ({ src }) => {
  return (
    <img src={"./" + src + ".jpg"} alt={src} loading='lazy' style={{ width: '100%', height: 'auto', maxHeight: '280px' }} className='border border-dark rounded mt-2'/>
  )
}

export default GridItem;

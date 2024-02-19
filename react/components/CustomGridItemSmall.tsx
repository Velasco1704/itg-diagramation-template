import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

interface Props {
  elementOne: React.ReactNode
  elementTwo: React.ReactNode
}

const CustomGridItemSmall = ({ elementOne, elementTwo }: Props) => {
  const cssHandles = ['grid__item--small']
  const handles = useCssHandles(cssHandles)

  return (
    <div className={handles['grid__item--small']}>
      {elementOne}
      {elementTwo}
    </div>
  )
}

export default CustomGridItemSmall

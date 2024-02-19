import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

interface Props {
  element: React.ReactNode
}

const CustomGridItemBig = ({ element }: Props) => {
  const cssHandles = ['grid__item--big']
  const handles = useCssHandles(cssHandles)

  return <div className={handles['grid__item--big']}>{element}</div>
}

export default CustomGridItemBig

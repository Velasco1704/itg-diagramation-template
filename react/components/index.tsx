import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { customGridSchema } from '../schemas/custom-gird-schemas'
import CustomGridItemBig from './CustomGridItemBig'
import CustomGridItemSmall from './CustomGridItemSmall'
import './styles.css'

interface Props {
  children: React.ReactNode[]
  gridType: number
}

const CustomGrid = ({ children, gridType = 1 }: Props) => {
  const cssHandles = ['grid', `grid--${gridType}`]
  const handles = useCssHandles(cssHandles)
  const gridTypeClass = Object.keys(handles)[1] as string

  return (
    <div className={`${handles.grid} ${handles[gridTypeClass]}`}>
      <CustomGridItemBig element={children[0]} />
      <CustomGridItemSmall elementOne={children[1]} elementTwo={children[2]} />
      <CustomGridItemSmall elementOne={children[3]} elementTwo={children[4]} />
    </div>
  )
}

CustomGrid.schema = customGridSchema

export default CustomGrid

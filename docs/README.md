# Diagramation Templete

Este componente se encarga de crear una grilla interactiva que cambie el orden y recibirá componentes hijos

## Instalación

### 1. Clonar repositorio

Copia el [repositorio](https://github.com/Velasco1704/itg-diagramation-template/) del proyecto y clonarlo en tu terminal.

```bash
git clone https://github.com/Velasco1704/itg-diagramation-template/
```

### 2. Acceder a la Carpeta del Proyecto

Después de clonar el repositorio, entra a la carpeta del proyecto utilizando el siguiente comando:

```bash
cd itg-diagramation-template
```

### 3. Instalar dependencias de la carpeta react

Entra a la carpeta de react y instala las dependencias.

```bash
cd react && yarn
```

> [!NOTE]
> No uses npm y yarn al mismo tiempo esto va a causar conflictos

### 4. Iniciar Sesión en VTEX

Para poder trabajar con VTEX, necesitas iniciar sesión con tu cuenta. Utiliza el siguiente comando y reemplaza {account} con tu nombre de cuenta de VTEX:

```bash
vtex login { account }
```

### 5. Seleccionar el Espacio de Trabajo

Una vez que hayas iniciado sesión, selecciona el espacio de trabajo en el que deseas trabajar utilizando el siguiente comando. Reemplaza {workspace} con el nombre de tu espacio de trabajo:

```bash
vtex use { workspace }
```

### 6. Enlazar el Proyecto al Espacio de Trabajo

Finalmente, enlaza el proyecto a tu espacio de trabajo para visualizarlo ejecutando el siguiente comando:

```bash
vtex link
```

### 7. Agrega el componente

Agrega el componente en el `manifest.json` de tu **store theme**

```JSON
"dependencies": {
   "{accountName}.{appName}": "{appVersion}",
    "vtex.store": "2.x",
    "vtex.store-header": "2.x"
}
```

## Descripción general del proyecto y su uso

### Componentes

El código consta de tres componentes principales: `CustomGrid`, `CustomGridItemSmall` y `CustomGridItemBig`.

#### CustomGrid

El componente CustomGrid es un componente que renderiza un diseño de cuadrícula personalizado. Acepta dos propiedades: `children` y `gridType`. La propiedad `children` es un array de nodos de React, y la propiedad `gridType` es un número que determina el tipo de diseño de cuadrícula a renderizar.

```tsx
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
```

La variable `gridTypeClass` se utiliza en el componente CustomGrid para obtener la clase CSS correspondiente al tipo de grilla seleccionado. Esta variable se crea utilizando el método `Object.keys(handles)[1]` para obtener la segunda clave del objeto handles como una cadena.

El esquema de la grilla personalizada se define en el objeto `customGridSchema`. Este objeto define las propiedades del componente `CustomGrid` que se pueden configurar en site editor.

```ts
export const customGridSchema = {
  title: 'Grilla Custom',
  type: 'object',
  properties: {
    gridType: {
      title: 'Tipo de Grilla',
      type: 'number',
      enum: [1, 2, 3],
    },
  },
}
```

#### CustomGridItemSmall

El componente `CustomGridItemSmall` es un componente secundario de la grilla personalizada. Toma dos propiedades: `elementOne` y `elementTwo`, que son elementos React que se mostrarán dentro del componente.

```tsx
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
```

#### CustomGridItemBig

El componente `CustomGridItemBig` es otro componente secundario de la grilla personalizada. Toma una propiedad llamada `element`, que es un elemento React que se mostrará dentro del componente.

```tsx
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
```

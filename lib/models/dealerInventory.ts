import { ResponsiveImageType } from 'react-datocms'
import { CMSType } from './cms'

export interface DealerCategory extends CMSType {
  name?: string
  slug?: string
}

export interface Vehicle extends CMSType {
  name?: string
  slug?: string
  category?: DealerCategory
  images?: {
    responsiveImage?: ResponsiveImageType
  }[]
  vehicleStatus?: string
  brand?: string
  year?: number
  price?: number
}

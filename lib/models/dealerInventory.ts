import { CMSType, ResponsiveImage } from './cms'

export interface DealerCategory extends CMSType {
  name?: string
  slug?: string
}

export interface Vehicle extends CMSType {
  name?: string
  slug?: string
  category?: DealerCategory
  images?: ResponsiveImage[]
  imagesHd?: ResponsiveImage[]
  vehicleStatus?: string
  brand?: string
  year?: number
  price?: number
  description?: string
}

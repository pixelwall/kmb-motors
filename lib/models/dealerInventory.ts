import { CMSType, ResponsiveImage, Color } from './cms'

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
  make?: string
  year?: number
  price?: number
  description?: string
  milage?: number
  model?: string
  vin?: string
  transmission?: string
  color?: Color
}

import { ResponsiveImageType } from 'react-datocms'

export interface DealerCategory {
  name?: string
  slug?: string
}

export interface Vehicle {
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

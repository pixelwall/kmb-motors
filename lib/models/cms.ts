import { ResponsiveImageType } from 'react-datocms'

export interface CMSType {
  createdAt?: string
  updatedAt?: string
}

export interface ResponsiveImage {
  responsiveImage?: ResponsiveImageType
}

export interface Color {
  hex?: string
  red?: number
  blue?: number
  green?: number
  alpha?: number
}

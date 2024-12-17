export type MediaSize = 'card' | 'thumbnail' | 'square';

type SizeDetails = {
  filename: string
  width: number
  height: number
}

type ImageSizesType = {
  card?: SizeDetails
  thumbnail?: SizeDetails
  square?: SizeDetails
}

export type ImageSizeKeys = keyof ImageSizesType;

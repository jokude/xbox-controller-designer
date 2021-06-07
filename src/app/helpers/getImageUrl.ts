const baseUrl = `${BASE_PATH}assets/images/`;

export const getImageUrl = (imageName: string, extension = 'png'): string =>
  `${baseUrl}${imageName.toLocaleLowerCase().replace(/\s/g, '-')}.${extension}`;

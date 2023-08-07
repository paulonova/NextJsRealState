export const getTextAlign = (textAlign = 'left') => {
  const textAlignMap = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
  }

  return `${textAlignMap[textAlign] || ''}`
}

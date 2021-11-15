interface IColor {
  default: string,
  primary: string,
  warning: string,
  info: string,
  danger: string
}

const getColor = (type: keyof IColor): string => {
  const colors: IColor = {
    default: '',
    primary: '#1e80ff',
    warning: 'orange',
    info: '#42b983',
    danger: 'tomato'
  }

  return colors[type]
}

export {
  IColor,
  getColor
}
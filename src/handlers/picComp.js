import getAttriStr from '../utils'
const handle = (attr, dataStr) => {
  let attribute = [{
    key: 'width',
    name: '宽度',
    value: '180',
    type: 'input',
    placeholder: '请输入宽度'
  }, {
    key: 'height',
    name: '高度',
    value: '400',
    type: 'input',
    placeholder: '请输入高度'
  }]
  if (attr) {
    attribute = attr
  }

  let data = {
    filename: 'bg01.jpg'
  }
  if (dataStr) {
    data = JSON.parse(dataStr)
  }
  const template = `<picComp ${getAttriStr(attribute)} data='${JSON.stringify(data)}'></picComp>`
  return {
    attribute,
    data,
    template
  }
}
export default handle

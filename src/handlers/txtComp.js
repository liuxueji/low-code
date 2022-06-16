import getAttriStr from '../utils'
const handle = (compStyle, dataStr) => {
  let attribute = [{
    key: 'width',
    name: '宽度',
    value: '150',
    type: 'input',
    placeholder: '请输入宽度'
  }, {
    key: 'height',
    name: '高度',
    value: '40',
    type: 'input',
    placeholder: '请输入高度'
  }, {
    key: 'color',
    name: '文本颜色',
    value: '#ffc300',
    type: 'color',
    placeholder: '请选择颜色'
  }, {
    key: 'fontSize',
    name: '字体大小',
    value: '24',
    type: 'input',
    placeholder: '请输入字体大小'
  }]
  if (compStyle) {
    attribute = compStyle
  }
  let data = {
    txt: 'HelloWord!'
  }
  if (dataStr) {
    data = JSON.parse(dataStr)
    console.log(JSON.parse(dataStr))
  }
  const template = `<txtComp ${getAttriStr(attribute)} data=${data.txt}></txtComp>`
  return {
    attribute,
    data,
    template
  }
}
export default handle

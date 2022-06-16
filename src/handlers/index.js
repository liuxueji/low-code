import txtComp from './txtComp.js'
import picComp from './picComp.js'
const obj = {
  txtComp,
  picComp
}
const getComponent = (info, compStyle, dataStr) => {
  const component = obj[info.type](compStyle, dataStr)
  component.info = info
  return component
}
export default getComponent

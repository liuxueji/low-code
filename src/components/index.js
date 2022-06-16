import txtComp from './txtComp'
import picComp from './picComp'

const obj = {
  txtComp,
  picComp
}

function install(vue) {
  Object.keys(obj).forEach(key => {
    vue.component(key, obj[key])
  })
}

const API = {
  version: '1.0.0',
  install
}

export default API

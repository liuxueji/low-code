const compList = [{
    name: '文本组件',
    type: 'textComp',
    width: {
      name: '宽度',
      value: '150px',
      type: 'input',
      placeholder: '请输入宽度'
    },
    height: {
      name: '高度',
      value: '100px',
      type: 'input',
      placeholder: '请输入高度'
    },
    color: {
      name: '文本颜色',
      value: '#ffc300',
      type: 'color',
      placeholder: '请选择颜色'
    },
    fontSize: {
      name: '字体大小',
      value: '24',
      type: 'input',
      placeholder: '请输入字体大小'
    },
    data: 'helloWorld!'
  },
  {
    name: '图片组件',
    type: 'imgComp',
    width: {
      name: '宽度',
      value: '180px',
      type: 'input',
      placeholder: '请输入宽度'
    },
    height: {
      name: '高度',
      value: '400px',
      type: 'input',
      placeholder: '请输入高度'
    }
  },
  {
    name: '按钮组件',
    type: 'btnComp',
    width: {
      name: '宽度',
      value: '70px',
      type: 'input',
      placeholder: '请输入宽度'
    },
    height: {
      name: '高度',
      value: '40px',
      type: 'input',
      placeholder: '请输入高度'
    }
  },
  {
    name: '输入框组件',
    type: 'inputComp',
    width: {
      name: '宽度',
      value: '300px',
      type: 'input',
      placeholder: '请输入宽度'
    },
    height: {
      name: '高度',
      value: '40px',
      type: 'input',
      placeholder: '请输入高度'
    }
  }
]

export default compList
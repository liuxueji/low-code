## 菜单栏拖拽到画布实现

- 组件列表：被拖拽组件添加 draggable="true" 后，组件可以进行拖拽
- 画布区域：添加@dragover，设置禁止默认样式，不然拖拽不能实现；添加@drop，该方法用户触发拖拽到画布区域释放的事件

难点主要在画布区域，需要设置数组，将组件的信息进行存储，通过 v-for 进行输出，并为每一项设置一个唯一的 id，再将偏移量存储到数组中，通过动态样式即可拖拽生成组件

## 拖拽后生成对于信息

- 组件列表：被拖拽组件需要通过 v-for 循环输出，给定一个数组，将组件的类型、名称存储到数组中，通过 mousedown 将组件名传给画布渲染（同级传输），传输方法是：将组件名设置为方法参数，在方法中接收组件名，并赋值给组件内的全局变量（不渲染到页面的数据尽量不要存储到 data 中），画布的渲染列表中进行添加 name 即可，参考添加偏移量
- 画布区域：接收组件内的偏移量、组件名，通过渲染即可

## 画布中点击组件，生成激活框

- 做了优化，原本点击按钮文字是选中不到组件的，现在点击组件按钮可以选中组件了，优化原理：在找组件的时候添加了循环，原本只找当前节点和父节点，现在是往上找十层

## 组件位置拖拽

> 之前写悬浮球组件时用过这种功能，鼠标按下时，组件跟着鼠标移动，松开时，组件位置固定。但是悬浮球时，元素是唯一的，这里的组件是动态生成的，尝试了很多方法

- 当鼠标点击时，获取元素的初始位置，存储下来
- 当鼠标移动时，可以判断 e.which 是否等于 1，来确定鼠标是否按下移动；移动时，需要获取偏移量，通过`当前位置 - 初始位置`，再通过对象方法 assign（就是浅拷贝），将`当前元素位置+偏移量` 赋值给组件的 left、top；激活边框实现原理也相同。

## 修改数据结构

> 因为右侧编辑区需要获取到组件的信息，之前组件的宽度和高度直接是键值对形式，现在把它变成一个对象，在右侧编辑区比较好操作

- 将组件中的数据进行整合，由键值对变为键值对，且值为一个对象；例如文本组件中的 `width:{value:100px,type:input,placeholder:'宽度'}`，变成这样的形式

## 右侧编辑区

> 这里实现的有很多问题，我希望是在编辑区改变数据后，画布中的组件也同时改变，但是实现出来后，是在编辑区修改数据，需要在画布中点击一下组件才会修改数据，具体实现方案还没有想好，后续再做优化

- 右侧编辑区的切换栏，是通过 checkIndex 来判断是等于 0，还是等于 1，然后再通过 v-if 进行渲染
- 数据渲染，原本数据结构比较简单，后来通过将数据整合，为每个属性添加 type 属性，数据渲染时只需要通过判断每一项的 type，根据 type 进行输出
- 数据响应式，当我们修改右侧数据时，画布中组件的数据也要相应的进行响应式修改，这里我通过 watch 进行监听，如果数据修改了，就将组件内容派发到对于组件中，然后在组件中进行监听，将最新的值渲染到数据中

## 新增组件

> 新增组件的话只要把结构搭好，然后直接添加就行，不过数据还没怎么处理

- 文字组件
- 图片组件
- 按钮组件
- 开关组件
- 单选框组件
- 复选框组件
- 模态框组件
- 词云组件
- 进度条组件
- 悬浮球组件

## 新增组件

- 滑块验证组件

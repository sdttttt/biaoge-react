 # <center>React Chat</center>

### Content
- 刚刚整完了Login 和 Redux的部分，不得不说Class和React好像并不是那么的搭配，代码有点丑陋，下次组件开发试试React 16 出的Hook✌.

- TSlint 静态编译检查虽然很棒，但是类型的检查是我觉得很麻烦的地方，使用TS能减少变量invoke潜在的Bug，但是其实很多时候我都没有办法判断框架内部的一些Reference类型是个什么玩意，😭加上React component使用修饰器之后整个Component的上下文经常变动。比如<code>Props</code>这玩意,碰上就是只能给他加上个 <code>any</code>

- 越来越不知道这个玩意要怎么写比较好了，找个时间重构吧。🌚

### 闲谈
稍微的评价下 **Vue** 和 **React**，在下并不是专业的前端程序员，第一次去学习前端框架只是因为好奇，Vue的上手非常快，**JavaScript** 切换到 Vue 几乎没有什么门槛，除了vuex稍微花了点时间去理解。之后发现按做前端还挺有意思的，就又学了 **Typescript** 和 React，React这个框架有有点味道了。在Vue中外部依赖的东西其实还挺少的，React就给我一种像是写 **Java** 的味道了，React 本身只实现了渲染层的部分。大部分时间其实都在学习怎么用轮子，在路由和数据上，并没有 Vue 那么强劲，而且不得不说编译速度也比 Vue 满，一开始没有数据双向绑定还真是有点辛苦。非常的不习惯，不过也很看出Vue和React相似的部分，两者都非常的模块化，不过在这一点上React做的更有意思。

不过这是我做的第一个React项目，原本想用Next.js做的稍微轻量一点，可惜的是Next.js对Ts的支持并不是那么的好，我就选用了了UmiJS + TS。

现在用Umi有一点时间了，感觉还算不错( •̀ ω •́ )y

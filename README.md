# reduxCounterDemo-cn
研究如何使用redux数据流处理react-component

> 最简单的Redux实例

* 只有一个组件Counter
* 只有一个reducer函数用于处理状态变化（（state,action）=> state）

## redux的createStore()创建store
> 注意**Redux 应用只有一个单一的 store**。当需要拆分处理数据的逻辑时，使用**reducer组合**，而不是创建多个store。

## store的职责:
* 维持应用的state
* 提供`getState()`方法获取state
* 提供`dispatch(action)`方法更新state
* 提供`subscribe(listener)`注册监听器

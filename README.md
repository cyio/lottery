# 抽奖项目汇总

## 魅族贴吧广告

* 使用 Velocity 处理旋转动画
```js
// 放到 web_modules 目录下，（为什么没用 npm 管理）
import Velocity from 'velocity.min'

Velocity(this.$els.startBtn, {
	rotateZ: totalDeg
}, {
	easing: 'easeInOutQuart',
	duration: 3400,
	complete: callback
})
```

* 核心计算
```js
// 一个人看到的度数，一个转圈需要的度数
let totalDeg = 0
let targetDeg = 0

totalDeg = totalDeg - targetDeg   // 减回到 0 度
const round = 360 * 6           // 圈数
if (index > -1) { // 中奖情况，6 档
	targetDeg = 360 / 6 * index     // 从0度起算
} else {
	targetDeg = 360 / 6 * (Math.floor(Math.random() * 6)) + 30  // 随机区域正中间度数加上到边界的度数
}
totalDeg = totalDeg + targetDeg + round
```

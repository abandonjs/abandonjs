import { test, add, asyncAdd } from 'rh-test'
import { ban, CatchError } from '..'

// test('ban & catchError: count',
// 	CatchError(ban(add, { count: 10 }), -1),
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: 3 },
// 	{ params: [1, 2], tobe: -1 },
// )

test('ban & catchError: timeout ',
	CatchError(ban(asyncAdd, { timeout: 10 }), -1),
	{ params: [1, 2], tobe: -1 },
)

const Ban = {}


Object.defineProperty(Ban, 'InfiniteLoopController', {
	value: {
		_timeConfig: {
			maxSumExeTime: 3000, // 每个循环最大累计执行时间
			maxLoopCount: 1000000 // 循环最大次数
		},
		_loopMap: new Map(), // 存储循环的标识ID
		_initLoop(loopID) { // 初始化loop
			this._setLoop(loopID, {
				isInit: true, // 是否被初始化 
				sumExeTime: 0, // 该循环执行累计时间
				startTime: Date.now(), // 循环开始时间
				count: 0 // 循环执行次数
			})
		},
		_getLoop(loopID) {
			return this._loopMap.get(loopID)
		},
		_setLoop(loopID, loop) {
			this._loopMap.set(loopID, loop)
		},
		_delLoop(loopID) {
			this._loopMap.delete(loopID)
		},
		_clearLoops() {
			this._loopMap.clear()
		},
		_exitLoop(loopID) { // 退出循环时执行
			this._delLoop(loopID)
		},
		_calcLoop(loopID) {
			if (this._loopMap.has(loopID)) {
				let { isInit, sumExeTime, startTime, count } = this._getLoop(loopID)
				if (isInit) {
					sumExeTime = Date.now() - startTime
					count++
					this._setLoop(loopID, {
						isInit,
						sumExeTime,
						startTime,
						count
					})
				} else {
					this._initLoop(loopID)
				}
			} else {
				this._initLoop(loopID)
			}
		},
		_loopMonitor(loopID) {
			this._calcLoop(loopID)
			const loop = this._getLoop(loopID)
			const { maxSumExeTime, maxLoopCount } = this._timeConfig
			// 如果循环次数超过最大次数，并且时间超过最大循环时间，就抛出异常
			if (loop.sumExeTime > maxSumExeTime && loop.count > maxLoopCount) {
				this._clearLoops()
				throw new Error("这很可能是个死循环！")
			}
		},
	}
})
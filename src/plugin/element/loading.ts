/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

// ElLoading       : loading组件
// ILoadingInstance: loading对象类型接口
import {ElLoading, ILoadingInstance} from "element-plus";

// 计数器
let count: number = 0;

// loading对象
let loading: ILoadingInstance;

function open(): void {
	loading = ElLoading.service({
		target: <HTMLElement>document.querySelector('.box-content'),
		lock: true,
		text: '数据加载中...',
		background: 'rgba(0,0,0,0.5)'
	})
}

function close(): void {
	loading.close();
}

/**
 * 显示loading层
 */
export function showLoading(): void {
	if (count == 0) {
		open();
	}
	count++;
}

/**
 * 关闭loading层
 */
export function hideLoading(): void {
	if (count <= 0) {
		return;
	}
	count--;
	if (count == 0) {
		close();
	}
}
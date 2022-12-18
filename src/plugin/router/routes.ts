/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {RouteRecordRaw} from "vue-router";

import layout from '@/views/Layout/index.vue';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/Login',
        name: '登录',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            title: '登录',
            authority: []
        }
    },
    {
        path: '',
        name: '首页',
        component: layout,
        children: [
            {
                path: '',
                name: '首页',
                component: () => import('@/views/Home/index.vue'),
                meta: {
                    title: '首页',
                    authority: []
                }
            }
        ]
    },
    {
        name: '系统配置',
        path: '/System',
        component: layout,
        redirect: 'service',
        meta: {
            authority: ["ROLE_SYSADMIN"]
        },
        children: [
            {
                path: 'service',
                name: '服务管理',
                component: () => import('@/views/System/Service/index.vue'),
                meta: {
                    title: '服务管理'
                }
            },
            {
                path: 'module',
                name: '模块管理',
                component: () => import('@/views/System/Module/index.vue'),
                meta: {
                    title: '模块管理'
                }
            },
            {
                path: 'menu',
                name: '菜单管理',
                component: () => import('@/views/System/Menu/index.vue'),
                meta: {
                    title: '菜单管理'
                }
            },
            {
                path: 'dict',
                name: '字典管理',
                component: () => import('@/views/System/Dict/index.vue'),
                meta: {
                    title: '字典管理'
                }
            },
            {
                path: 'config',
                name: '配置管理',
                component: () => import('@/views/System/Config/index.vue'),
                meta: {
                    title: '配置管理'
                }
            },
            {
                path: 'file_save',
                name: '文件存储管理',
                component: () => import('@/views/System/FileSave/index.vue'),
                meta: {
                    title: '文件存储管理'
                }
            },
        ]
    },
    {
        name: '用户相关',
        path: '/User',
        component: layout,
        redirect: 'user',
        meta: {
            authority: ["ROLE_SYSADMIN"]
        },
        children: [
            {
                path: 'user',
                name: '用户管理',
                component: () => import('@/views/User/User/index.vue'),
                meta: {
                    title: '用户管理',
                    authority: ['USER_INSERT']
                }
            },
            {
                path: 'tenant',
                name: '租户管理',
                component: () => import('@/views/User/Tenant/index.vue'),
                meta: {
                    title: '租户管理'
                }
            },
            {
                path: 'authority',
                name: '权限管理',
                component: () => import('@/views/User/Authority/index.vue'),
                meta: {
                    title: '权限管理'
                }
            }
        ]
    },
    {
        name: 'error',
        path: '/error',
        component: layout,
        redirect: '404',
        meta: {},
        children: [
            {
                path: '404',
                name: '未匹配到页面',
                component: () => import('@/views/Error/404/index.vue'),
                meta: {
                    title: '未匹配到页面'
                }
            }
        ]
    }
]

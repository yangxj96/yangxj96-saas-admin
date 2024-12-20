import { type RouteRecordRaw } from "vue-router";
import layout from "@/components/Layout/index.vue";

/**
 * 通用的路由,所有人都有的
 */
export default [
    {
        path: "/Login",
        name: "Login",
        component: () => import("@/views/Login/index.vue"),
        meta: {
            title: "登录"
        }
    },
    {
        path: "",
        name: "Home",
        component: layout,
        redirect: "",
        meta: {
            title: "首页"
        },
        children: [
            {
                path: "",
                name: "首页",
                component: () => import("@/views/Home/index.vue"),
                meta: {
                    title: "首页"
                }
            }
        ]
    },
    {
        name: "Error",
        path: "/Error",
        component: layout,
        redirect: "404",
        children: [
            {
                path: "404",
                name: "no_matching",
                component: () => import("@/views/Error/404/index.vue"),
                meta: {
                    title: "未匹配到页面"
                }
            },
            {
                path: "401",
                name: "no_access",
                component: () => import("@/views/Error/401/index.vue"),
                meta: {
                    title: "无权访问"
                }
            }
        ]
    },
    {
        path: "/Flow",
        name: "Flow",
        component: layout,
        redirect: "",
        meta: {
            title: "流程控制"
        },
        children: [
            {
                path: "",
                name: "CreatedList",
                component: () => import("@/views/Flow/List/index.vue"),
                meta: {
                    title: "流程控制"
                }
            },
            {
                path: "Created",
                name: "CreatedFlow",
                component: () => import("@/views/Flow/Created/index.vue"),
                meta: {
                    title: "创建流程"
                }
            }
        ]
    },
    {
        path: "/Platform",
        name: "Platform",
        component: layout,
        redirect: "",
        meta: {
            title: "平台配置"
        },
        children: [
            {
                path: "",
                name: "PlatformConfig",
                component: () => import("@/views/Platform/Config/index.vue"),
                meta: {
                    title: "平台配置",
                    route_group: "Platform"
                }
            },
            {
                path: "Router",
                name: "PlatformRouter",
                component: () => import("@/views/Platform/Router/index.vue"),
                meta: {
                    title: "路由管理",
                    route_group: "Router"
                }
            },
            {
                path: "AdministrativeDivision",
                name: "AdministrativeDivision",
                component: () => import("@/views/Platform/AdministrativeDivision/index.vue"),
                meta: {
                    title: "行政区划管理"
                }
            },
            {
                path: "Module",
                name: "PlatformModule",
                component: () => import("@/views/Platform/Module/index.vue"),
                meta: {
                    title: "模块管理",
                    route_group: "Module"
                }
            },
            {
                path: "Menu",
                name: "PlatformMenu",
                component: () => import("@/views/Platform/Menu/index.vue"),
                meta: {
                    title: "菜单管理",
                    route_group: "Menu"
                }
            },
            {
                path: "Dict",
                name: "PlatformDict",
                component: () => import("@/views/Platform/Dict/index.vue"),
                meta: {
                    title: "字典管理",
                    route_group: "Dict"
                }
            }
        ]
    },
    {
        name: "Account",
        path: "/Account",
        component: layout,
        redirect: "",
        meta: {
            title: "用户管理"
        },
        children: [
            {
                path: "",
                name: "AccountList",
                component: () => import("@/views/User/Account/index.vue"),
                meta: {
                    title: "用户管理",
                    route_group: "User"
                }
            },
            {
                name: "AccountTenant",
                path: "/Account/Tenant",
                redirect: "",
                meta: {
                    title: "租户管理"
                },
                children: [
                    {
                        path: "",
                        name: "AccountTenantList",
                        component: () => import("@/views/User/Tenant/index.vue"),
                        meta: {
                            title: "租户信息"
                        }
                    },
                    {
                        path: "Register",
                        name: "AccountTenantRegister",
                        component: () => import("@/views/User/Tenant/components/register.vue"),
                        meta: {
                            title: "租户注册"
                        }
                    },
                    {
                        path: "Details",
                        name: "AccountTenantDetails",
                        component: () => import("@/views/User/Tenant/components/register.vue"),
                        meta: {
                            title: "租户详情"
                        }
                    }
                ]
            },
            {
                path: "Authority",
                name: "AccountAuthority",
                component: () => import("@/views/User/Role/index.vue"),
                meta: {
                    title: "权限管理",
                    route_group: "Authority"
                }
            }
        ]
    }
] as Array<RouteRecordRaw>;

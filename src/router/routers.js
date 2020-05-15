
const Login = resolve => { require(['@/views/login'], resolve) }
const Main = resolve => { require(['@/views/layout/main'], resolve) }
const Chat = resolve => { require(['@/views/Chat'], resolve) }
const GroupChat = resolve => { require(['@/views/GroupChat'], resolve) }
const Friend = resolve => { require(['@/views/Friend'], resolve) }
const GroupTemplate = resolve => { require(['@/views/GroupTemplate'], resolve) }
const GroupTask = resolve => { require(['@/views/GroupTask'], resolve) }
const GroupGuard = resolve => { require(['@/views/GroupGuard'], resolve) }
const Material = resolve => { require(['@/views/Material'], resolve) }
const System = resolve => { require(['@/views/System'], resolve) }
const Account = resolve => { require(['@/views/Account'], resolve) }
const Cache = resolve => { require(['@/views/Cache'], resolve) }
const Help = resolve => { require(['@/views/Help'], resolve) }






const loginRouter = {
    path: '/login',
    name: 'login',
    component: Login
}

const defaultRouter = {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/Chat/ChatIndex',
}

export const appRouter = [
    {
        path: '/Chat',
        icon: 'iconliaotian',
        title: '聊天',
        name: 'Chat',
        component: Main,
        redirect: '/Chat/ChatIndex',
        children: [
            { path: 'ChatIndex', name: 'ChatIndex', title: '聊天', meta: { keepAlive: false }, component: Chat },
        ]
    },
   
    {
        path: '/addressList',
        icon: 'icontongxunlu',
        title: '通讯录',
        name: 'addressList',
        component: Main,
        redirect: '/addressList/GroupChat',
        children: [
            { path: 'GroupChat', name: 'GroupChat', title: '群聊', meta: { keepAlive: false }, component: GroupChat },
            { path: 'Friend', name:'Friend', title: '好友', meta: { keepAlive: false }, component: Friend },
        ]
    },
    {
        path: '/GroupSending',
        icon: 'iconqunfa',
        title: '定时群发',
        name: 'GroupSending',
        component: Main,
        redirect: '/GroupSending/GroupTemplate',
        children: [
            { path: 'GroupTemplate', name: 'GroupTemplate', title: '群发模板', meta: { keepAlive: false }, component: GroupTemplate },
            { path: 'GroupTask', name: 'GroupTask', title: '群发任务', meta: { keepAlive: false }, component: GroupTask },
        ]
    },
    {
        path: '/GroupGuard',
        icon: 'iconqunmingshouhu',
        title: '群名守护',
        name: 'GroupGuard',
        component: Main,
        redirect: '/GroupGuard/GroupGuardIndex',
        children: [
            { path: 'GroupGuardIndex', name: 'GroupGuardIndex', title: '群名守护', meta: { keepAlive: false }, component: GroupGuard },
        ]
    },
    {
        path: '/Material',
        icon: 'iconsucaiku',
        title: '素材库',
        name: 'Material',
        component: Main,
        redirect: '/Material/MaterialIndex',
        children: [
            { path: 'MaterialIndex', name: 'MaterialIndex', title: '素材库', meta: { keepAlive: false }, component: Material },
        ]
    },
    {
        path: '/Set',
        icon: 'iconshezhi',
        title: '设置',
        name: 'Set',
        component: Main,
        redirect: '/Set/System',
        children: [
            { path: 'System', name: 'System', title: '系统设置', meta: { keepAlive: false }, component: System },
            { path: 'Account', name: 'Account', title: '账号设置', meta: { keepAlive: false }, component: Account },
            { path: 'Cache', name: 'Cache', title: '缓存设置', meta: { keepAlive: false }, component: Cache },
            { path: 'Help', name: 'Help', title: '帮助中心', meta: { keepAlive: false }, component: Help },
        ]
    },
  
  
]

export const routes = [
    loginRouter,
    defaultRouter,
    // oterRouter,
    ...appRouter
]
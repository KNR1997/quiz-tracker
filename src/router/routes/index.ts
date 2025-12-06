const Layout = () => import("@/layout/index.vue");

export const basicRoutes = [
  {
    path: "/",
    redirect: "/workbench", // 默认跳转到首页
    meta: { order: 0 },
  },
  {
    name: "Workbench-tsdsd",
    path: "/workbench",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/workbench/index.vue"),
        name: "Workbench",
        meta: {
          title: "Workbench Default",
          icon: "icon-park-outline:workbench",
          affix: true,
        },
      },
    ],
    meta: { order: 1 },
  },
  {
    name: "System-dev",
    path: "/system",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/system/index.vue"),
        name: "System",
        meta: {
          title: "System Default",
          icon: "icon-park-outline:workbench",
          affix: true,
        },
      },
    ],
    meta: { order: 5 },
  },
  {
    name: 'Profile-dev',
    path: '/profile',
    component: Layout,
    isHidden: true,
    children: [
      {
        path: '',
        component: () => import('@/views/profile/index.vue'),
        name: 'Profile',
        meta: {
          title: 'Profile',
          icon: 'user',
          affix: true,
        },
      },
    ],
    meta: { order: 99 },
  },
];

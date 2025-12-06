<template>
  <n-menu
    ref="menu"
    class="side-menu"
    accordion
    :indent="18"
    :collapsed-icon-size="22"
    :collapsed-width="64"
    :options="menuOptions"
    :value="activeKey"
    @update:value="handleMenuSelect"
  />
</template>

<script setup>
import { renderCustomIcon, renderIcon } from "@/utils";

const router = useRouter();

const menuOptions = [
  {
    label: "Workbench",
    key: "workbench",
    icon: renderIcon("icon-park-outline:workbench", { size: 18 }),
    path: "/workbench",
  },
  {
    label: "System",
    key: "system",
    icon: renderIcon("mdi-account-off", { size: 18 }),
    path: "/system",
  },
  {
    label: "Profile",
    key: "profile",
    icon: renderIcon("mdi-account-off", { size: 18 }),
    path: "/profile",
  },
  // {
  //   label: "Settings",
  //   key: "settings",
  //   children: [
  //     { label: "Profile", key: "profile", path: '/profile' },
  //     { label: "Security", key: "security", path: '/security'  },
  //   ],
  // },
];

function handleMenuSelect(key, item) {
  router.push(item.path);
}
</script>

<style lang="scss">
.side-menu:not(.n-menu--collapsed) {
  .n-menu-item-content {
    &::before {
      left: 5px;
      right: 5px;
    }
    &.n-menu-item-content--selected,
    &:hover {
      &::before {
        border-left: 4px solid var(--primary-color);
      }
    }
  }
}
</style>

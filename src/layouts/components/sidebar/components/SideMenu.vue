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
const menuOptions = [
  {
    label: "Dashboard",
    key: "dashboard",
    // icon: renderIcon(HomeIcon),
  },
  {
    label: "Settings",
    key: "settings",
    children: [
      { label: "Profile", key: "profile" },
      { label: "Security", key: "security" },
    ],
  },
];

function handleMenuSelect() {}
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

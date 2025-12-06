<template>
  <AppPage :show-footer="true">
    <div flex-1>
      <n-card rounded-10>
        <div flex items-center justify-between>
          <div flex items-center>
            <img rounded-full width="60" src="/tauri.svg" />
            <div ml-10>
              <p text-20 font-semibold>hello, admin</p>
              <p mt-5 text-14 op-60>Today is another day full of energy!</p>
            </div>
          </div>
          <n-space :size="12" :wrap="false">
            <n-statistic
              v-for="item in statisticData"
              :key="item.id"
              v-bind="item"
            ></n-statistic>
          </n-space>
        </div>
      </n-card>

      <n-card :title="Project" size="small" :segmented="true" mt-15 rounded-10>
        <template #header-extra>
          <n-button text type="primary">More</n-button>
        </template>
        <div flex flex-wrap justify-between>
          <n-card
            v-for="i in 9"
            :key="i"
            class="mb-10 mt-10 w-300 cursor-pointer"
            hover:card-shadow
            title="Vue FastAPI Admin"
            size="small"
          >
            <p op-60>{{ dummyText }}</p>
          </n-card>
        </div>
      </n-card>
    </div>
  </AppPage>
</template>

<script setup>
const dummyText =
  "A lightweight admin management template based on Vue 3.0, FastAPI, and Naive UI.";
const statisticData = computed(() => [
  {
    id: 0,
    label: "Test 1",
    value: "25",
  },
  {
    id: 1,
    label: "Test 2",
    value: "4/16",
  },
  {
    id: 2,
    label: "Test 3",
    value: "12",
  },
]);
</script>

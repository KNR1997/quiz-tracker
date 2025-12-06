<template>
  <CommonPage :show-header="false">
    <NTabs type="line" animated>
      <NTabPane name="Modify your information">
        <div class="m-30 flex items-center">
          <NForm
            ref="infoFormRef"
            label-placement="left"
            label-align="left"
            label-width="100"
            :model="infoForm"
            :rules="infoFormRules"
            class="w-400"
          >
            <NFormItem
              label="Username"
              path="username"
            >
              <NInput
                v-model:value="infoForm.username"
                type="text"
                :placeholder="$t('views.profile.placeholder_username')"
              />
            </NFormItem>
            <NFormItem :label="$t('views.profile.label_email')" path="email">
              <NInput
                v-model:value="infoForm.email"
                type="text"
                :placeholder="$t('views.profile.placeholder_email')"
              />
            </NFormItem>
            <NButton type="primary">
              Update
            </NButton>
          </NForm>
        </div>
      </NTabPane>
    </NTabs>
  </CommonPage>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
  NTabPane,
  NTabs,
} from "naive-ui";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const infoForm = ref({
  avatar: null,
  username: "name",
  email: "name",
});
const infoFormRules = {
  username: [
    {
      required: true,
      message: t('views.profile.message_username_required'),
      trigger: ['input', 'blur', 'change'],
    },
  ],
}
</script>

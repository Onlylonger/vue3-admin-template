<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'
import { ElForm, ElFormItem, ElInput, ElSpace, ElButton } from 'element-plus'
import { fetchCaptchaInfo } from './api'
import { useForm, useFormRules } from './hooks'
import { login } from './store'

const captchaData = ref<{
  captchaId?: string
  captchaImg?: string
  loading?: boolean
}>({})

const refreshCaptchaInfo = () => {
  captchaData.value.loading = true
  fetchCaptchaInfo()
    .then((res) => {
      captchaData.value = {
        captchaId: res.data.captcha_id,
        captchaImg: res.data.captcha_img,
      }
    })
    .finally(() => {
      captchaData.value.loading = false
    })
}

onMounted(() => {
  refreshCaptchaInfo()
})

const { formRef, validate } = useForm()

interface FormModel {
  userName: string
  password: string
  captcha: string
}

const model = ref<FormModel>({
  userName: 'laborer',
  password: 'cjalk87^%$al98',
  captcha: '',
})

const rules = computed(() => {
  // inside computed to make locale ref, if not apply i18n, you can define it without computed
  const { formRules } = useFormRules()

  return {
    userName: formRules.userName,
    password: formRules.pwd,
    captcha: formRules.code,
  }
})

async function handleSubmit() {
  await validate()
  await login()
}
</script>

<template>
  <ElForm
    ref="formRef"
    :model="model"
    :rules="rules"
    size="large"
    :show-label="false"
    @keyup.enter="handleSubmit"
  >
    <ElFormItem prop="userName">
      <ElInput v-model="model.userName" placeholder="请输入账号" clearable :prefix-icon="User" />
    </ElFormItem>
    <ElFormItem prop="password">
      <ElInput
        v-model="model.password"
        type="password"
        show-password-on="click"
        show-password
        clearable
        :prefix-icon="Lock"
        placeholder="请输入密码"
      />
    </ElFormItem>
    <ElFormItem prop="captcha">
      <div class="flex gap-4">
        <ElInput v-model="model.captcha" clearable :prefix-icon="Lock" placeholder="验证码" />
        <div
          v-loading="captchaData.loading"
          class="cursor-pointer text-right"
          @click="refreshCaptchaInfo"
        >
          <img
            v-if="captchaData.captchaImg"
            :src="captchaData.captchaImg"
            class="size-full"
            alt="captcha"
          />
        </div>
      </div>
    </ElFormItem>
    <ElSpace direction="vertical" :size="24" class="mb-4 mt-4 w-full" fill>
      <ElButton type="primary" size="large" round block @click="handleSubmit"> 登录 </ElButton>
    </ElSpace>
  </ElForm>
</template>

<style scoped></style>

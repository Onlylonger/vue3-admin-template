import type { FormInstance } from 'element-plus'
import { ref, type ComputedRef, type Ref } from 'vue'

export const REG_USER_NAME = /^[\u4E00-\u9FA5a-zA-Z0-9_-]{4,16}$/

/** Phone reg */
export const REG_PHONE =
  /^[1](([3][0-9])|([4][01456789])|([5][012356789])|([6][2567])|([7][0-8])|([8][0-9])|([9][012356789]))[0-9]{8}$/

/**
 * Password reg
 *
 * 6-18 characters, including letters, numbers, and underscores
 */
export const REG_PWD = /^.{6,18}$/
// export const REG_PWD = /^\w{6,18}$/;

/** Email reg */
export const REG_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

/** Six digit code reg */
export const REG_CODE_SIX = /^\d{6}$/

/** Four digit code reg */
export const REG_CODE_FOUR = /^\d{4}$/

/** Url reg */
export const REG_URL =
  /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/

export function useForm() {
  const formRef = ref<FormInstance | null>(null)

  async function validate() {
    await formRef.value?.validate()
  }

  async function restoreValidation() {
    formRef.value?.resetFields()
  }

  return {
    formRef,
    validate,
    restoreValidation,
  }
}

export function useFormRules() {
  const patternRules = {
    userName: {
      pattern: REG_USER_NAME,
      message: '用户名格式不正确',
      trigger: 'change',
    },
    phone: {
      pattern: REG_PHONE,
      message: '手机号格式不正确',
      trigger: 'change',
    },
    pwd: {
      pattern: REG_PWD,
      message: '密码格式不正确，6-18位字符，包含字母、数字、下划线',
      trigger: 'change',
    },
    code: {
      pattern: REG_CODE_SIX,
      message: '验证码格式不正确',
      trigger: 'change',
    },
    email: {
      pattern: REG_EMAIL,
      message: '邮箱格式不正确',
      trigger: 'change',
    },
  }

  const formRules = {
    userName: [createRequiredRule('不能为空'), patternRules.userName],
    phone: [createRequiredRule('不能为空'), patternRules.phone],
    pwd: [createRequiredRule('不能为空'), patternRules.pwd],
    code: [createRequiredRule('不能为空'), patternRules.code],
    email: [createRequiredRule('不能为空'), patternRules.email],
  }

  /** the default required rule */
  const defaultRequiredRule = createRequiredRule('不能为空')

  function createRequiredRule(message: string) {
    return {
      required: true,
      message,
    }
  }

  /** create a rule for confirming the password */
  // function createConfirmPwdRule(pwd: string | Ref<string> | ComputedRef<string>) {
  //   const confirmPwdRule = [
  //     { required: true, message: '不能为空' },
  //     {
  //       asyncValidator: (rule, value) => {
  //         if (value.trim() !== '' && value !== toValue(pwd)) {
  //           return Promise.reject(rule.message)
  //         }
  //         return Promise.resolve()
  //       },
  //       message: '不能为空',
  //       trigger: 'input',
  //     },
  //   ]
  //   return confirmPwdRule
  // }

  return {
    patternRules,
    formRules,
    defaultRequiredRule,
    createRequiredRule,
    // createConfirmPwdRule,
  }
}

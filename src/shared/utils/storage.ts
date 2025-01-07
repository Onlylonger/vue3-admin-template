const PREFIX = 'dd'

export function setStorage(key: string, value: string) {
  localStorage.setItem(`${PREFIX}_${key}`, value)
}

export function getStorage(key: string) {
  return localStorage.getItem(`${PREFIX}_${key}`)
}

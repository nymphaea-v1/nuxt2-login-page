import { ref } from 'vue'

const USERNAME = 'admin'
const PASSWORD = 'password'

export const isLogged = ref(false)

export function checkLogged () {
  return isLogged.value
}

export function login (username, password) {
  if (!username) {
    throw new LoginError('username', 'This field cannot be empty')
  }

  if (!password) {
    throw new LoginError('password', 'This field cannot be empty')
  }

  if (username !== USERNAME) {
    throw new LoginError('username', 'No such user')
  } else if (password !== PASSWORD) {
    throw new LoginError('password', 'Incorrect password')
  }

  isLogged.value = true
  return true
}

export function logout () {
  isLogged.value = false
}

class LoginError extends Error {
  constructor (field, message) {
    super(message)
    this.field = field
  }
}

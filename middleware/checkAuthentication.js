import { checkLogged } from '../utils/auth'

export default function ({ route, redirect }) {
  const isLogged = checkLogged()

  if (route.name !== 'login') {
    if (!isLogged) {
      return redirect({ name: 'login' })
    }
  } else if (isLogged) {
    return redirect({ name: 'index' })
  }
}

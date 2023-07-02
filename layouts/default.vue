<template>
  <div>
    <header>
      <nav>
        <ul class="nav justify-content-center bg-dark">
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'index'}"
              class="nav-link"
              :class="[$route.name === 'index' ? 'text-primary' : 'text-white']"
            >
              Home
            </nuxt-link>
          </li>

          <li class="nav-item">
            <button
              v-if="isLogged"
              class="nav-link text-white"
              @click="logout"
            >
              Log out
            </button>
            <nuxt-link
              v-else
              :to="{ name: 'login'}"
              class="nav-link"
              :class="[$route.name === 'login' ? 'text-primary' : 'text-white']"
            >
              Log in
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<script>
import { isLogged, logout as authLogout } from '../utils/auth'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      isLogged
    }
  },
  methods: {
    logout () {
      authLogout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

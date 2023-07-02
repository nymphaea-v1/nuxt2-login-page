<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
    <div
      class="card shadow-sm"
      style="width: 24rem;"
    >
      <div class="card-header">
        Log in
      </div>
      <div class="card-body">
        <form
          ref="formElement"
          novalidate
          @submit.prevent="submitLogin"
        >
          <c-form-input
            v-model="username"
            label="Username"
            type="text"
            :valid="validationStatus.username.valid"
            :error-message="validationStatus.username.errorMessage"
          />

          <c-form-input
            v-model="password"
            label="Password"
            type="password"
            :valid="validationStatus.password.valid"
            :error-message="validationStatus.password.errorMessage"
          />

          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '~/utils/auth'

export default {
  name: 'LoginPage',
  data () {
    return {
      username: undefined,
      password: undefined,
      validationStatus: {
        username: {
          valid: true,
          errorMessage: ''
        },
        password: {
          valid: true,
          errorMessage: ''
        }
      }
    }
  },
  methods: {
    submitLogin () {
      this.resetValidationStatus()

      try {
        const isSuccess = login(this.username, this.password)
        if (isSuccess) {
          this.$router.push({ name: 'index' })
        }
      } catch (error) {
        const status = this.validationStatus[error.field]
        status.valid = false
        status.errorMessage = error.message
      }
    },
    resetValidationStatus () {
      this.validationStatus = {
        username: {
          valid: true,
          errorMessage: ''
        },
        password: {
          valid: true,
          errorMessage: ''
        }
      }
    }
  }
}
</script>

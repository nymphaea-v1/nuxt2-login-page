<template>
  <div class="mb-3">
    <label style="display: contents">
      <p
        v-if="label"
        class="form-label"
      >
        {{ label }}
      </p>

      <input
        v-model="localValue"
        :type="type"
        class="form-control"
        :class="{ 'is-invalid': !valid }"
      >

      <div class="invalid-feedback">
        {{ errorMessage }}
      </div>
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    valid: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: undefined
    }
  },
  emits: ['update:modelValue'],
  computed: {
    localValue: {
      get: function () {
        return this.modelValue
      },
      set: function (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<template>
  <div class="vfl-has-label">
    <label class="vfl-label" :class="classObject" :for="inputId">
      {{ floater }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'floater',
  props: {
    on: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    dispatch: {
      type: Boolean,
      default: true
    },
    for: {
      type: String,
      default: null
    },
    activeOnFocus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      formEl: undefined,
      labelEl: undefined,
      isActive: false,
      isFocused: false
    }
  },
  mounted () {
    this.formEl = this.$el.querySelector('input, textarea, select')
    this.formEl.addEventListener('input', this.updateIsActive)
    this.formEl.addEventListener('input', this.updateIsFocused)
    this.formEl.addEventListener('blur', this.updateIsFocused)
    this.formEl.addEventListener('focus', this.updateIsFocused)

    if (!this.for) {
      this.labelEl = this.$el.querySelector('label')
      this.labelEl.addEventListener('click', this.focusFormEl)
    }

    this.dispatchInput()
  },
  beforeDestroy () {
    this.formEl.removeEventListener('input', this.updateIsActive)
    this.formEl.removeEventListener('input', this.updateIsFocused)
    this.formEl.removeEventListener('blur', this.updateIsFocused)
    this.formEl.removeEventListener('focus', this.updateIsFocused)
  },
  methods: {
    dispatchInput () {
      if (this.dispatch) {
        const event = document.createEvent('HTMLEvents')
        event.initEvent('input', true, false)
        this.formEl.dispatchEvent(event)
      }
    },
    focusFormEl () {
      this.formEl.focus()
    },
    updateIsActive (e) {
      this.isActive = e.target.value.length > 0
    },
    updateIsFocused (e) {
      this.isFocused =
        e.target === document.activeElement &&
        (this.activeOnFocus || this.isActive)

      if (this.activeOnFocus) {
        if (this.isFocused) {
          e.target.placeholder = ''
        } else {
          e.target.placeholder = this.floater
        }
      }
    }
  },
  computed: {
    inputId () {
      return this.for
    },
    classObject () {
      return {
        'vfl-label-on-input': this.on && (this.isActive || this.fixed),
        'vfl-label-on-focus': this.isFocused,
        'vfl-label-active': this.activeOnFocus && this.isFocused
      }
    },
    formElType () {
      return this.formEl ? this.formEl.tagName.toLowerCase() : ''
    },
    floater () {
      if (this.label) return this.label

      switch (this.formElType) {
        case 'input':
        case 'textarea':
          return this.formEl.placeholder
        case 'select':
          return this.formEl.querySelector('option[disabled][selected]')
            .innerHTML
        default:
          return ''
      }
    }
  }
}
</script>

<style>
.vfl-has-label {
  position: relative;
}

.vfl-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0.1em;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 0.8em;
  color: #aaa;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: all 0.2s ease-out;
}

.vfl-label-active,
.vfl-label-on-input {
  top: -1.3em;
  pointer-events: all;
  opacity: 1;
}

.vfl-label-on-focus {
  color: #0074d9;
}

.vfl-has-label input:focus,
.vfl-has-label textarea:focus,
.vfl-has-label select:focus {
  outline: 0;
}
</style>

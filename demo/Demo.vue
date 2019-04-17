<template>
  <div>
    <div class="container">
      <floater>
        <input type="text" placeholder="First name" />
      </floater>

      <floater :active-on-focus="true">
        <input type="text" placeholder="Active on Focus" />
      </floater>

      <floater>
        <input type="email" placeholder="Email" v-model="email" />
      </floater>

      <floater label="Overridden label">
        <input type="password" placeholder="Password" />
      </floater>

      <floater :on="isActive">
        <input type="text" placeholder="Inactive" />
      </floater>

      <floater>
        <textarea placeholder="Comment"></textarea>
      </floater>

      <floater :dispatch="false">
        <select>
          <option disabled selected>Framework</option>
          <option>Vue</option>
          <option>React</option>
          <option>Angular</option>
          <option>Ember</option>
        </select>
      </floater>

      <floater label="Version">
        <select v-model="version">
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </floater>

      <floater fixed>
        <input type="text" placeholder="Fixed" />
      </floater>

      <div class="example">
        <floater>
          <input type="text" placeholder="Website" />
        </floater>
      </div>
      <div>
        Forked from
        <a
          href="https://github.com/brtjkzl/vue-floater"
          target="_blank"
          rel="noopener"
          >brtjkzl/vue-floater</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      email: 'harald@urbantrout.io',
      version: 'beta',
      options: [
        { value: 'alpha', text: 'Alpha' },
        { value: 'beta', text: 'Beta' },
        { value: 'stable', text: 'Stable' }
      ]
    }
  },
  computed: {
    isActive() {
      return false
    }
  }
}
</script>

<style>
.container {
  width: 150px;
  margin: auto;
}

body {
  padding: 2em;
}

input,
textarea,
select {
  margin-bottom: 2em;
  line-height: 1.15;
  font-size: 14px;
  padding: 0.4em;
  width: 100%;
}

.example .vfl-label {
  text-transform: uppercase;
}

.example .vfl-label-on-input {
  top: -1em;
}

.example .vfl-label-on-focus {
  color: #ff851b;
}

.example .vfl-label + input {
  padding-left: 0;
  font-size: 100%;
  border: 0;
  border-bottom: 2px solid #aaa;
  transition: border 0.2s;
}

.example .vfl-label-on-focus + input {
  border-bottom: 2px solid #ff851b;
}
</style>

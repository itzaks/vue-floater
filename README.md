# vue-floater

>  This is a fork of [brtjkzl/vue-floater](https://github.com/brtjkzl/vue-floater)

Float label pattern for Vue.js. Cross-browser compatible and easy to customize
with CSS.

![intro](https://github.com/urbantrout/vue-floater/raw/master/demo/intro.gif)

```html
<floater>
  <input type="text" placeholder="Label">
</floater>
```

## Installation

### npm / yarn

Install package using `npm` or `yarn`:

```sh
$ npm install --save vue-floater

# or

$ yarn add vue-floater
```

#### Global

Load the plugin by calling `Vue.use()`:

```js
import Vue from "vue";
import VueFloater from "vue-floater";

Vue.use(VueFloater);
```

Now you have access in your templates to the `<floater>` component.

#### Local

You may prefer to explicitly import the plugin and use it inside your components:

```vue
<template>
  <floater>
    ...
  </floater>
</template>

<script>
import floater from "vue-floater/components/Floater";

export default {
  components: {
    floater
  }
};
</script>
```

## Usage

Wrap input, textarea or select with `<floater>`:

```html
<floater>
  <input type="email" placeholder="E-mail">
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
```

See more examples at [Demo.vue](https://github.com/urbantrout/vue-floater/blob/master/demo/Demo.vue).

## Customization

### Design

Style `.vfl-label`, `.vfl-label-on-input` and `.vfl-label-on-focus`
to meet your design requirements:

![example](https://github.com/urbantrout/vue-floater/raw/master/demo/example.gif)

```css
.vfl-label {
  text-transform: uppercase;
}

.vfl-label-on-input {
  top: -1em;
}

.vfl-label-on-focus {
  color: #ff851b;
}

.vfl-label + input {
  padding-left: 0;
  font-size: 100%;
  border: 0;
  border-bottom: 2px solid #aaa;
  transition: border 0.2s;
}

.vfl-label-on-focus + input {
  border-bottom: 2px solid #ff851b;
}
```

### Props

Set `:on` prop to add an additional condition for label activation:

```vue
<template>
  <floater :on="isActive">
    <input type="text" placeholder="Inactive">
  </floater>
</template>

<script>
export default {
  computed: {
    isActive() {
      return false;
    }
  },
  components: {
    floater
  }
};
</script>
```

Set `:label` prop to override `placeholder` attribute for input/textarea or
`option[disabled][selected]` for select:

```html
<floater label="Last name">
  <input type="text" placeholder="Surname">
</floater>
```

```vue
<template>
  <floater label="Version">
    <select v-model="version">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </floater>
</template>

<script>
export default {
  data() {
    return {
      version: "beta",
      options: [
        { value: "alpha", text: "Alpha" },
        { value: "beta", text: "Beta" },
        { value: "stable", text: "Stable" }
      ]
    };
  },
  components: {
    floater
  }
};
</script>
```

Set `:fixed` to `true` to make label permanently active:

```vue
<template>
  <floater fixed>
    <input type="text" placeholder="Fixed">
  </floater>
</template>
```

Set `:dispatch` to `false` to disable triggering `input` event
once the component is mounted:

_By default it's set to true to activate label when form element has value._

```vue
<template>
  <floater :dispatch="false">
    <input type="email" placeholder="Email" v-model="email">
  </floater>
</template>

<script>
export default {
  data() {
    return {
      email: "john@example.com"
    };
  },
  components: {
    floater
  }
};
</script>
```

## Development

1.  Clone the repository:

    ```sh
    $ git clone git@github.com:urbantrout/vue-floater.git
    ```

2.  Install dependencies:

    ```sh
    $ npm install
    ```

3.  Start development:

    ```sh
    $ npm start
    ```

---

Code is open sourced [on GitHub](https://github.com/urbantrout/vue-floater). Up to date changelog is available under [the releases section](https://github.com/urbantrout/vue-floater/releases).

import Vue from 'vue'
import floater from 'components/Floater'

export const ctorInput = (props={}) => {
  return new Vue({
    components: { floater },
    render: h => {
      return h('floater', {
        props
      }, [
        h('input', {
          attrs: {
            type: 'text',
            placeholder: 'Name'
          }
        })
      ])
    }
  }).$mount().$children[0]
}

export const ctorTextArea = () => {
  return new Vue({
    components: { floater },
    render: h => {
      return h('floater', [
        h('textarea', {
          attrs: {
            placeholder: 'Comment'
          }
        })
      ])
    }
  }).$mount().$children[0]
}

export const ctorSelect = () => {
  return new Vue({
    components: { floater },
    render: h => {
      return h('floater', [
        h('select', [
          h('option', {
            attrs: {
              disabled: 'disabled',
              selected: 'selected'
            }
          }, 'Framework')
        ])
      ])
    }
  }).$mount().$children[0]
}

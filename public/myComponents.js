Vue.component('draggle', {
    props: {
        cdata: {
            type: Object,
            reqiure: true
        }
    },
    methods: {
        del() {
            this.$emit('delete', this.cdata)
        }
    },
    template: `<div class="draggle">
      <button class="delete" @click.stop="del">删除</button>
      <slot></slot>
      </div>`
})

Vue.component('myText', {
    props: {
        models: {
            type: Object,
            reqiure: true
        },
        styles: {
            type: Object,
            reqiure: false
        }
    },
    template: `<div :style="styles">{{models.text}}</div>`
})

Vue.component('myImage', {
    props: {
        models: {
            type: Object,
            reqiure: true
        },
        styles: {
            type: Object,
            reqiure: false
        }
    },
    template: `<div><img :src="models.src" :style="styles" /> </div>`
})

Vue.component('myButton', {
    props: {
        models: {
            type: Object,
            reqiure: true
        },
        styles: {
            type: Object,
            reqiure: false
        }
    },
    template: `<button :style="styles">{{models.text}}</button>`
})

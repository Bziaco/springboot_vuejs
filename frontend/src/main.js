// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Layout'
import router from './router'
import VueSplit from 'vue-split-panel'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VJstree from 'vue-jstree'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'expose-loader?$!expose-loader?jQuery!jquery'

Vue.use(BootstrapVue)
Vue.use(VueSplit)
Vue.use(VJstree)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, VJstree},
  template: '<App/>',
  data: {
    data: [
      {
        "text": "Same but with checkboxes",
        "children": [
          {
            "text": "initially selected",
            "selected": true
          },
          {
            "text": "custom icon",
            "icon": "fa fa-warning icon-state-danger"
          },
          {
            "text": "initially open",
            "icon": "fa fa-folder icon-state-default",
            "opened": true,
            "children": [
              {
                "text": "Another node"
              }
            ]
          },
          {
            "text": "custom icon",
            "icon": "fa fa-warning icon-state-warning"
          },
          {
            "text": "disabled node",
            "icon": "fa fa-check icon-state-success",
            "disabled": true
          }
        ]
      },
      {
        "text": "Same but with checkboxes",
        "opened": true,
        "children": [
          {
            "text": "initially selected",
            "selected": true
          },
          {
            "text": "custom icon",
            "icon": "fa fa-warning icon-state-danger"
          },
          {
            "text": "initially open",
            "icon": "fa fa-folder icon-state-default",
            "opened": true,
            "children": [
              {
                "text": "Another node"
              }
            ]
          },
          {
            "text": "custom icon",
            "icon": "fa fa-warning icon-state-warning"
          },
          {
            "text": "disabled node",
            "icon": "fa fa-check icon-state-success",
            "disabled": true
          }
        ]
      },
      {
        "text": "And wholerow selection"
      }
    ]
  }
})

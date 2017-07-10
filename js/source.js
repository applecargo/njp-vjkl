import Vue from 'vue'
import WebFont from 'webfontloader'
import Marked from 'marked'
import App from '../components/app.vue'

WebFont.load({
 google: {
   families: ['Alegreya:400,italic,700,900']
 }
});

var app = new Vue({
  el: '#content',
  render: h => h(App)
})

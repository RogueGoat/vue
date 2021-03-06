// Vue component to create reusable parts

// Vue.component('hello', {
//   template: '<h1>Hello</h1>'
// });

// ---------------------------------------



var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJs Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.udpateTitle('The VueJs Instance (UPDATED!)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed new value ' + value);
    }
  }
});

setTimeout(function(){
  vm1.title = 'Changed by Timer'
}, 3000);

var vm2 = new Vue ({
  el: '#app2',
  data: {
    title: 'The Second instance!!'
  },
  methods: {
    onChange:function() {
      vm1.title = 'Changed!';
    }
  }
});


// template mounted outside instance

var vm3 = new Vue ({
  template: '<h1>Hello</h1>'
});

vm3.$mount('#app3');
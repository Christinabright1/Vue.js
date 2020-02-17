new Vue({
  el: '#app',
  data:{
    title: 'Event Object',
    color: 'blue',
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
      logCoords(e){
       this.coords.x= e.offsetX
       this.coords.y= e.offsetY
      }
  }
});

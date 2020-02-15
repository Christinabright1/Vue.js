new Vue({
  el: "#app",
  data: {
      title: 'Become a ninja',
      wage: 10,
      coord: {
        x: 0,
        y: 0
      }
  },
  methods: {
    logEvent(e){
      console.log(e);
    },
    logCoords(e){
      this.coord.x = e.offsetX
      this.coord.y= e.offsetY
    }
  }
});
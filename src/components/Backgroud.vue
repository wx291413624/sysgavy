<template>
  <div class="bac">
    <div class="sss">
      <h2>从此任时光洪荒,任人流汹涌,都不曾从我们的记忆中抹去</h2>
      <Login></Login>
    </div>
    <img id="background" alt="background" src="" class="nnc"/>
    <canvas id="canvass"></canvas>
  </div>
</template>

<script>
  import $ from "jquery"
  import Login from "./Login";

  export default {
    name: "Backgroud",
    components: {Login},
    methods: {
      clickShow: function (event) {
        $("#asd").val("asd")
        this.ws.send(this.sayMsg);
      }
    },
    mounted: function () {
      var image = document.getElementById('background');
      var canvass = document.getElementById('canvass');
      canvass.width = window.innerWidth;
      canvass.height = window.innerHeight;
      image.onload = function () {
        let engine = new RainyDay({
          image: this
        }, canvass);
        engine.rain([[0, 2, 200], [3, 3, 1]], 100);
      };
      image.crossOrigin = 'anonymous';
      image.src = 'static/201704131205597084.jpg';
    }
  }
</script>

<style scoped>
  #canvass {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .sss {
    position: absolute;
    z-index: 99999;
    color: #fff;
    top: 30%;
    left: 35%;
  }

  .nnc {
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: 1;
  }

  .bac {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

</style>

<template>
  <div>
    <header>
      <a href="#" class="logo">
        <img src="/static/time.png" alt="logo" style="width: 45px;height: 45px"/>
      </a>
      <div class="btn-group">
        <button class="btn btn-primary">
          Srinu Baswa
        </button>
        <button class="btn btn-primary dropdown-toggle">
          <span class="caret">
          </span>
        </button>
        <ul class="dropdown-menu pull-right">
          <li>
            <a href="#">
              Edit Profile
            </a>
          </li>
          <li>
            <a href="#">
              Account Settings
            </a>
          </li>
          <li>
            <a href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </header>
    <div class="container-fluid">
      <div class="dashboard-container">
        <div class="top-nav">
          <ul>
            <li>
              <a href="" class="selected">
                <div class="fs1" aria-hidden="true">流言</div>
                WHISPER
              </a>
            </li>
            <li>
              <a href="">
                <div class="fs1" aria-hidden="true">蜚语</div>
                TALE
              </a>
            </li>
            <li>
              <router-link id="logo" to="/whisper"></router-link>
            </li>
          </ul>
          <div class="clearfix">
          </div>
        </div>
        <div class="sub-nav">
          <ul>
          </ul>
        </div>
        <!--asd-->
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../static/css/wysiwyg/bootstrap-wysihtml5.css"
  import "../../static/css/wysiwyg/wysiwyg-color.css"
  import "../../static/css/main.css"
  import "../../static/css/charts-graphs.css"
  import Whisper from "./Whisper";

  export default {
    name: "Index",
    components: {Whisper}
  }
</script>

<style scoped>

</style>

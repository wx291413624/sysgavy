<template>
  <div class="dashboard-wrapper">
    <div class="left-sidebar">
      <div class="row-fluid">
        <div class="span12">
          <div class="widget">
            <div class="widget-header">
              <div class="title">
                Whisper Table
              </div>
              <span class="tools">
                      <a class="fs1" aria-hidden="true" data-icon="&#xe090;"></a>
                    </span>
            </div>
            <div class="widget-body">
              <table class="table table-condensed table-striped table-bordered table-hover no-margin">
                <thead>
                <tr>
                  <th style="width:40%">
                    Whisper
                  </th>
                  <th style="width:20%" class="hidden-phone">
                    Time
                  </th>
                  <th style="width:10%" class="hidden-phone">
                    Icon
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                            <span class="name">
                              Mahendra Singh Dhoni
                            </span>
                  </td>
                  <td class="hidden-phone">
                    Baswa #567
                  </td>
                  <td class="hidden-phone">
                            <span class="label label label-info">
                              New
                            </span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../static/css/wysiwyg/bootstrap-wysihtml5.css"
  import "../../static/css/wysiwyg/wysiwyg-color.css"
  import "../../static/css/main.css"
  import "../../static/css/charts-graphs.css"

  export default {
    name: "Whisper"
  }
</script>

<style scoped>

</style>

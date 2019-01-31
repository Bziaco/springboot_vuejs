<template>
  <div>
    <div class="w-100 p-2" style="background-color: rgba(0, 0, 0, 0.03)">
      Browser
    </div>
    <v-jstree :data="data" allow-batch whole-row draggable @item-click="itemClick" ref="tree"></v-jstree>
  </div>
</template>

<script>
  import VJstree from 'vue-jstree'
  export default {
    name: 'app',
    components: {
      VJstree
    },
    data() {
      return {
        data: [{
          "text": "Server",
          "children": [
            {
              "text": "OracleSql"
            },
            {
              "text": "MS Sql"
            },
            {
              "text": "MySql",
              "opened": true,
              "children": [
                {
                  "text": "Databases",
                  "children": [
                    {
                      "text": "wdtdb"
                    },
                    {
                      "text": "wdttestdb"
                    },
                    {
                      "text": "wdtpsqldb"
                    }
                  ]
                }
              ]
            }
          ]
        }]
      }
    }
  }
</script>

<style scoped>

</style>

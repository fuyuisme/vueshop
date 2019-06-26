<template>
  <div>
    user
  </div>
</template>
<script>
export default {
  data () {
    return {
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      }
    }
  },
  async created () {
    let data = await this.axios.get('/users', { params: this.queryInfo })
    console.log(data)
  }
}
</script>

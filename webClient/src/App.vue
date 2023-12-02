<template>
  <div class="main">
    <div class="head">头部</div>
    <div class="body">中部</div>
    <div class="foot">尾部</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  setup() {
    return {
      
    }
  }
}

</script>
  


<style scoped>
.main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.head{
  width: 100%;
  height: 10%;
  background-color: #f00;
}

.foot{
  width: 100%;
  height: 10%;
  background-color: #f00;
}

</style>

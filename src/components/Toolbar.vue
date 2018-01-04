<script> 
    //import store from '../vuex/store.js'
    import {mapGetters,mapState} from 'vuex';
    export default { 
      computed:mapGetters(
        {
          activeNoteFavorite:state=>state.getters.activeNoteFavorite
        }
      ),  
       methods:{
        add_note(){
          //store.dispatch('deleteNote'); 这样的话上面必须引入import store from '../vuex/store.js'
          this.$store.dispatch('addNote');  
        },
        delete_note(){
          this.$store.dispatch('deleteNote');
        },
        toggle_note(){
          this.$store.dispatch('toggleNote');
        }
       }
    }
</script>    
<template>
    <div id="tool_bar">
       <i class="glyphicon glyphicon-plus" @click="add_note"></i>
       <i class="glyphicon glyphicon-star" :class="activeNoteFavorite ? 'starred':''" @click="toggle_note"></i>
       <i class="glyphicon glyphicon-remove" @click="delete_note"></i>
    </div>
</template>
<style lang='scss' scoped>
#tool_bar {
    float: left;
    width: 80px;
    height: 100%;
    background-color: #30414D;
    padding: 35px 25px 25px 25px;
    i {
        font-size: 30px;
        padding-bottom: 35px;
        display: block;
        text-align: center;
        color: #f5f5f5;
    }
    .starred {
        color: #F7AE4F;
    }
}
</style>
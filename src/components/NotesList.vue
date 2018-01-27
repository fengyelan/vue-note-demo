  
<template>
    <div id="notes_list">
     <div class="list-header">
     	<h2>Notes</h2>
     	<div class="btn-group btn-group-justified" role="group">
     		<div class="btn-group" role="group">
     			<button type="button" class="btn btn-default" @click="show='all'" :class="{active:show==='all'}">All Notes</button>
     		</div>
     		<div class="btn-group" role="group">
     			<button type="button" class="btn btn-default" @click="show='favorites'" :class="{active:show==='favorites'}">Favorites</button>
     		</div>
     	</div>
     </div>

     <div class="list-group-container">
     	<div class="list-group">
     		<a href="#"  v-for="note in (show==='all'?$store.getters.allnotes:$store.getters.allfavorites)" :class="{active:note===$store.state.activeNote}" @click="update_active_note(note)" >
     			<h4>{{note.text.trim().substring(0, 30)}}</h4>
          <i class="glyphicon glyphicon-star flag" v-if="note.favorite"></i>
     		</a>
     		
     	</div>	
     </div>
       
    </div>
</template>
<style lang='scss' scoped>
  #notes_list {
    float: left;
    width: 300px;
    height: 100%;
    background-color: #F5F5F5;
    font-weight: 400;
    .list-header {
        padding: 5px 25px 25px 25px;
        h2 {
            font-weight: 300;
            text-transform: uppercase;
            text-align: center;
            font-size: 22px;
            padding-bottom: 8px;
        }
    }
    a {
        display: block;
        position: relative;
        padding:10px;

        h4 {
            font-weight: 300;
            font-size: 15px;
        }
        .flag {
            font-size: 22px;
            display: block;
            color: #F7AE4F;
            position: absolute;
            right: 3%;
            top: 50%;
            transform: translate(0,-50%);
        }
    }
    a.active{
        background: #337ab7;
        color:#ffffff;
    }
}
</style>
<script>
    export default {
       data(){
            
          return {
            show:'all'
          }
       },
       methods:{
        update_active_note(note){
          this.$store.dispatch('updateActiveNote',note);
        }
       }
    }
</script>  
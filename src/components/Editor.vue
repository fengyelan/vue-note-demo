<script>
    import store from '../vuex/store.js'
    export default {
       methods:{
        edit_note(){
          let activeNoteText = this.$store.state.activeNote.text;
          store.dispatch('editNote',activeNoteText);
        }
       }
    }
</script>    
<template>
    <div id="editor-note">
     <textarea v-model="$store.state.activeNote.text"
      @input="edit_note"
      class="form-control">  	
     </textarea>   
    </div>
</template>
<style lang='scss' scoped>
  #editor-note {
    height: 100%;
    margin-left: 380px;
    textarea {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
}
</style>
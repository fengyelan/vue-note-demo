import './index.scss';
import Vue from 'vue';
import store from './vuex/store.js';
import editor from './components/Editor';
import notelist from './components/NotesList'
import toolbar from './components/Toolbar'

new Vue({
    el: '#app',
    store,
    components: {
        editor,
        notelist,
        toolbar
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes:[],
	activeNote:{}
}

const getters = {
	allnotes(state){
		return state.notes
	},
	allfavorites(state){
		return state.notes.filter(note=>note.favorite)
	},
	activeNoteFavorite(state){
		return state.activeNote && state.activeNote.favorite
	}
}

const mutations = {
	ADD_NOTE(state){
		console.log("add")
		const newNote = {
			text:'New note',
			favorite:false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	EDIT_NOTE(state,text){
		state.activeNote.text = text
	},
	DELETE_NOTE(state){
		state.notes.splice(state.activeNote,1)
		state.activeNote = state.notes[0]
	},
	TOGGLE_FAVORITE(state){

		state.activeNote.favorite = !state.activeNote.favorite
	},
	SET_ACTIVE_NOTE(state,note){
		state.activeNote = note
	}
}

const actions = {
	addNote({commit}){
		commit('ADD_NOTE')
	},
	deleteNote({commit}){
		commit('DELETE_NOTE')
	},
	toggleNote({commit}){
		commit('TOGGLE_FAVORITE')
	},
	editNote({commit},text){
		commit('EDIT_NOTE',text)
	},
	updateActiveNote({commit},note){
		commit('SET_ACTIVE_NOTE',note)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
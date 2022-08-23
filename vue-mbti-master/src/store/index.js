import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import question from './modules/question'
import result from './modules/result'

export default new Vuex.Store({
	namespaced: true,
	modules: {
		question,
		result,
	},
})

export default {
    namespaced:true,
    state: {
        skills: []
    },
    mutations: {
        SET_SKILLS: (state,skills) => {
            state.skills = skills;
        },
        ADD_SKILL: (state, newSkill) => {
          state.skills.push(newSkill);
        }
    },
    actions: {
        async addSkill({commit},skill) {
            try {
               const response = await this.$axios.post('/skills',skill);
               commit("ADD_SKILL", response.data);
               return response
            } catch (error) {
                throw new Error(
                    error.response.data.error ||error.response.data.message
                );
            }
        },
        async fetchSkills({commit},skill) {
            try {
               const response = await this.$axios.get('/skills/1',skill);
               commit('SET_SKILLS',response.data);
               return response
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        }
    }
}
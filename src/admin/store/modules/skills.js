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
        },
        REMOVE_SKILL: (state,deletedSkillId)=> {
            state.skills = state.skills.filter(skill => skill.id != deletedSkillId)
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
               const response = await this.$axios.get('/skills/128',skill);
               commit('SET_SKILLS',response.data);
               return response
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        },
        async removeSkill({commit},skill) {
            try {
               const response = await this.$axios.delete(`/skills/${skillId}`);
               commit('REMOVE_SKILL',skillId);
               return response
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                );
            }
        }
    }
}
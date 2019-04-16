export default {
    namespaced: true,
    state: {
      works: [],
      editBlock: {
        show: false,
        editMode: false
      },
      changedWork: {},
      editedTags: []
    },
    mutations: {
      SHOW_FORM: (state) => {
            state.editBlock.show = true;
      },
      
      CLOSE_FORM: (state) => {
            state.editBlock.show = false;
      },
      SET_WORKS: (state, works) => {
        state.works = works;
      },
  
      ADD_WORK: (state, work) => {
        state.works.push(work);
      },
  
      REMOVE_WORK: (state, deletedWorkId) => {
        state.works = state.works.filter(work =>
          work.id !== deletedWorkId
        );
      },
  
      EDIT_WORK: (state, changedWork) => {
        state.works = state.works.map(work =>
          work.id === changedWork.id ? changedWork : work
        );
      },
  
      TURN_EDIT_MODE_ON: (state, work) => {
        state.editBlock.editMode = true;
        state.changedWork = {...work};
        // state.editedTags = state.changedWork.techs.split(',');
      },
  
      TURN_EDIT_MODE_OFF: (state) => {
        state.editBlock.editMode = false;
        state.changedWork = {};
        // state.editedTags = [];
      },
  
    //   REMOVE_TAG: (state, deletedTag) => {
    //     state.editedTags = state.editedTags.filter(tag =>
    //       tag !== deletedTag
    //     );
    //   },
  
    //   ADD_TAGS: (state, addingTags) => {
    //     let tagsForAdd = addingTags.split(',');
    //     tagsForAdd = tagsForAdd.filter(tag => tag !== "");
    //     state.editedTags = [...state.editedTags, ...tagsForAdd];
    //   },
  
  
    },
    actions: {
      async addWork({ commit }, work) {
        try {
          const response = await this.$axios.post("/works", work)
          commit('ADD_WORK', response.data);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      },
  
      async fetchWorks({ commit }) {
        let responseUserId, userId;
        try {
          responseUserId = await this.$axios.get("/user");
          userId = responseUserId.data.user.id;
        } catch(error) {
          console.log(error.message);
        }
        try {
          const response = await this.$axios.get(`/works/${userId}`);
          commit("SET_WORKS", response.data);
          return response;
        } catch (error) {
          console.log(error.message);
        }
      },
  
      async removeWork({ commit }, workItemId) {
        try {
          const response = await this.$axios.delete(`/works/${workItemId}`);
          commit("REMOVE_WORK", workItemId);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      },
  
      async editWork({ commit }, workData) {
        const formData = new FormData();

        Object.keys(workData).forEach(key => {
            formData.append(key,workData[key]);
        })


        try {
          const response = await this.$axios.post(`/works/${workData.id}`, formData);
          commit("EDIT_WORK", response.data.work);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      }
    }
  };
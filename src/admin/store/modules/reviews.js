export default {
    namespaced: true,
    state: {
      reviews: [],
      editBlockReview: {
        show: false,
        editMode: false
      },
      changedReview: {}
    },
    mutations: {
      SHOW_FORM: (state) => {
        state.editBlockReview.show = true;
        },
    
      CLOSE_FORM: (state) => {
        state.editBlockReview.show = false;
        },

      SET_REVIEWS: (state, reviews) => {
        state.reviews = reviews;
        },
  
      ADD_REVIEW: (state, review) => {
        state.reviews.push(review);
      },
  
      REMOVE_REVIEW: (state, deletedReviewId) => {
        state.reviews = state.reviews.filter(review =>
          review.id !== deletedReviewId
        );
      },
  
      EDIT_REVIEW: (state, editedReview) => {
        state.reviews = state.reviews.map(review =>
          review.id === editedReview.id ? editedReview : review
        );
      },
  
      
  
      TURN_EDIT_MODE_ON: (state) => {
        state.editBlockReview.editMode = true;
      },
  
      TURN_EDIT_MODE_OFF: (state) => {
        state.editBlockReview.editMode = false;
      },
  
      SET_EDITED_REVIEW: (state, review) => {
        state.changedReview = {...review};
      }
    },
    actions: {
      async addReview({ commit }, review) {
        try {
          const response = await this.$axios.post("/reviews", review)
          commit('ADD_REVIEW', response.data);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      },
  
      async fetchReviews({ commit }) {
        let responseUserId, userId;
        try {
          responseUserId = await this.$axios.get("/user");
          userId = responseUserId.data.user.id;
        } catch(error) {
          console.log(error.message);
        }
        try {
          const response = await this.$axios.get(`/reviews/${userId}`);
          commit("SET_REVIEWS", response.data);
          return response;
        } catch (error) {
          console.log(error.message);
        }
      },
  
      async removeReview({ commit }, reviewId) {
        try {
          const response = await this.$axios.delete(`/reviews/${reviewId}`);
          commit("REMOVE_REVIEW", reviewId);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      },
  
      async editReview({ commit }, review) {
        try {
          const response = await this.$axios.post(`/reviews/${review.id}`, review.data);
          commit("EDIT_REVIEW", response.data.review);
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      }
    }
  };
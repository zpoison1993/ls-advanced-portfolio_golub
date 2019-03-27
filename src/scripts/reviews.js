import Vue from "vue";
import Flickity from 'vue-flickity';

const review = {
    template: "#review",
    props: {
        review: Object
    }
};

new Vue({
    el: "#reviews",
    template: "#reviews-list",
    components: {
        Flickity,
        review
        
    },
    data() {
        return {
            reviews: "",
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                groupCells: true
                // any options from Flickity can be used
              }
        };
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;

                return item;
            });
        },
        next() {
            this.$refs.flickity.next();
          },
          
          previous() {
            this.$refs.flickity.previous();
          }
    },
    created() {
        const data = require('../data/reviews.json');
        this.reviews = this.makeArrWithRequiredImages(data);
    }
})
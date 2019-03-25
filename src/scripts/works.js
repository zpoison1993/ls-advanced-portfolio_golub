import Vue from "vue";

const thumbs = {
    template:"#slider-thumbs",
    props: {
        works: Array,
        currentWork: Object
    }
}
const btns = {
    template:"#slider-btns"
}
const tags = {
    template:"#slider-tags",
    props: {
        tagsArray: Array
    }
}


const display = {
    template:"#slider-display",
    components: {
        btns, thumbs
    },
    props: {
        works: Array,
        currentWork: Object
    },
    computed: {
        reversedWorks() {
            const works = [...this.works];
            return works.reverse();
        }
    }
}

const info = {
    template:"#slider-info",
    components: {
        tags
    },
    props: {
        currentWork: Object
    },
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(',')
        }
    }
}

new Vue({
    template: '#slider-container',
    el: "#slider-component",
    components: {
        display,
        info
    },
    data() {
        return {
            works: [],
            // currentWork: {},
            currentIndex: 0
        };
    },
    computed: {
        currentWork() {
           return this.works[this.currentIndex]; 
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForCurrentIndex(value);
        }

    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;

                return item;
            });
        },
        handleSlide(direction) {
            switch (direction) {
                case 'next' :
                this.currentIndex++;
                break;
                case 'prev' :
                this.currentIndex--;
                break;
            }
        },
        makeInfiniteLoopForCurrentIndex(value) {
            const worksAmount = this.works.length-1; 
            if (value > worksAmount) this.currentIndex = 0;
            if(value < 0) this.currentIndex = worksAmount;
        }
    },
    created() {
        const data = require('../data/works.json');
        this.works = this.makeArrWithRequiredImages(data);

        // this.currentWork = this.works[1];
    }
})
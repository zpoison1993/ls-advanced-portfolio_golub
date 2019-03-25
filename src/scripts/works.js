import Vue from "vue";

const thumbs = {
    template:"#slider-thumbs",
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number
    },
    // methods: {
    //     getTransform() {
    //         const dY = this.$refs['carousel'];
    //         const dYTransform = 
    //             getComputedStyle(dY).getPropertyValue('transform:translateY');
    //         console.log(dYTransform)
    //     }
    // }
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
        currentWork: Object,
        currentIndex: Number
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
        getTransform(data) {
        const dY = this.$refs['carousel'];
        const dYTransform = getComputedStyle(dY).getPropertyValue('translateY');
        return console.log(dYTransform)
        },
        handleSlide(direction) {
            switch (direction) {
                case 'next' :
                this.currentIndex++;
                
                // getTransform(data);
                break;
                case 'prev' :
                this.currentIndex--;
                // getTransform(data);
                break;
            }
        },
       
        makeInfiniteLoopForCurrentIndex(value) {
            const worksAmount = this.works.length-1; 
            if (value > worksAmount) this.currentIndex = 0;
            if(value < 0) this.currentIndex = worksAmount;
        },

    },
    created() {
        const data = require('../data/works.json');
        this.works = this.makeArrWithRequiredImages(data);

        // this.currentWork = this.works[1];
    },
    mounted() {
        // const carousel = document.querySelector('.works__preview-item');
        // carousel.addEventListener(click, (e)=> {
        //     console.log(getComputedStyle(carousel.getPropertyValue('width')))
        // })
    }
})
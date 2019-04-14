import Vue from "vue";
import axios from 'axios';

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
            return this.currentWork.techs.split(',')
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
                const requiredPic = `https://webdev-api.loftschool.com/${item.photo}`;
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
            const minilist = document.querySelector('.works__preview-minilist')
            
            switch (direction) {
                case 'next' :
                this.currentIndex++;
                console.log(this.currentIndex);
                console.log(this.works.length);
                if(this.currentIndex>2 && this.currentIndex<=this.works.length-1) {
                    
                    minilist.style.transform = "translateY(20%)";
                    minilist.style.transition = "1s";

                }
                else if (this.currentIndex>4) {
                    minilist.style.transform = "translateY(-40%)";
                    minilist.style.transition = "1s";
                }

                // getTransform(data);
                break;
                case 'prev' :
               
                this.currentIndex--;
                console.log(this.currentIndex);
                // getTransform(data);
                // if(this.currentIndex<3 && this.currentIndex>0) {
                if(this.currentIndex>2 ) {    
                    minilist.style.transform = "translateY(-20%)";
                    minilist.style.transition = "1s";
                }
                else if(this.currentIndex==2) {
                    minilist.style.transform = "translateY(-40%)";
                    minilist.style.transition = "1s";
                }
                else if (this.currentIndex<0) {
                    minilist.style.transform = "translateY(20%)";
                    minilist.style.transition = "1s";
                }
                break;
            }
        },
       
        makeInfiniteLoopForCurrentIndex(value) {
            const worksAmount = this.works.length-1; 
            if (value > worksAmount) this.currentIndex = 0;
            if(value < 0) this.currentIndex = worksAmount;
            
        },

        handleClick(event) {
            const links = document.querySelectorAll('.works__preview-item');
            Array.from(links).forEach(el => {
                el.classList.remove('active');
            });
            event.parentNode.classList.add('active');
            const index = [].indexOf.call(links, event.parentNode);
            const worksAmount = this.works.length - 1;
            this.currentIndex= worksAmount - index;
    }
            
          

    },
    created() {
        // const data = require('../data/works.json');
        axios.get('https://webdev-api.loftschool.com/works/128')
        .then(response => {
            const data = response.data;
            this.works = this.makeArrWithRequiredImages(data);
        }).catch(error => console.error(error.message));
        // this.currentWork = this.works[1];
    }
})
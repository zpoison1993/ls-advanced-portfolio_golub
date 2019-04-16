import Vue from 'vue';
import axios from "axios";

const skill = {
    template:"#skill",
    props: {
        // skillName:String,
        // skillPercent: Number
        skill: Object
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs['color-circle'];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
            const percent = (dashArray / 100) * (100 - this.skill.percent);
            circle.style.strokeDashoffset = percent;
            // console.log(dashArray);
        }
    },
    mounted() {
        this.drawColoredCircle();
    }
}

const skillsRow = {
    template:"#skills-row",
    components: {
        skill
    },
    props: {
        category: Object,
        skills: Array
    }
}


new Vue({
    el: '#skills-component',
    template: '#skills-list',
    components: {
        skillsRow
    },
    data() {
        return {
            categories: [],
            skills: [],
        }
    },
    methods: {
        filterSkillsByCategory(categoryId) {
          return this.skills.filter(skill => skill.category === categoryId);
        }
      },

    created() {
        // const data = require('../data/skills.json');
        // this.skills = data;
        axios.get("https://webdev-api.loftschool.com/categories/128")
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => console.error(error));
    
        axios.get("https://webdev-api.loftschool.com/skills/128")
        .then(response => {
          this.skills = response.data;
        })
        .catch(error => console.error(error));

    }
})
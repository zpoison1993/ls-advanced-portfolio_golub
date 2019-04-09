<template lang="pug">
    section.tabs
        .container.tabs__container
            ul.tabs
                - var usertabs = ['Обо мне', 'Работы','Отзывы'];
                each item in usertabs
                    li.tabs__item
                        a(href="#").tabs__link #{item}
</template>


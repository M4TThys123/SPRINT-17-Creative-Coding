console.log('Vue.js werkt')

const navigation = new Vue({
    el: '#navigation',
    data: {
        navigaion: [
            {
                url: 'index.html',
                name: 'Home'
            },
            {
                url: 'about.html',
                name: 'Diensten'
            },
            {
                url: 'skeleton.html',
                name: 'Skeleton Loader'
            },
            {
                url: 'vue.html',
                name: 'Vue.js'
            },
        ]
    }
})

Vue.component('navigation', {
    template: `
    <header>
        <nav class="">
            <ul>
                <li v-for="nav in navigaion">
                    <a :href="nav.url" class="nav-ancor">{{ nav.name }}</a>
                </li>
            </ul>
        </nav>
    </header>
    `,

    data() {
        return{
            // Nav list
            navigaion: [
                {
                    url: '/',
                    name: 'Home'
                },
                {
                    url: '/about',
                    name: 'Diensten'
                },
                {
                    url: '/about',
                    name: 'Partners'
                },
                {
                    url: '/about',
                    name: 'About'
                },
            ]
        }
    },
    computed: {

    },

} )
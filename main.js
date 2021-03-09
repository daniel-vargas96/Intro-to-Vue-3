const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            total: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            url: 'https://www.daniel-vargas.com/',
            description: 'These socks feature a ribbed cushioned design with a Vans logo at the top, perfect for every occasion.80% Cotton, 18% Nylon, 2% Spandex.',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.variants[this.selectedVariant].quantity--
        },
        subtractToCart() {
            this.cart -= 1
            this.variants[this.selectedVariant].quantity++
        },
        updateVariant(index) {
            this.selectedVariant = index

        },
        addTotal() {
            this.total += this.cart
            this.cart = 0
            this.total += this.cart
        },
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }

})

const mountedApp = app.mount('#app')

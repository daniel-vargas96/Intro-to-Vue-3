const app = Vue.createApp({
    data() {
        return {
            cart:0,
            total:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            inStock: true,
            image: './assets/images/socks_green.jpg',
            url: 'https://www.daniel-vargas.com/',
            description: 'These socks feature a ribbed cushioned design with a Vans logo at the top, perfect for every occasion.80% Cotton, 18% Nylon, 2% Spandex.',
            inventory: 15,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
      addToCart() {
        this.cart += 1
        this.inventory--
      },
      subtractToCart() {
        this.cart -= 1
        this.inventory++
      },
      updateImage(variantImage) {
       this.image = variantImage
      },
      addTotal() {
        this.total += this.cart
        this.cart = 0
        this.total += this.cart
      },

    }
})

const mountedApp = app.mount('#app')

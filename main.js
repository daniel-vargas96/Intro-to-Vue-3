const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.daniel-vargas.com/',
            description: 'These socks feature a ribbed cushioned design with a Vans logo at the top, perfect for every occasion.80% Cotton, 18% Nylon, 2% Spandex.',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ]
        }
    }
})

const mountedApp = app.mount('#app')

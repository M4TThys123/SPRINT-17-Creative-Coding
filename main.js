Vue.component('message', {
    props: {
        message: {
            type: String,
            required: true,
            default: "Hi"
        }
    },
    template: ``,
    data() {

    }
}),

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `
      <div class="product">
      <!--        Product image-->
      <div class="product-image">
        <img v-bind:src="image"
             alt="product image"
             class="product-img">
      </div>

      <div class="product-info">
        <!--            Title-->
        <h1>{{ title }}</h1>

        <!--            In stock-->
        <div>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out!</p>
          <p v-else>Out of stock</p>
          <p>Shipping is: {{ shipping }}</p>
        </div>

        <div>
          <p v-show="inventory > 1">{{ description }}</p>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <!--            Kleuren selecteren    -->
          <div class="d-flex mb-1">
            <div v-for="(variant, index) in variants"
                 :key="variant.id"
                 class="color-box mr-1"
                 :style="{ backgroundColor: variant.color}"
                 @mouseover="updateProduct(index)">
            </div>
          </div>

          <!--            Deze manier wekt niet geen idee waarom-->
          <button v-on:click="addToCart"
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock}">Add to cart
          </button>


          <!--            <button v-on:click="cart += 1">Add to cart</button>-->
          <div class="d-flex">
            <button v-on:click="decrementCart">-</button>

            <div class="cart">
              <p>Cart ({{ cart }})</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    `,
    // Data
    data() {
        return {
            // Infomratie
            product: 'Socks',
            brand: 'JBI',
            description: 'A pair of warm fuzzy socks',
            inventory: 11,

            // Foto
            // image: './assets/sock.jpeg',
            selectedVariant: 0,

            // Eigenschappen
            details: ['80% cutton', '20 poleyester', 'Top-G'],
            variants: [
                {
                    id: 0,
                    color: 'green',
                    variantsImage: './assets/sock.jpeg',
                    variantQuantity: 10

                },
                {
                    id: 1,
                    color: 'blue',
                    variantsImage: './assets/sock-blue.jpeg',
                    variantQuantity: 0
                }
            ],

            // Winkelwagen
            cart: 0,
        }
    },
    // Functies
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        decrementCart: function () {
            if (this.cart > 0) {
                this.cart--;
            }
        },
        updateProduct: function (index) {
            this.selectedVariant = index
            console.log(index)
        }
    },

    // Samenvoeging
    // het is een variabele die meer bij elkaar optelt
    // Voordeel is dat hij het automatisch ziet als er aanpassingen komen.
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantsImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },

    }
})

const nav = new Vue({
    el: '#nav',
    data: {
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
})

const main = new Vue({
    // Element in de DOM
    el: '#main'
})

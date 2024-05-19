<template>

<div class="container-fluid full-height center-content">
    <div class="col-md-6">
        <div class="text-end">
            <router-link to="/">Generate Password</router-link>
        </div>
        <div class="blue-container">
            <div class="me-5">
                <h1 class="title">Pizza Ordering System</h1>
                <div>
                    <input type="radio" id="small" value="small" v-model="currentPizza.size">
                    <label for="small" class="ms-2">Small (RM15)</label>
                </div>
                <div>
                    <input type="radio" id="medium" value="medium" v-model="currentPizza.size">
                    <label for="medium" class="ms-2">Medium (RM22)</label>
                </div>
                <div>
                    <input type="radio" id="large" value="large" v-model="currentPizza.size">
                    <label for="large" class="ms-2">Large (RM30)</label>
                </div>
                <div>
                    <input type="checkbox" id="pepperoni" v-model="currentPizza.addPepperoni" :disabled="currentPizza.size === 'large'">
                    <label for="pepperoni" class="ms-2">Add Pepperoni</label>
                </div>
                <div>
                    <input type="checkbox" id="extraCheese" v-model="currentPizza.addExtraCheese">
                    <label for="extraCheese" class="ms-2">Extra Cheese</label>
                </div>
                <div class="mt-2">
                    <button @click="addPizza" class="btn btn-sm btn-primary">Add Pizza</button>
                </div>
            </div>

            <div class="order-details w-100">
                <div class="d-flex justify-content-between align-items-center">
                    <h2>Order Details</h2>
                <button @click="emptyOrder" v-if="pizzas.length > 0" class="btn btn-primary btn-sm">Empty Order</button>
                </div>
                <div v-for="(pizza, index) in pizzas" :key="index" class="position-relative">
                    <hr>
                    <p class="mb-0">{{ index + 1 }}. {{ pizza.size }} pizza: RM{{ prices[pizza.size] }}</p>
                    <p v-if="pizza.addPepperoni" class="mb-0">+ Pepperoni: RM{{ pepperoniPrices[pizza.size] }}</p>
                    <p v-if="pizza.addExtraCheese" class="mb-0">+ Extra Cheese: RM6</p>
                    <p class="mb-0">Total RM{{ calculatePizzaTotal(pizza) }}</p>
                    <button @click="deletePizza(index)" class="position-absolute btn btn-sm btn-danger" style="top:10px;right:0">Delete</button>
                </div>
                <hr>
                <p>Grand Total: RM{{ grandTotal }}</p>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            currentPizza: {
                size: '',
                addPepperoni: false,
                addExtraCheese: false,
            },
            pizzas: [],
            prices: {
                small: 15,
                medium: 22,
                large: 30,
            },
            pepperoniPrices: {
                small: 3,
                medium: 5,
                large: 0,
            },
        };
    },
    computed: {
        grandTotal() {
           return this.pizzas.reduce((total, pizza) => {
                return total + this.calculatePizzaTotal(pizza);
            }, 0);
        },
    },
    methods: {
        addPizza() {
            if (this.currentPizza.size) {
                this.pizzas.push({...this.currentPizza});
                this.currentPizza.size = '';
                this.currentPizza.addPepperoni = false;
                this.currentPizza.addExtraCheese = false;
            }
        },
        calculatePizzaTotal(pizza) {
            let basePrice = this.prices[pizza.size];
            let pepperoniCost = pizza.addPepperoni ? this.pepperoniPrices[pizza.size] : 0;
            let extraCheeseCost = pizza.addExtraCheese ? 6 : 0;
            return basePrice + pepperoniCost + extraCheeseCost;
        },
        deletePizza(index) {
            this.pizzas.splice(index, 1);
        },
        emptyOrder() {
            this.pizzas = [];
        },
    },
};
</script>


<style scoped>
    .full-height {
        min-height: 100vh;
    }
    .center-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .blue-container {
        display: flex;
        align-content:center;
        background-color: #E0F3FF;
        padding: 20px;
        border-radius: 8px;
        max-width: 600px;
        margin: auto;
    }
    .title {
        font-size: 24px;
        margin-bottom: 20px;
    }
    .order-details {
        background-color: #FFFFFF;
        padding: 10px;
        border-radius: 8px;
        margin-top: 20px;
    }

</style>

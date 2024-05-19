<template>
    <div class="container-fluid full-height center-content">
        <div class="col-md-6">
            <div class="text-end">
                <router-link to="/order">Order Pizza</router-link>
            </div>
            <div class="password-display">
                <h1>{{ password }}</h1>
                <div>
                    <button class="btn btn-outline-secondary btn-sm" V:click="generatePassword" title="Regenerate" @click="regenPassword">Refresh</button>
                </div>
            </div>
            <div class="password-options">
                <h2>Customize your password</h2>
                <div class="d-flex justify-content-between align-items-center flex-row">
                    <div class="w-100 me-3">
                        <label for="passwordLength">Password Length</label>
                        <div class="form-group d-flex justify-content-between align-items-center py-2">
                            <input type="number" class="form-control me-2" style="width:100px" v-model="minLength">
                            <input type="range" class="form-range" min="1" max="50" v-model="minLength">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="includeUppercase">
                            <label class="form-check-label" >
                                Uppercase
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="includeLowercase">
                            <label class="form-check-label" >
                                Lowercase
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="includeNumbers" >
                            <label class="form-check-label" >
                                Numbers
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="includeSymbols">
                            <label class="form-check-label" >
                                Symbols
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .full-height {
        height: 100vh;
    }
    .center-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .password-display {
        background-color: #f8f9fa;
        border-radius: .25rem;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    .password-display h1 {
        margin: 0;
        font-size: 1.5rem;
    }
    .password-options {
        background-color: #e9f5fc;
        padding: 1rem;
        border-radius: .25rem;
    }
    .form-check-label {
        margin-bottom: 0;
    }
</style>

<script>
export default {
    data(){
        return {
            password: '',
            symbols: ['!', '#', '$', '%', '&', '(', ')', '*', '+', '@', '^'],
            includeLowercase: true,
            includeUppercase: true,
            includeNumbers: true,
            includeSymbols: true,
            minLength: 14,
        }
    },
    mounted() {
        this.regenPassword();
    },
    watch: {
        includeLowercase: 'regenPassword',
        includeUppercase: 'regenPassword',
        includeNumbers: 'regenPassword',
        includeSymbols: 'regenPassword',
        minLength: 'regenPassword'
    },
    methods: {
        regenPassword: function(e) {
            let characters = '';
            const lowercase = 'abcdefghijklmnopqrstuvwxyz';
            const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '0123456789';
            const symbols = this.symbols.join('');

            if (this.includeLowercase) {
                characters += lowercase;
            }
            if (this.includeUppercase) {
                characters += uppercase;
            }
            if (this.includeNumbers) {
                characters += numbers;
            }
            if (this.includeSymbols) {
                characters += symbols;
            }

            if (!characters) {
                this.password = 'Please select at least one character set';
                return;
            }

            this.password = Array.from({ length: this.minLength }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
        }
    }
}
</script>

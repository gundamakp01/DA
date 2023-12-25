<template>
    <section id="signup">
        <div class="container">
            <router-link to="/" aria-current="page">
                <img src="../assets/img/logo3.png" alt="logo1">
            </router-link>
            <h1>Sign Up</h1>
            <h3 class="input-errors mb-3 text-center">{{ errorCode }}</h3>
            <label for="name">User Name</label>
            <input type="text" v-model="v$.name.$model" id="name" placeholder="User Name">
            <div class="input-errors" v-for="(error, index) of v$.name.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="email">E-Mail</label>
            <input type="email" v-model="v$.email.$model" id="email" placeholder="Email Address">
            <div class="input-errors" v-for="(error, index) of v$.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="password">Password</label>
            <input type="text" v-model="v$.password.$model" id="password" placeholder="Password">
            <div class="input-errors" v-for="(error, index) of v$.password.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="password">Confirm Password</label>
            <input type="text" v-model="v$.confirm_password.$model" id="confirm-password" placeholder="Confirm Password">
            <div class="input-errors" v-for="(error, index) of v$.confirm_password.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="password">Phone Number</label>
            <input type="text" v-model="v$.phone_number.$model" id="phone-number" placeholder="Phone Number">
            <div class="input-errors" v-for="(error, index) of v$.phone_number.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <button @click="submitForm" type="button">Sign Up</button>

            <!-- <div class="row w-100 px-md-3">
                <div class="col-md-6 ps-md-0">
                    <button @click="GoogleSignUp" class="loginBtn loginBtn--google">
                        Login with Google
                    </button>
                </div>
                <div class="col-md-6 px-md-0">
                    <button @click="FacebookSignUp" class="loginBtn loginBtn--facebook">
                        Login with Facebook
                    </button>
                </div>
            </div> -->
            <router-link to="/login" class="link">
                <h4>Login</h4>
            </router-link>
        </div>
    </section>
</template>
  
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import { UserService } from '../services'
const pass = helpers.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
// import { mapState } from 'pinia';

export default {
    name: 'signup',
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            phone_number: '',
            errorCode: '',
            provider: ''
        }
    },
    validations() {
        return {
            name: {
                required: helpers.withMessage('* Please type Your User Name.', required),
                minLength: minLength(3),
                maxLength: maxLength(20)
            },
            email: {
                required: helpers.withMessage('* Please type Your Email Address.', required),
                email
            },
            password: {
                required: helpers.withMessage('* Please type Your Password.', required),
                pass: helpers.withMessage('* Must contain at least one number and one uppercase and lowercase letter required.', pass)
            },
            confirm_password: {
                required: helpers.withMessage('* Please Confirm Your Password.', required),
                pass: helpers.withMessage('* Must contain at least one number and one uppercase and lowercase letter required.', pass)
            },
            phone_number: {
                required: helpers.withMessage('* Please type Your Phone Number.', required),
                // pass: helpers.withMessage('* Must contain at least one number and one uppercase and lowercase letter required.', pass)
            },
        }
    },
    // computed: {
    //     ...mapState(useAuthStore, ['isAuthenticated'])
    // },
    methods: {
        async submitForm() {
            const isFormCorrect = await this.v$.$validate()

            if (isFormCorrect == true) {
                await UserService.signup({
                    name: this.name, 
                    email: this.email, 
                    password: this.password, 
                    confirm_password: this.confirm_password, 
                    phone_number: this.phone_number
                }).then(() => {
                    this.$router.push({ name: 'Home' })
                })
                // if (useAuthStore().user) {
                    
                // }
            }
        },
        // GoogleSignUp() {
        //     signInWithPopup(this.auth, this.provider)
        //         .then((result) => {
        //             // This gives you a Google Access Token. You can use it to access the Google API.
        //             GoogleAuthProvider.credentialFromResult(result);
        //             const user = result.user;
        //             console.log(user.providerData[0], 'signup with google');
        //             localStorage.setItem("Userdata", JSON.stringify(user.providerData[0]))
        //             Toast.fire({
        //                 icon: "success",
        //                 title: user.providerData[0].displayName + ", Sign in successfully",
        //             });
        //             this.$router.push({ name: 'Home' })
        //         }).catch((error) => {
        //             console.log(error, 'error');
        //         });
        // },
        // FacebookSignUp() {
        //     signInWithPopup(auth, provider)
        //         .then((result) => {
        //             // The signed-in user info.
        //             const user = result.user;
        //             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //             const credential = FacebookAuthProvider.credentialFromResult(result);
        //             const accessToken = credential.accessToken;

        //             // IdP data available using getAdditionalUserInfo(result)
        //             // ...
        //         })
        //         .catch((error) => {
        //             // Handle Errors here.
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             // The email of the user's account used.
        //             const email = error.customData.email;
        //             // The AuthCredential type that was used.
        //             const credential = FacebookAuthProvider.credentialFromError(error);

        //             // ...
        //         });
        // }
    },
    mounted() {
        // if (useAuthStore().isAuthenticated) {
        //     this.$router.push({ name: 'Home' })
        // }
        // this.provider = new GoogleAuthProvider();
    }
}
</script>


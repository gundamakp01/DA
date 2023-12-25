<template>
    <section id="login">
        <div class="container">
            <router-link to="/" aria-current="page">
                <img src="../assets/img/logo3.png" alt="logo1">
            </router-link>
            <h1>Login</h1>
            <h3 class="input-errors mb-3 text-center">{{ errorCode }}</h3>
            <div v-if="!isVerificationCodeSent">
                <label for="phone">Phone Number</label>
                <input type="text" v-model="v$.phone.$model" maxlength="10" id="phone" placeholder="1234512345">
                <div class="input-errors" v-for="(error, index) of v$.phone.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
                <div id="recaptcha-container"></div>
                <button @click="sendVerificationCode" type="button">Send verification code</button>
            </div>

            <div v-else>
                <label for="otp">Enter the verification code</label>
                <input type="text" v-model="v$.otp.$model" id="otp" placeholder="Enter the verification code">
                <div class="input-errors" v-for="(error, index) of v$.otp.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
                <button @click="verifyPhoneNumber">Verify</button>
            </div>

            <router-link to="/login" class="link">
                <h4>Login</h4>
            </router-link>
        </div>
    </section>
</template>
  
<script>
import Toast from '@/main';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
export default {
    name: 'login',
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            phone: '',
            otp: '',
            isVerificationCodeSent: false,
            confirmationResult: null,
            errorCode: '',
            recaptchaVerifier: null,
            auth: getAuth()
        }
    },
    validations() {
        return {
            phone: {
                required: helpers.withMessage('* Please Enter Your Phone Number.', required),
            },
            otp: {
                required: helpers.withMessage('* Please Enter Your the verification code.', required),
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("Userdata");
        if (user) {
            this.$router.push({ name: 'Home' })
        }
        this.auth.languageCode = 'en';
        this.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, this.auth);
        this.recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        });
    },
    methods: {
        async sendVerificationCode() {
            await this.v$.$validate();
            this.phoneNumber = '+91' + this.phone;
            signInWithPhoneNumber(this.auth, this.phoneNumber, this.recaptchaVerifier)
                .then((confirmationResult) => {
                    this.confirmationResult = confirmationResult
                    Toast.fire({
                        icon: "success",
                        title: "Sms Sent!",
                    });
                    this.isVerificationCodeSent = true
                })
                .catch((error) => {
                    console.log(error.code, 'code');
                    if (error.code == 'auth/too-many-requests') {
                        Toast.fire({
                            icon: "warning",
                            title: 'Too Many Attempts Try Later',
                        });
                    } else {
                        Toast.fire({
                            icon: "error",
                            title: 'Sms Not Sent!',
                        });
                    }
                })
        },
        async verifyPhoneNumber() {
            await this.v$.$validate()
            this.confirmationResult.confirm(this.otp)
                .then((result) => {
                    console.log(result, 'result');
                    localStorage.setItem("Userdata", JSON.stringify(result.user.providerData[0]))
                    Toast.fire({
                        icon: "success",
                        title: "Registeration Successfull!",
                    });
                    this.$router.push({ name: 'Home' })
                })
                .catch((error) => {
                    console.log(error);
                })
        },
    },
}
</script>
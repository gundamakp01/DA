<template>
    <section id="signup">
        <div class="container">
            <router-link to="/" aria-current="page">
                <img src="../assets/img/logo.png" alt="logo1">
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
            <input type="password" v-model="v$.password.$model" id="password" placeholder="Password">
            <div class="input-errors" v-for="(error, index) of v$.password.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="confirm-password">Confirm Password</label>
            <input type="password" v-model="v$.confirm_password.$model" id="confirm-password" placeholder="Confirm Password">
            <div class="input-errors" v-for="(error, index) of v$.confirm_password.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="phone-number">Phone Number</label>
            <input type="text" v-model="v$.phone_number.$model" id="phone-number" placeholder="Phone Number">
            <div class="input-errors" v-for="(error, index) of v$.phone_number.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="province">Tỉnh/ Thành phố</label>
            <select class="form-select" v-model="provinceId">
                <option :value="province.id" v-for="province in provinces">{{ province.name }}</option>
            </select>
            <div class="input-errors" v-for="(error, index) of v$.provinceId.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="district">Quận/ Huyện</label>
            <select class="form-select" v-model="districtId">
                <option :value="district.id" v-for="district in districts">{{ district.name }}</option>
            </select>
            <div class="input-errors" v-for="(error, index) of v$.districtId.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="ward">Xã/ Phường</label>
            <select class="form-select" v-model="wardId">
                <option :value="ward.id" v-for="ward in wards">{{ ward.name }}</option>
            </select>
            <div class="input-errors" v-for="(error, index) of v$.wardId.$errors" :key="index">
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
import { UserService, ProvinceService, WardService, DistrictService } from '../services'
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
            provider: '',
            provinceId: null,
            provinces: [],
            districtId: null,
            districts: [],
            wardId: null,
            wards: []
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
            provinceId: {
                required: helpers.withMessage('* Please select your province.', required),
                // pass: helpers.withMessage('* Must contain at least one number and one uppercase and lowercase letter required.', pass)
            },
            districtId: {
                required: helpers.withMessage('* Please select your district.', required),
                // pass: helpers.withMessage('* Must contain at least one number and one uppercase and lowercase letter required.', pass)
            },
            wardId: {
                required: helpers.withMessage('* Please select your ward.', required),
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
                    phone_number: this.phone_number,
                    province_id: this.provinceId,
                    district_id: this.districtId,
                    ward_id: this.wardId,
                }).then(() => {
                    this.$router.push({ name: 'Home' })
                })
                // if (useAuthStore().user) {

                // }
            }
        },
        async fetchProvices() {
            const response = await ProvinceService.getProvinces();
            this.provinces = response.data.data
        },
        async fetchDistricts() {
            const response = await DistrictService.getDistrictByProvince(this.provinceId);
            this.districts = response.data.data
        },
        async fetchWards() {
            const response = await WardService.getWardByDistrictId(this.districtId);
            this.wards = response.data.data
        }
    },
    watch: {
        provinceId: function (val) {
            this.fetchDistricts();
        },
        districtId: function (val) {
            this.fetchWards();
        }
    },
    mounted() {
        this.fetchProvices();
        // if (useAuthStore().isAuthenticated) {
        //     this.$router.push({ name: 'Home' })
        // }
        // this.provider = new GoogleAuthProvider();
    }
}
</script>
<style scoped lang="css">
img {
    width: 220px !important;
    height: auto;
}
.form-select {
    padding: 10px 20px;
    margin: 15px auto;
    width: 500px;
    border: 1px solid black;
    border-radius: 3px;
}
</style>


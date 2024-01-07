<template>
    <section id="signup">
        <div class="container">
            <router-link to="/" aria-current="page">
                <img src="../assets/img/logo.png" alt="logo1">
            </router-link>
            <h1>Edit Profile</h1>
            <h3 class="input-errors mb-3 text-center">{{ errorCode }}</h3>
            <label for="name">User Name</label>
            <input type="text" v-model="v$.name.$model" id="name" placeholder="User Name">
            <div class="input-errors" v-for="(error, index) of v$.name.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="email">E-Mail</label>
            <input type="email" v-model="v$.email.$model" readonly id="email" placeholder="Email Address">
            <div class="input-errors" v-for="(error, index) of v$.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="password">Phone Number</label>
            <input type="text" v-model="v$.phone_number.$model" id="phone-number" placeholder="Phone Number">
            <div class="input-errors" v-for="(error, index) of v$.phone_number.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="provinces">Tỉnh/ Thành phố</label>
            <select class="form-select" v-model="province_id">
                <option :value="province.id" v-for="province in provinces">{{ province.name }}</option>
            </select>
            <div class="input-errors" v-for="(error, index) of v$.province_id.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="password">Quận/ Huyện</label>
            <select class="form-select" v-model="district_id">
                <option :value="district.id" v-for="district in districts">{{ district.name }}</option>
            </select>
            <div class="input-errors" v-for="(error, index) of v$.district_id.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="password">Xã/ Phường</label>
            <select class="form-select" v-model="ward_id">
                <option :value="ward.id" v-for="ward in wards">{{ ward.name }}</option>
            </select>
            <div class="input-errors" v-for="(error, index) of v$.ward_id.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <button @click="submitForm" type="button">Submit</button>

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
        </div>
    </section>
</template>
  
<script>
import { useVuelidate } from '@vuelidate/core'
import { userStore } from "@/stores/userStore";
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
            province_id: null,
            provinces: [],
            district_id: null,
            districts: [],
            ward_id: null,
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
            phone_number: {
                required: helpers.withMessage('* Please type Your Phone Number.', required),
                // pass: helpers.withMessage('* Must contain at least one number and one uppercase and lowercase letter required.', pass)
            },
            province_id: {
                required: helpers.withMessage('* Please select your province.', required),
                // pass: helpers.withMessage('* Must contain at least one number and one uppercase and lowercase letter required.', pass)
            },
            district_id: {
                required: helpers.withMessage('* Please select your district.', required),
                // pass: helpers.withMessage('* Must contain at least one number and one uppercase and lowercase letter required.', pass)
            },
            ward_id: {
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
                await UserService.editProfile({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password,
                    phone_number: this.phone_number,
                    province_id: this.province_id,
                    district_id: this.district_id,
                    ward_id: this.ward_id,
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
            const response = await DistrictService.getDistrictByProvince(this.province_id);
            this.districts = response.data.data
        },
        async fetchWards() {
            const response = await WardService.getWardByDistrictId(this.district_id);
            this.wards = response.data.data
        },
        async fetchUser()
        {
            const response = await UserService.getUserById(userStore().user.id);
            const user = response.data.data;
            this.name = user.name
            this.email = user.email
            this.phone_number = user.phone_number
            this.province_id = user.province_id
            this.district_id = user.district_id
            this.ward_id = user.ward_id
        }
    },
    watch: {
        province_id: function (val) {
            this.fetchDistricts();
        },
        district_id: function (val) {
            this.fetchWards();
        }
    },
    mounted() {
        this.fetchProvices();
        this.fetchUser();
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


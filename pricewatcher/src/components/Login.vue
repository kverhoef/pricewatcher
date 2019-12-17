<template>
    <div class="container d-flex justify-content-center">
        <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    </div>
</template>

<script lang="ts">
import {Component, Inject, Vue} from 'vue-property-decorator';

@Component({
})
export default class Login extends Vue {
    authConfig = {
        signUpConfig: {
            signUpFields: [
                {
                    label: 'Username',
                    key: 'username',
                    required: true,
                    displayOrder: 1,
                    type: 'string',
                },
                {
                    label: 'Email',
                    key: 'email',
                    required: true,
                    displayOrder: 2,
                    type: 'string',
                    signUpWith: true
                },
                {
                    label: 'Password',
                    key: 'password',
                    required: true,
                    displayOrder: 3,
                    type: 'password'
                },
                {
                    label: 'PhoneNumber',
                    key: 'phone_number',
                    required: true,
                    displayOrder: 4,
                    type: 'string'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>

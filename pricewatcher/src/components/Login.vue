<template>
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AmplifyEventBus } from 'aws-amplify-vue';

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

    created() {
        AmplifyEventBus.$on('authState', info => {
            this.$router.push({path: 'pricewatchList'});
            console.log(`Here is the auth event that was just emitted by an Amplify component: `, info)
        });
    }

}
</script>

<style scoped>

</style>

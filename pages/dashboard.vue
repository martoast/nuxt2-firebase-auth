<template>
    <div>
        <b-container>
            <div v-if="user">
                <pre>
                {{user}}
                </pre>
                <b-btn @click="handleLogout">LOGOUT</b-btn>
            </div>
            <div v-else>
                <h3>User is logged out</h3>
            </div>
        </b-container>
    </div>
</template>
<script>
export default {
    methods: {
        async handleLogout() {
            await this.$fire.auth.signOut()
            window.location.assign('/login');
            
        }
    }
    
}
</script>
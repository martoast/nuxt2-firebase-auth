export default async function ({store, redirect}) {
    let user = await store.getters['user']
    if (user) {
        console.log("USER IS LOGGED IN")
    }
    else {
        // redirect('/login')
        console.log("USER IS LOGGED OUT")

    }
}
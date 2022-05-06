export const state = () => ({
    hamburgerToggled: false
})

export const getters = {}

export const actions = {}

export const mutations = {
    toggleHamburger: (state) => {
        state.hamburgerToggled = !state.hamburgerToggled
        console.log(state.hamburgerToggled)
    }
}
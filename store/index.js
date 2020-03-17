export const state = () => ({
  linkData: [
    { id: 1, address: 'index', name: 'Home' },
    { id: 2, address: 'Works', name: 'Works' },
    { id: 3, address: 'About', name: 'About' },
    { id: 4, address: 'Contact', name: 'Contact' },
    { id: 5, address: 'Contact-2', name: 'Contact-2' }
  ]
})

export const getters = {
  filteredLinks (state) {
    return state.linkData.filter(function (val) {
      return val.address !== 'index'
    })
  }
}

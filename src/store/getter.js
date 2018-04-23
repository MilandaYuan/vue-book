let getters = {
  total: state => state.cartList.reduce((prev, next) => prev + next.bookCount*next.bookPrice, 0)
}
export default getters

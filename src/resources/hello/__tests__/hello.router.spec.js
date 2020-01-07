import router from '../hello.router'

describe('hello router', () => {
  test('has hello route', () => {
    const routes = [{ path: '/', method: 'get' }]

    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})

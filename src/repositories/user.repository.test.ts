import * as userRepository from './user.repository'

// todo
beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation()
  jest.spyOn(console, 'error').mockImplementation()
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('user.repository.ts', () => {
  describe('findAllUser()', () => {
    it('should return an empty array', async () => {
      const output = await userRepository.findAllUser()

      expect(output).toEqual([])
    })
  })
})

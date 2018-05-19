import * as userRepository from './userRepository'

describe('userRepository', () => {
  describe('findAllUser', () => {
    it('should return an empty array', async () => {
      const output = await userRepository.findAllUser()

      expect(output).toEqual([])
    })
  })
})

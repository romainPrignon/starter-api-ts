// import { expectType } from 'tsd'
// import * as r from 'runtypes'

// // test
// import { MainstreamPath } from '../../src/runtypes/mainstreamPath'


// describe('mainstreamPath.ts', () => {
//   describe('MainstreamPath()', () => {
//     it('should be tagged correctly', () => {
//       expectType<r.Runtype>(MainstreamPath)
//       expect(MainstreamPath.name).toEqual('MainstreamPath')
//       expect(MainstreamPath.tag).toEqual('mainstreamPath')
//     })

//     it('should handle check', () => {
//       expect(() => MainstreamPath.check('')).toThrowError('Failed constraint check for unknown')
//       expect(() => MainstreamPath.check('a')).toThrowError('Failed constraint check for unknown')
//       expect(MainstreamPath.check('/a')).toEqual('/a')
//     })

//     it('should handle guard', () => {
//       expect(MainstreamPath.guard('')).toEqual(false)
//       expect(MainstreamPath.guard('a')).toEqual(false)
//       expect(MainstreamPath.guard('/a')).toEqual(true)
//     })

//     it('should handle validate', () => {
//       expect(MainstreamPath.validate('')).toEqual({ code: 'CONSTRAINT_FAILED', message: 'Failed constraint check for unknown', success: false })
//       expect(MainstreamPath.validate('a')).toEqual({ code: 'CONSTRAINT_FAILED', message: 'Failed constraint check for unknown', success: false })
//       expect(MainstreamPath.validate('/a')).toEqual({ success: true, value: '/a' })
//     })
//   })
// })

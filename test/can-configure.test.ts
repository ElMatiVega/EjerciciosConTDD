import { describe, expect, it } from 'vitest'

const canReconfigure = (from, to):void =>{
    // if(from === undefined) throw new Error('from is required')
    if(typeof(from)!== 'string')throw new Error('from should be an string')

    if(typeof(to)!== 'string')throw new Error('from should be an string')

    if(from.length !== to.length)return false
    
    return true   
}

export default describe('canReconfigure', () : void=>{
    // it('',():void=>{
    //     expect(canReconfigure).toBeTypeOf('function')
    // })
    it('should throw if first parameter is missing', ():void => {
        expect(() : void => canReconfigure()).toThrow()
    })
    it('should throw if first parameter is not a string', ():void => {
        expect(() : void => canReconfigure(2)).toThrow()
    })
    
    it('should throw if second parameter is not a string', ():void => {
        expect(() : void => canReconfigure('a', 2)).toThrow()
    })

    it('should return a boolean', () : void => {
        expect(canReconfigure('a','b')).toBeTypeOf('boolean')
    })

    it('should return false if strings provided have different length', () : void=>{
        expect(canReconfigure('abc', 'abcd')).toBe(false)
    })
})
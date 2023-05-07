import { describe, expect, it } from 'vitest'

const canReconfigure = (from, to):boolean =>{
    // if(from === undefined) throw new Error('from is required')
    if(typeof(from)!== 'string')throw new Error('from should be an string')

    if(typeof(to)!== 'string')throw new Error('from should be an string')

    const isSameLength= from.length===to.length
    if(!isSameLength) return false

    const hasSameUniqueLetters = new Set(from).size === new Set(to).size
    if(!hasSameUniqueLetters)return false

    const transformations={}
    for (let i = 0; i < from.length; i++) {
        const fromLetters = from[i];
        const toLetters= to[i];

        const storeLetter= transformations[fromLetters]
        if(storeLetter && storeLetter!==toLetters) return false
        transformations[fromLetters]=toLetters
        
    }

    return true   
}

export default describe('canReconfigure', () : void=>{
    // it('',():void=>{
    //     expect(canReconfigure).toBeTypeOf('function')
    // })
    it('should throw if first parameter is missing', ():void => {
        expect(() : boolean => canReconfigure(2,3)).toThrow()
    })
    it('should throw if first parameter is not a string', ():void => {
        expect(() : boolean => canReconfigure(2,3)).toThrow()
    })
    
    it('should throw if second parameter is not a string', ():void => {
        expect(() : boolean => canReconfigure('a', 2)).toThrow()
    })

    it('should return a boolean', () : void => {
        expect(canReconfigure('a','b')).toBeTypeOf('boolean')
    })

    it('should return false if strings provided have different length', () : void=>{
        expect(canReconfigure('abc', 'abcd')).toBe(false)
    })

    
    it('should return false if strings provided have different length even with sema unique letters', () : void=>{
        expect(canReconfigure('aac', 'ac')).toBe(false)
    })

    it('should return false if strings provided have different number of unique letters', () : void=>{
        expect(canReconfigure('abc', 'ddd')).toBe(false)
    })

    it('should return false if strings has different order of transformation',()=>{
        expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
    })
})
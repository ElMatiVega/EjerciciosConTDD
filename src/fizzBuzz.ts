 const fizzbuzz = (number) : number | "fizzbuzz" | "fizz" | "buzz" => {
    if (typeof number !== 'number') throw new Error('parameter provided must be a number')

    if(Number.isNaN(number)) throw new Error ('parameter provided must be a number')
    
    const multiplies = {3 : 'fizz', 5 : 'buzz'}// con 15 no hace falta porque 1ero es fizz y despues es buzz y concatena palabra
    let output =''
    Object.entries(multiplies).forEach(([multiplies, word]):void=>{
        if(number%multiplies===0) output += word
    })
// lo comento porque lo refactorizo
    // if(number%15===0) return 'fizzbuzz'
    
    // if(number%3===0) return 'fizz'
    
    // if(number%5===0) return 'buzz'
    
    return output === ''? number: output
   }
   export default fizzbuzz
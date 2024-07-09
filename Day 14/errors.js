try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }
  //ReferenceError: fistName is not defined


  try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.error(err) // we can use console.log() or console.error()
  } finally {
    console.log('In any case I will be executed')
  }
//ReferenceError: fistName is not defined


try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }
//Name of the error ReferenceError
//Error message fistName is not defined
//In any case I will be executed


throw 'Error2' 
throw 42 
throw true  
throw new Error('Required') 


const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()

  

  //error types

  let firstName = 'Asabeneh'
  let fullName = firstName + ' ' + lastName
  console.log(fullName) //ReferenceError: lastName is not defined

 
let square = 2 x 2
console.log(square)
console.log('Hello, world") 
//SyntaxError: Unexpected identifier 'x'


let num = 10
console.log(num.toLowerCase())
//TypeError: num.toLowerCase is not a function

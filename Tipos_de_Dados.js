// Tipos de String

let myFirstString = "E aqui dentro eu posso escrever o que eu quiser"
//  ---- Aqui posso escrever texto que eu quiser----

let mySeccondString = 'Agora com aspas Simples'
// ---- Aqui posso escrever texto que eu quiser---- 
// OBS: OS TEXTO PODEM SER ESCRITOS POREM NAO POSSO QUEBRAR LINHAS***

let myThirdString = `Coma crase eu tambem consigo` // ---  Template Literais (Textos) ou Template String (Uma String no texto)
// Aqui posso usar texto e String juntas usando **${}** 
// Aqui posso quebrar linha sem problemas.

// ______________________________________________________________________________
// ***EX:*** de texto

let text = "Fulando de tal falou o seguinte: 'EU APRENDI ** JS **"
console.log(text)

// ____________________________________________________________________
// ***EX:*** de Texto com String
let numberOfPeopleInClass = 34
let myTextWithSuperPowers = `Tinha exatamente ${numberOfPeopleInClass} pessoas na aula`
// *** OU ***
let myTextWithSuperPowers2 = `Tinha exatamente ${10 + 20 + 4 * (10*2-20)} pessoas na aula 2`
console.log(numberOfPeopleInClass)
console.log(myTextWithSuperPowers2)




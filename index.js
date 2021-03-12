const challengeFunction = function(bishop, pawn){
    const letterArray= ["A","B","C","D","E","F","G","H"]
    let arrayPosiciones=[]
    let bishopLetter = bishop.split("")[0]
    let bishopNumber = bishop.split("")[1]
    letterArray.forEach(letter => {
        let distanciaLetras = letterArray.indexOf(bishopLetter)-letterArray.indexOf(letter)
        let newNumberPos= bishopNumber-distanciaLetras
        let newNumberNeg= bishopNumber-distanciaLetras
        let newPosicionPos= letter+newNumberPos
        let newPosicionNeg= letter+newNumberNeg
        arrayPosiciones=[...arrayPosiciones,newPosicionNeg,newPosicionPos]
    });
    return arrayPosiciones.indexOf(pawn)>0 
}
module.exports = challengeFunction

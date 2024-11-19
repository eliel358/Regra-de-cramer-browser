createAnswer = (content) =>{

    newElement = document.createElement('span')
    newElement.innerHTML = content
    document.getElementById('answer').append(newElement)
}

replaceColumnnByResults = (matrix,columnIndex) =>{
        
    newMatrix = [["","",""],["","",""],["","",""]];
    createAnswer('</br>'+'trocando a coluna '+(columnIndex+1)+' pela coluna dos resultados:'+'</br>')
    for(i = 0;i<matrix.length;i++){
        for(a = 0;a<matrix[i].length-1;a++){
            if (a == columnIndex){
                newMatrix[i][a] = matrix[i][3];
            }else{
                newMatrix[i][a] = matrix[i][a];
            }
        }
    }
    
    for(i = 0;i<newMatrix.length;i++){
        createAnswer("[");
        for(a = 0;a<newMatrix.length;a++){
            if(a == 2 || a==4 || a==6){
                createAnswer(newMatrix[i][a]);
            }else{
                createAnswer(newMatrix[i][a]+',');
            }
        }
        createAnswer("]");
        createAnswer("[");
        for(a = 0;a<2;a++){
            if(a == 1){
                createAnswer(newMatrix[i][a]+"]"+'</br>');
            }else{
                createAnswer(newMatrix[i][a]+',');
            }
        }
    
    }
    return(newMatrix)
}
getDeterminant = (matrix) =>{
    createAnswer('</br>'+'Calculando a determinante da matriz: '+'</br>')
    showMatriz(matrix)
    createAnswer('</br>'+'Multiplicando as 3 primeiras diagonais da esquerda para a direita'+'</br>')
    sumDiagonal1 = (matrix[0][0])*(matrix[1][1])*(matrix[2][2]);
    sumDiagonal2 = (matrix[0][1])*(matrix[1][2])*(matrix[2][0]);
    sumDiagonal3 = (matrix[0][2])*(matrix[1][0])*(matrix[2][1]);
    
    
    createAnswer((matrix[0][0])+' * '+(matrix[1][1])+' * '+(matrix[2][2])+' = '+sumDiagonal1+'</br>')
    createAnswer((matrix[0][1])+' * '+(matrix[1][2])+' * '+(matrix[2][0])+' = '+sumDiagonal2+'</br>')
    createAnswer((matrix[0][2])+' * '+(matrix[1][0])+' * '+(matrix[2][1])+' = '+sumDiagonal3+'</br>')
    
    createAnswer('</br>'+'Multiplicando as 3 primeiras diagonais da direita para a esquerda'+'</br>')
    
    sumDiagonal4 = (matrix[0][1])*(matrix[1][0])*(matrix[2][2]);
    sumDiagonal5 = (matrix[0][0])*(matrix[1][2])*(matrix[2][1]);
    sumDiagonal6 = (matrix[0][2])*(matrix[1][1])*(matrix[2][0]);
    
    createAnswer((matrix[0][1])+' * '+(matrix[1][0])+' * '+(matrix[2][2])+' = '+sumDiagonal4+'</br>')
    createAnswer((matrix[0][0])+' * '+(matrix[1][2])+' * '+(matrix[2][1])+' = '+sumDiagonal5+'</br>')
    createAnswer((matrix[0][2])+' * '+(matrix[1][1])+' * '+(matrix[2][0])+' = '+sumDiagonal6+'</br>')
    
    createAnswer('</br>'+'Somando o resultado das diagonais da esquerda para a direita: '+'</br>')
    sumLeftRight = sumDiagonal1 + sumDiagonal2 + sumDiagonal3
    createAnswer('</br>'+sumDiagonal1 +' + '+ sumDiagonal2 +' + '+ sumDiagonal3+' = '+sumLeftRight+'</br>')
    
    createAnswer('</br>'+'Somando o resultado das diagonais da direita para a esquerda: '+'</br>')
    sumRightLeft = sumDiagonal4 + sumDiagonal5 + sumDiagonal6
    createAnswer('</br>'+sumDiagonal4 +' + '+ sumDiagonal5 +' + '+ sumDiagonal6+' = '+sumRightLeft+'</br>')
    
    determinant = sumLeftRight - sumRightLeft
    createAnswer('</br>'+'Determinante é: '+ sumLeftRight +' - '+ sumRightLeft+' = '+ determinant+'</br>')
    return determinant
}
showMatriz = (matrix) =>{
    for(i = 0;i<matrix.length;i++){
        createAnswer("[");
        for(a = 0;a<matrix.length;a++){
            if(a == 2 || a==4 || a==6){
                createAnswer(matrix[i][a]);
            }else{
                createAnswer(matrix[i][a]+',');
            }
        }
        createAnswer("]");
        createAnswer("[");
        for(a = 0;a<2;a++){
            if(a == 1){
                createAnswer(matrix[i][a]+"]"+'</br>');
            }else{
                createAnswer(matrix[i][a]+',');
            }
        }
    
    }
}

document.getElementById("submit").addEventListener('click',()=>{
    document.getElementById('answer').innerHTML = ''
    
    coefficients = [[
        document.getElementById("input1").value,
        document.getElementById("input2").value,
        document.getElementById("input3").value,
        document.getElementById("input4").value],[
        document.getElementById("input5").value,
        document.getElementById("input6").value,
        document.getElementById("input7").value,
        document.getElementById("input8").value],
        [document.getElementById("input9").value,
        document.getElementById("input10").value,
        document.getElementById("input11").value,
        document.getElementById("input12").value]]

    // coefficients = [["1","1","1","6"],
    //                 ["0","1","3","11"],
    //                 ["1","-2","1","0"]]
    
    d = getDeterminant(coefficients)
    dx = getDeterminant(replaceColumnnByResults(coefficients,0))
    dy = getDeterminant(replaceColumnnByResults(coefficients,1))
    dz = getDeterminant(replaceColumnnByResults(coefficients,2))
    createAnswer('</br>'+'d = '+d+'</br>'+'</br>')
    createAnswer('dx = '+dx+'</br></br>')
    createAnswer('dy = '+dy+'</br></br>')
    createAnswer('dz = '+dz+'</br></br>')
    createAnswer('x = '+ dx/d+'</br></br>')
    createAnswer('y = '+ dy/d+'</br></br>')
    createAnswer('z = '+ dz/d+'</br></br>')
    
    console.log("dx = ",dx)
    console.log("dy = ",dy)
    console.log("dz = ",dz)
    console.log("x = ", dx/d)
    console.log("y = ", dy/d)
    console.log("z = ", dz/d)



    })


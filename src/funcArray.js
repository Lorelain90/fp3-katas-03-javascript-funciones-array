/* Encuentra el máximo */

    export function maxOfTwoNumbers(a,b){
    if (a > b) {
        return a;
    } else {  
    return b;
     }
    }

     export function findLongestWord(words){
        let wordLongest = "";
        if(words.length === 0){
            return undefined;
        }
        for(let i=0; i<words.length; i++){
            if(words[i].length > wordLongest.length){
                wordLongest = words[i];
            }
        }
        return wordLongest;
    }

export function sumArray(array){
        let suma = 0 
        if(array.length === 0){ 
            return 0; 
        } 
    for(let i = 0; i < array.length ; i ++ ) { 
        suma+= array[i]; 
      } 
      return suma 
    }

export function averageNumbers(){}

export function averageWordLength(){}

export function uniquifyArray(){}

export function doesWordExist(){}

export function howManyTimes(){}

export function greatestProduct(){}






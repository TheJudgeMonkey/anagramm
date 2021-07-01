function anagr(a,b) {

    let c = a.toLowerCase().split('').sort().join('');
    let d = b.toLowerCase().split('').sort().join('');   
    
    if (c===d){
      console.log('yes')}
    else{ console.log('no')
    }  
}

anagr('dog','cat')
anagr('dog','god')
anagr('dog','gmod')
anagr('dOg','god')
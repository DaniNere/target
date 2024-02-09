function stringInvertida(n) {
    
    let invertida = '';

    for (let i = n.length -1; i >=0; i--){
        invertida += n[i];
    }
    return invertida;
}


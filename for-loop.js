for(let x=1, y=1; x<=4108; x=2*x+y, y--){
    document.write(x); 
    if(x<4108) {
        document.write(', ');
    }
}
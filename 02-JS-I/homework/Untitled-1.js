
for (var i = 0; i <=100; i++ ) {
 // bloque de codigo 
function  imprime1aN (n)  {
 for (var i = 1; i <=n; i++ ) { 
    console.log (i) ; 
}
}
function imprime1aN (n) {
 for (var i =1; i<=n; i++)  {
 if (i % 2 === 0) {
 console.log (i) 
}
if (i > 200) {
 return; 
}
}
}


//n filas 
//m columnas 
function matriz (n, m) {
for (var i =0; i < n; i++ ) {
  for (var j = 0; j < m; j++ ) {
      console.log (i + ',' + j );

  } 
} 
} 

function matriz (n, m ) {
    var j = 0 ;
    var i = 0 ;
    while (i < n ) {
        while (j< m) {
        console.log (i, j );
   j++;
    }
   j= 0;
    
    i++;
    }
   }


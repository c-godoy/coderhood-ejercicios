// Dado un array de alumnos de coderhood academy, indicar quien es el que lidera el ranking de participación en Discord

let alumnos= [
    {user: "miafate", ranking: 1},
    {user: "knd", ranking: 8},
    {user: "lucas", ranking: 5},
    {user: "argentum", ranking: 2}
]

let lider = alumnos[0];

for (let i = 0; i < alumnos.length; i++){
    if (alumnos[i].ranking < lider.ranking){
        lider = alumnos[i];
    }
}

console.log("El lider es " + lider.user);
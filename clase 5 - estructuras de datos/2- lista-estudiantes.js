/* Dado un array de estudiantes de una universidad,
mostrar los nombres de los estudiantes de la carrera ingeniería en computación. */

let alumnos = [
    { nombre: "Ema", carrera: "Ingenieria en computacion"},
    { nombre: "Luis", carrera: "Produccion audiovisual" },
    { nombre: "Pablo", carrera: "Licenciatura en sistemas" },
    { nombre: "Meison", carrera: "Ingenieria en computacion" },
  ];

  let estudiantesIng = [];

  for (let i = 0; i < alumnos.length; i++){
      if (alumnos[i].carrera === "Ingenieria en computacion"){
          estudiantesIng.push(alumnos[i].nombre);
      }
  }

  console.log(estudiantesIng);
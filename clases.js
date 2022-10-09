class socios{

    static id = '0'

    constructor (nombre ,estado){
        this.id = socios.getId();
        this.nombre = nombre;
        this.estado = estado;
    }

    static getId(){
        socios.id++
        return socios.id
    }
}

function imprimir(){

    const arregloSocios = [];

    let nombre1 = prompt ("Ingrese el nombre del socio 1");
    let estado1 = prompt ("Ingrese el estado del socio 1 (A: activo/ I: inactivo)");
    const socio1 = new socios (nombre1 , estado1);
    arregloSocios.push(socio1);

    let nombre2 = prompt ("Ingrese el nombre del socio 2");
    let estado2 = prompt ("Ingrese el estado del socio 2 (A: activo/ I: inactivo)");
    const socio2 = new socios (nombre2 , estado2);
    arregloSocios.push(socio2);

    let nombre3 = prompt ("Ingrese el nombre del socio 3");
    let estado3 = prompt ("Ingrese el estado del socio 3 (A: activo/ I: inactivo)");
    const socio3 = new socios (nombre3 , estado3);
    arregloSocios.push(socio3);

    let nombre4 = prompt ("Ingrese el nombre del socio 3");
    let estado4 = prompt ("Ingrese el estado del socio 3 (A: activo/ I: inactivo)");
    const socio4 = new socios (nombre4 , estado4);
    arregloSocios.push(socio4);

    console.log(arregloSocios);

    const arraySociosAct = [];
    const arraySociosInact = [];

    for (let i = 0; i <= arregloSocios.length; i++) {
        if (arregloSocios[i]?.estado === 'A') {
            arraySociosAct.push ({id: arregloSocios[i].id, nombre: arregloSocios[i].nombre});
        }
        if (arregloSocios[i]?.estado === 'I') {
            arraySociosInact.push ({id: arregloSocios[i].id, nombre: arregloSocios[i].nombre});
        }
    }

    console.log ("Los socios activos son: ", arraySociosAct);
    console.log ("Los socios inactivos son: ", arraySociosInact);
}

imprimir ();
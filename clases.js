class socios{

    static numeroSocio = '0'

    #deuda;

    constructor (nombre, apellido, deuda){
        this.numeroSocio = socios.getId();
        this.nombre = nombre;
        this.apellido = apellido;
        this.#deuda = deuda;
    }

    static getId(){
        socios.numeroSocio++
        return socios.numeroSocio
    }

    getEstado(){
        const deudaActual = this.#getDeuda()     
        if (deudaActual<=3) {
            return "A";
        }else{
            return "I"
        }
    }

    getNombrecompleto() {
        return `${this.nombre} ${this.apellido}`
    }

    #getDeuda(){
        return this.#deuda;
    }
}

function imprimir(){

    const arregloSocios = [];

    let n = prompt ("Ingrese el numero de socios que va a cargar");

    for (let i = 1; i <= n; i++) {
        let nombre = prompt ("Ingrese el nombre del socio " + i);
        let apellido = prompt ("Ingrese el apellido del socio " + i);
        let deuda = prompt ("Ingrese los meses impagos del socio " + i);
        const socio = new socios (nombre, apellido, deuda);
        arregloSocios.push(socio);
        
    }

    console.log(arregloSocios);

    const arraySociosAct = [];
    const arraySociosInact = [];

    for (let i = 0; i < arregloSocios.length; i++) {
        if (arregloSocios[i]?.getEstado() === 'A') {
            arraySociosAct.push ({numeroSocio: arregloSocios[i].numeroSocio, nombreCompleto: arregloSocios[i].getNombrecompleto() });
        }
        if (arregloSocios[i]?.getEstado() === 'I') {
            arraySociosInact.push ({numeroSocio: arregloSocios[i].numeroSocio, nombreCompleto: arregloSocios[i].getNombrecompleto()});
        }
    }

    console.log ("Los socios activos son: ", arraySociosAct);
    console.log ("Los socios inactivos son: ", arraySociosInact);
}

imprimir ();

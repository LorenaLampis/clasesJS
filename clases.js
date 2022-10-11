class Socios{

    static numeroSocio = '0'

    #deuda;

    constructor (nombre, apellido, deuda){
        this.numeroSocio = Socios.getId();
        this.nombre = dombre;
        this.apellido = apellido;
        this.#deuda = deuda;
    }

    static getId(){
        Socios.numeroSocio++
        return Socios.numeroSocio
    }

    getEstado(){
        const deudaActual = this.#getDeuda()     
        if (deudaActual<=3) {
            return "A";
        }else{
            return "I"
        }
    }

    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    }

    #getDeuda(){
        return this.#deuda;
    }
}
    const arregloSocios = [];

    let n = prompt ("Ingrese el numero de socios que va a cargar");

    for (let i = 1; i <= n; i++) {
        let nombre = prompt ("Ingrese el nombre del socio " + i);
        let apellido = prompt ("Ingrese el apellido del socio " + i);
        let seuda = prompt ("Ingrese los meses impagos del socio " + i);
        const socio = new Socios (nombre, apellido, deuda);
        arregloSocios.push(socio);
        
    }

    console.log(arregloSocios);

    const arraySociosAct = [];
    const arraySociosInact = [];

    for (let i = 0; i < arregloSocios.length; i++) {
        if (arregloSocios[i]?.getEstado() === 'A') {
            let nroSocioActivo = arregloSocios[i].numeroSocio;
            let nombreSocioActivo = arregloSocios[i].getNombreCompleto();
            arraySociosAct.push ({nroSocioActivo, nombreSocioActivo});
        }
        if (arregloSocios[i]?.getEstado() === 'I') {
            let nroSocioInactivo = arregloSocios[i].NumeroSocio;
            let nombreSocioInactivo = arregloSocios[i].getNombreCompleto();
            arraySociosInact.push ({nroSocioInactivo, nombreSocioInactivo});
        }
    }

    console.log ("Los socios activos son: ", arraySociosAct);
    console.log ("Los socios inactivos son: ", arraySociosInact);


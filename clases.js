class Socios{

    static NumeroSocio = '0'

    #Deuda;

    constructor (Nombre, Apellido, Deuda){
        this.NumeroSocio = Socios.getId();
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.#Deuda = Deuda;
    }

    static getId(){
        Socios.NumeroSocio++
        return Socios.NumeroSocio
    }

    getEstado(){
        const DeudaActual = this.#getDeuda()     
        if (DeudaActual<=3) {
            return "A";
        }else{
            return "I"
        }
    }

    getNombreCompleto() {
        return `${this.Nombre} ${this.Apellido}`
    }

    #getDeuda(){
        return this.#Deuda;
    }
}
    const ArregloSocios = [];

    let n = prompt ("Ingrese el numero de socios que va a cargar");

    for (let i = 1; i <= n; i++) {
        let Nombre = prompt ("Ingrese el nombre del socio " + i);
        let Apellido = prompt ("Ingrese el apellido del socio " + i);
        let Deuda = prompt ("Ingrese los meses impagos del socio " + i);
        const Socio = new Socios (Nombre, Apellido, Deuda);
        ArregloSocios.push(Socio);
        
    }

    console.log(ArregloSocios);

    const ArraySociosAct = [];
    const ArraySociosInact = [];

    for (let i = 0; i < ArregloSocios.length; i++) {
        if (ArregloSocios[i]?.getEstado() === 'A') {
            ArraySociosAct.push ({NumeroSocio: ArregloSocios[i].NumeroSocio, NombreCompleto: ArregloSocios[i].getNombreCompleto() });
        }
        if (ArregloSocios[i]?.getEstado() === 'I') {
            ArraySociosInact.push ({NumeroSocio: ArregloSocios[i].NumeroSocio, NombreCompleto: ArregloSocios[i].getNombreCompleto()});
        }
    }

    console.log ("Los socios activos son: ", ArraySociosAct);
    console.log ("Los socios inactivos son: ", ArraySociosInact);


import { crearCartaHTML } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";


/**
 * 
 * @param {Number} puntosMinimos 
 * @param {string[]} deck 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCartasComputadora 
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasComputadora ) => {

    let puntosComputadora = 0;

    do {
        
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML( carta )
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
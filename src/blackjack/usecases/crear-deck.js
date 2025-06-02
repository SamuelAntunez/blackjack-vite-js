import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {string[]} tiposDeCarta arreglo de tipos de carta ['C','D','H','S']
 * @param {string[]} tiposEspeciales arreglo de tipos de cartas especiales ['A','J','Q','K']
 * @param {string[]} deck retorna el deck de cartas
 * @returns {string[]}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales, deck) => {

    if ( !tiposDeCarta ) throw new Error('TiposDeCarta es obligatorio')
    if ( tiposDeCarta.length === 0) throw new Error ('TiposDeCarta tiene que ser un arreglo de string')

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

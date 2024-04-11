
/**
 * [pedirCarta esta función me permite tomar una carta]
 * @param   {Array<String>}  es un arreglo de string
 * @returns  {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck ||  deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
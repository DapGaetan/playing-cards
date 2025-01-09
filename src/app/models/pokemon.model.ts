import { PokemonType } from "../utils/pokemon.utils";

export class Pokemon{
        id: number = -1;
        name: string = "Électhor";
        image: string = 'pokemon/electhor.jpg'
        type: PokemonType = PokemonType.ELECTRIC;
        hp: number = 140;
        figureCaption: string = "N°0145 Électhor"
        attackName: string = "Cage Éclar"
        attackStrength: number = 60;
        attackDescription: string = "Cage Éclair paralyse la cible, Capacité Dynamax, Cage Éclair devient Gardomax."

        copy(): Pokemon {
                return Object.assign(new Pokemon(), this);
        }
}
export enum PokemonType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
    STEEL = "steel",
    NORMAL = "normal",
    FIGHT = "fight",
    SHADOW = "shadow",
    PSY = "psy"
}

export interface IPokemonProperties{
    imageUrl: string,
    color: string,
}

export const PokemonTypeProperties: {[key: string]: IPokemonProperties} ={
    [PokemonType.PLANT]:{
        imageUrl: 'energy/plant.png',
        color: 'rgba(135, 255, 124, 0.65)'
    },
    [PokemonType.ELECTRIC]:{
        imageUrl: 'energy/elec.png',
        color: 'rgba(238, 245, 39, 0.72)'
    },
    [PokemonType.FIRE]:{
        imageUrl: 'energy/fire.png',
        color: 'rgba(245, 114, 39, 0.75)'
    },
    [PokemonType.WATER]:{
        imageUrl: 'energy/water.png',
        color: 'rgba(35, 206, 224, 0.68)'
    },
    [PokemonType.STEEL]:{
        imageUrl: 'energy/steel.png',
        color: 'rgba(147, 188, 192, 0.66)'
    },
    [PokemonType.NORMAL]:{
        imageUrl: 'energy/normal.png',
        color: 'rgba(225, 225, 225, 0.59)'
    },
    [PokemonType.FIGHT]:{
        imageUrl: 'energy/fight.png',
        color: 'rgba(197, 109, 0, 0.6)'
    },
    [PokemonType.SHADOW]:{
        imageUrl: 'energy/shadow.png',
        color: 'rgba(39, 103, 85, 0.55)'
    },
    [PokemonType.PSY]:{
        imageUrl: 'energy/psy.png',
        color: 'rgba(72, 27, 105, 0.62)'
    },
}
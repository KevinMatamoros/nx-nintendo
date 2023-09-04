import { gameI } from "@nintendo/shared-components-models";

export const gameMock: gameI = 
    {
        image: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_200/ncom/software/switch/70070000014505/806672da8ad9d463d1f9b5bb1b6ac4afb04cdf2e0b60c46902fbde4afb565839',
        name: 'Paquete doble de Pokémon™ Scarlet y Pokémon™ Violet',
        date: '18/11/22',
        price: 2798,
        platform: 'Nintendo Switch'
    }
;
const rowGames: gameI[] = [gameMock, gameMock, gameMock, gameMock];
export const gamesMock = [...rowGames, ...rowGames, ...rowGames,];
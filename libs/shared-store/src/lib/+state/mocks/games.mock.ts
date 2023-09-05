import { gameI } from "@nintendo/shared-components-models";

export const generateMock = (length: number): gameI[] => {
    const games: gameI[] = [];
    for (let index = 0; index < length; index++) {
        games.push({
            id: self.crypto.randomUUID(),
            image: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_300/ncom/software/switch/70010000053971/842b2784d91520d41a947dec17fac116fec889bb1f1db4023615af8429dae00d',
            name: `Pokémon™ Violet - ${index}`,
            date: '18/11/22',
            price: 2798,
            platform: 'Nintendo Switch'
        },);
    }
    return games;
}
import { defineStore } from 'pinia';

export const useCardsStore = defineStore({
  id: 'cards',
  state() {
    return {
     cards: [
        {
          image: 'cards/synthpop--bg.webp',
          url: 'https://www.youtube.com/watch?v=p5pHyjJB5DU',
        },
        {
          image: 'cards/synthwave--bg.webp',
          url: 'https://www.youtube.com/watch?v=krJPMcqNY08&t=2052s',
        },
        {
          image: 'cards/vaporwave--bg.webp',
          url: 'https://www.youtube.com/watch?v=I0gpplwl-AY&t=2729s',
        },
        {
          image: 'cards/chillwave--bg.webp',
          url: 'https://www.youtube.com/watch?v=NYmPZb7GS1M',
        },
      ],
    };
  },
});

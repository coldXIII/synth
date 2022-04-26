import { defineStore } from 'pinia';

export const useAlbumsStore = defineStore({
  id: 'albums',
  state() {
    return {
      synthpopAlbums: [
        'albums/acot.jpg',
        'albums/acretongue.jpg',
        'albums/client.jpg',
        'albums/covenant.jpg',
        'albums/crying.jpg',
        'albums/diorama.jpg',
        'albums/kite.jpg',
        'albums/mondtraume.jpg',
        'albums/pegas.jpg',
        'albums/torul.jpg',
      ],
      synthwaveAlbums: [
        'albums/mental_exile.jpg',
        'albums/blixx.jpg',
        'albums/equateaur.jpg',
        'albums/scandroid.jpg',
        'albums/kavinsky.jpg',
        'albums/carpenter.jpg',
        'albums/wolfclub.jpg',
        'albums/bourg.jpg',
        'albums/midnight.jpg',
        'albums/gunship.jpg',
      ],
    };
  },
});

import { defineStore } from 'pinia';

export const useSongsStore = defineStore({
  id: 'songs',
  state() {
    return {
      list: [
        {
          name: 'Clear',
          artistName: 'Minerve',
          year: 2001,
          image: `audio/minerve.jpg`,
          songSrc: `audio/clear.mp3`,
        },
        {
          name: 'It All Started with a Train',
          artistName: 'Daybehavior',
          year: 2001,
          image: `audio/daybehavior.jpg`,
          songSrc: `audio/daybehavior.mp3`,
        },
        {
          name: 'One of Us',
          artistName: 'Mental Exile',
          year: 2003,
          image: `audio/mental-exile.jpg`,
          songSrc: `audio/one_of_us.mp3`,
        },
        {
          name: 'Scars',
          artistName: 'System Glitch',
          year: 2003,
          image: `audio/system-glitch.jpg`,
          songSrc: `audio/scars.mp3`,
        },
        {
          name: 'Place Where I Belong',
          artistName: 'Mental Discipline',
          year: 2003,
          image: `audio/mental-discipline.jpg`,
          songSrc: `audio/pwib.mp3`,
        },
        {
          name: 'Young and Wild and Free',
          artistName: 'System Glitch',
          year: 2003,
          image: `audio/system-glitch.jpg`,
          songSrc: `audio/young_and_wild.mp3`,
        },

        {
          name: 'Until the End',
          artistName: 'Mental Discipline',
          year: 2003,
          image: `audio/ue.jpg`,
          songSrc: `audio/until_the_end.mp3`,
        },
      ],
    };
  },
});

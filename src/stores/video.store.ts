import { defineStore } from 'pinia';

export const useVideoStore = defineStore({
  id: 'video',
  state() {
    return {
      synthpopVideos: [
        {
          artist: 'Mental Exile',
          song: 'Renegades',
          image: 'videos/renegades.webp',
          url: 'https://www.youtube.com/watch?v=rg7tRGi-1Tk',
        },
        {
          artist: 'Ou Est Le Swimming Pool',
          song: 'Dance The Way I Feel',
          image: 'videos/oelsw.webp',
          url: 'https://www.youtube.com/watch?v=2bLCyG1to9A',
        },
        {
          artist: 'Kite',
          song: 'Count The Days',
          image: 'videos/kite.webp',
          url: 'https://www.youtube.com/watch?v=eeETDAqTBE8',
        },
        {
          artist: 'Electro Spectre',
          song: ' Where Two Hearts Meet ',
          image: 'videos/espectre.webp',
          url: 'https://www.youtube.com/watch?v=RAhHkbbg-WA',
        },
        {
          artist: 'Kat von D',
          song: 'Fear You',
          image: 'videos/katvond.webp',
          url: 'https://www.youtube.com/watch?v=jFyWu_a2WQc',
        },
        {
          artist: 'Black Nail Cabaret',
          song: 'No Gold',
          image: 'videos/blacknc.webp',
          url: 'https://www.youtube.com/watch?v=qRipsM-qrWI',
        },
        {
          artist: 'Male Tears',
          song: 'Hit Me',
          image: 'videos/male_tears.webp',
          url: 'https://www.youtube.com/watch?v=aZIg-0YpupM',
        },
      ],
      darkwaveVideos: [
        {
          name: 'Actors',
          song: 'Like Suicide',
          image: 'videos/actors.webp',
          url: 'https://www.youtube.com/watch?v=zLoqT_TdVY4',
        },
        {
          name: 'Geometric Vision',
          song: 'Slowmotion',
          image: 'videos/geo.webp',
          url: 'https://www.youtube.com/watch?v=8SE7fD-DoJg',
        },
        {
          name: 'Clan of Xymox',
          song: 'She',
          image: 'videos/clan.webp',
          url: 'https://www.youtube.com/watch?v=3k4l1T-tGPw',
        },
        {
          name: 'Drab Majesty',
          song: 'Out of Sequence',
          image: 'videos/drab.webp',
          url: 'https://www.youtube.com/watch?v=k5411duvNeE',
        },
        {
          name: 'Hapax',
          song: 'Silvery Track',
          image: 'videos/hapax.webp',
          url: 'https://www.youtube.com/watch?v=AhS8jfAOevo',
        },
        {
          name: 'Kaelan Mikla',
          song: 'Kalt',
          image: 'videos/mikla.webp',
          url: 'https://www.youtube.com/watch?v=ImyPz4tqPFU',
        },
        {
          name: 'Pink Turns Blue',
          song: 'You Still Means Too Much To Me',
          image: 'videos/ptb.webp',
          url: 'https://www.youtube.com/watch?v=goK9_etF2OY',
        },
        {
          name: 'Twin Tribes',
          song: 'Shadows',
          image: 'videos/twin_tribes.webp',
          url: 'https://www.youtube.com/watch?v=O1EUT1h9gEQ',
        },
      ],
    };
  },
});

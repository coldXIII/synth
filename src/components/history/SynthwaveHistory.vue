<template>
  <div class="box">
    <h1>History of SynthWave</h1>
    <article>
      <p>
        Synthwave is (yet another) genre based on nostalgia. It is, in its
        purist form, a callback to 80s synthpop. It aims to recall very specific
        aspects of the late 70s, 80s, and early 90s. Namely the work of
        soundtrack composers like John Carpenter, Vangelis, and Tangerine Dream,
        along with other synthpop icons like New Order, Gary Numen, and the
        Eurythmics (synthpop itself was a genre kicked off by too much popcorn).
        <br /><br />
        The visual highlights usually include neon lights, ferraris and
        DeLoreans, and all things Miami/California. Probably the biggest visual
        influences come from the Back to the Future films, along with the movies
        Blade Runner, They Live, Starman, Escape From New York, Halloween, and
        Tron. Not to mention Miami Vice and Nightrider. There are undoubtedly
        more, but these are the visuals that are at the top of my head. (And
        count them, no less than FOUR John Carpenter movies… the man, who
        composed and performed much of his own soundtracks, is so seminal to the
        period and to synthwave enthusiasts that he even narrated the most spot
        on documentary about the movement, The Rise of the Synths).
        <br /><br />
        The first sign that synthwave and 80s nostalgia was officially big was
        the 2012 movie Drive starring Ryan Gosling. Electric Youth was behind
        the main hit of the soundtrack, “A Real Hero”. Though they said it’s not
        a synthwave song, it still captured everything that was the 80s. “I
        think it made people okay to love pink neon lights and cities at night,”
        said composer Carpenter Brut on the Rise of the Synths. “When media
        outlets discover something for them, it’s new. But people making music
        with synths, it’s not really new. But I think [Drive] was a trigger,
        because the song was a hit and then people were like: ‘Hey, why don’t we
        do the same?’”<br /><br />
        As Brut points out, just because it suddenly became on the media map,
        doesn’t mean it wasn’t being done before. It absolutely was. It
        basically followed the same flow as the predecessors. Just as it went
        from disco and the Beegees to Gary Numan, Kraftwerk, and the rest of
        synthpop, so it went from nu-disco (French House) and Thomas Bangalter
        to synthwave and Lazerhawk. French artists like Daft Punk, Stardust, and
        Cassius, helped glamourize the 80s feel and imagery. They really kicked
        off the movement, inspiring the likes of future outrun (an early name
        for synthwave) genre-pioneers like Kavinsky. Outrun musicians tapped
        into these 80s pop culture symbols and ran with it. <br /><br />
        From Kavinsky, others joined in. The original synthwave producers were
        those like Mitch Murder, The Midnight, Miami Nights 1984, and Lazerhawk.
        Many have stopped producing or moved on. “The reality is that synthwave
        from the late ‘00s to the mid ‘10s captured a very specific moment in
        time,” wrote Avery, “a moment when the childhood memories of its
        creators from the 1980s were vivid and still had a strong, tangible
        emotional pull.” It was an era of Myspace and lonely Internet boards.
        Back when people were supportive of each other and before everyone
        turned into a Twitter critic trying to be famous for insults. It was a
        simpler time. I’m not even sure that Kavinsky’s “Autodrive Testarossa”
        can be considered “synthwave” as it’s not really that retro. It is synth
        heavy though and takes some 80s elements (the song’s main arp is
        definitely remiscent of Halloween).
      </p>
    </article>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';
.box {
  background-color: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  flex: 1 1 50%;

  h1 {
    text-align: center;
    margin: 1rem auto 2rem;
    color: $white;
    text-shadow: 2px 2px 1px $pink, -2px -2px 1px $blue;
  }
  article {
    width: 80%;
    max-height: 70vh;
    padding: 2rem;
    overflow-y: scroll;
    scrollbar-width: none;
    border-radius: 0.5rem;
    border: 2px solid $pink;
    box-shadow: 0 0 10px $purple;
     @media(max-width:550px){
       height: 50vh;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>

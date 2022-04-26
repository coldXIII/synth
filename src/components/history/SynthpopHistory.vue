<template>
  <div class="box">
    <h1>History of SynthPop</h1>
    <article>
      <p>
        Synth-pop is a popular music genre that combines the post-punk energy of
        new wave with the innovations of 1970s electronic music. Riding a wave
        of synthesizer technology, groups like New Order, the Human League,
        Depeche Mode, Duran Duran, Tears for Fears, and Eurythmics scored
        numerous hits in the United States, the UK, and around the world.
        <br /><br />
        Synth-pop—sometimes referred to as electro-pop—stems from the electronic
        music of the 1970s that Kraftwerk and Brian Eno helped pioneer. Like
        these early electronic acts, synth-pop groups favored early synthesizers
        (such as the Minimoog from Robert Moog) and drum machines (particularly
        the Roland TR-808 and TR-909). While many 1970s electronic compositions
        were meandering and experimental (see Eno's collaborations with David
        Bowie on Heroes), synth-pop songs were often short and succinct,
        slotting perfectly into FM radio stations and MTV.
        <br /><br />
        <b> Punk rock origins:</b> Most of the musicians who defined the
        synth-pop movement have their origins in punk rock. Tubeway Army, an
        English group fronted by Gary Numan, scored a record contract based on
        their guitar-driven live shows. Yet their eponymous debut album arrived
        in 1978 packed with synth sounds thanks to Numan's discovery of the
        Minimoog synthesizer. This sound defined one of their major hits, "Are
        Friends Electric?" Meanwhile, the British band New Order arose from the
        ashes of Joy Division, a guitar group built on lead singer Ian Curtis's
        dour, post-punk energy. Following Curtis's death, the group handed vocal
        duties to guitarist Bernard Sumner and made keyboards a more integral
        part of the New Order sound. <br /><br />
        <b>Skyrocketing popularity:</b> It did not take long for synth-pop to
        rocket up the pop charts. Thanks to ample hooks and clever music videos,
        many groups enjoyed rapid mainstream success including Duran Duran, Soft
        Cell, Thomas Dolby, Ultravox, Alphaville, the Thompson Twins, the Human
        League, and Tears for Fears. When A Flock of Seagulls released "I Ran
        (So Far Away)" in 1982, it was a massive MTV hit, as were "Take on Me"
        for A-ha and "Fade to Grey" for Visage. <br /><br />
        <b>Lasting influence:</b> Synth-pop waned in the 1990s, as pop music
        tastes swung back to live instruments. But by the 2010s, guitar music
        had started to fade in popularity, and a new wave of synth-pop bands
        began to emerge including Chvrches, La Roux, the Naked and Famous, Cut
        Copy, and Calvin Harris. Synth-pop keyboards and drum machines have also
        taken hold among indie and hip hop artists of the present day.
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
    box-shadow: 0 0 10px $pink;
    @media(max-width:550px){
       height: 50vh;
    }


    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>

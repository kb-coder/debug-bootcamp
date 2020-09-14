<template>
  <div>
    <hero-bar
      hero-title="About"
      hero-subtitle="My Company"
    />
    <div class="pt-3 pb-3 pr-6 pl-6">
      <p>Bacon ipsum dolor amet swine venison chicken porchetta pig picanha sirloin kevin spare ribs. Turducken filet mignon jerky pork chop chislic flank ground round ball tip biltong tri-tip. Turkey ribeye drumstick bacon porchetta. Tongue ribeye frankfurter drumstick pork belly porchetta brisket ham pork loin. Meatball chicken filet mignon, shank porchetta picanha leberkas beef brisket tri-tip. Filet mignon doner tenderloin, pork ball tip chuck tongue bacon jowl. Swine strip steak buffalo tenderloin fatback kevin tri-tip short loin burgdoggen bresaola frankfurter doner pork loin capicola.</p>
      <p>Sausage porchetta chicken short ribs, pork belly ribeye filet mignon picanha meatloaf. Pancetta swine kielbasa short ribs frankfurter. Porchetta tongue short ribs t-bone pancetta ball tip sausage hamburger tenderloin. Sausage picanha corned beef turducken, biltong turkey venison jerky pork loin. Kielbasa tri-tip jowl picanha, frankfurter shoulder sausage shankle burgdoggen corned beef tongue ham hock. Strip steak burgdoggen andouille short loin kielbasa ribeye, ham shoulder.</p>
      <p>Picanha chislic t-bone ham landjaeger capicola. Burgdoggen prosciutto buffalo frankfurter drumstick ball tip rump biltong. Ball tip shoulder venison, jowl fatback t-bone beef flank ground round brisket hamburger cupim ribeye short ribs. Shank spare ribs turkey, tri-tip ham hock tongue pig pork belly boudin chuck pork loin chislic flank meatball.</p>
      <p>Capicola brisket fatback cow t-bone ball tip strip steak venison pig. Pork chop frankfurter tenderloin rump, drumstick brisket kevin ground round pig t-bone. Tri-tip meatball tenderloin burgdoggen venison shank biltong landjaeger spare ribs sirloin buffalo andouille fatback. Salami ball tip brisket frankfurter, biltong sirloin flank chislic meatball tri-tip cow leberkas capicola ribeye drumstick. Porchetta drumstick turducken filet mignon pork belly shankle. Pig turkey brisket filet mignon.</p>
      <p>Jerky cow beef ribs, doner boudin burgdoggen pork ground round tail shankle fatback pancetta landjaeger chicken t-bone. Short loin meatloaf pig, venison ball tip beef leberkas prosciutto frankfurter jowl hamburger beef ribs shank pork chop. Ribeye cow pancetta burgdoggen pastrami frankfurter salami short ribs tongue pork loin spare ribs. Turkey sausage frankfurter bacon salami pork, short ribs ham pork belly buffalo pork chop ball tip boudin beef shoulder.</p>
    </div>
  </div>
</template>
<script>
import { HeroBar } from '@/components/layout'

export default {
  name: 'About',
  components: {
    HeroBar
  }
}
</script>
<style lang="scss" scoped>
p {
  padding: 7px 0;
}
</style>

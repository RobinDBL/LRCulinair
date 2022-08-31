import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsItems : Array<any> = [
    {
      alignment : "left",
      text: `Uit onze hobby, na verschillende kookopleidingen en werkervaring hebben wij,  Ludwig en Rita, besloten een eigen zaak te starten.
      Wij bieden een creatieve eigentijdse keuken met verse seizoensproducten aangepast aan het soort feest en conform aan de laatste voeding hygiëne. 
      <br>Elk feest moet uniek zijn met oog voor het kleinste detail! 
      Daarom vinden wij overleg met de klant zeer belangrijk.
      Heb je een feestje, BBQ, … Wij koken aan huis. Ook afhaalmenu of tapasschotels zijn mogelijk.
      <br>Aarzel niet ons te contacteren om een vrijblijvende en gratis offerte te vragen. `,
      image: "../../assets/images/homepage_1.jpg"
    },
    {
      alignment: "right",
      text: `Wij hebben uw keuken niet nodig, enkel ruimte waar wij onze keuken kunnen opstellen.<br>
      Alle aperitiefbordjes en borden worden door ons voorzien.
      Verzorgen wij ook uw dranken, dan worden de  aperitiefglazen, waterglazen en wijnglazen door ons voorzien.
      Aperitieftafels met hoes kan kunnen wij eveneens ter beschikking stellen, mits een kleine meerprijs.`,
      image: "../../assets/images/homepage_2.jpg"
    },
    {
      alignment: "left",
      text: `<span class="underline">BARBECUE</span><br> Wilt u een feestje onder vrienden zonder u zorgen te maken over wie het vlees zal bakken,
      wie de groentjes zal schoonmaken en bovenal wie dit achteraf allemaal zal afwassen, dan bent u bij ons aan het goede adres.<br>
      Wij komen ter plaatse om uw BBQ tot in de puntjes te verzorgen,
      dit van een tradionele BBQ tot een Culinaire BBQ, alles  
      met aangepaste groentjes, aardappelen, koude en warme sausjes. <br> 
      Borden en bestek worden door ons voorzien 
      <br>Alles kan naar uw wens. <br>Voor meer info neem gerust vrijblijvend contact op.`,
      image: "../../assets/images/voorbeeldfoto's/homepage_4.jpg"
    },
    {
      alignment: "right",
      text: `TAPASSCHOTEL <br>
      Een rijk gevulde schotel met een ruim aanbod aan fijne charcuterie, kaas, tapenade, olijven, ansjovis, zongedroogde tomaatjes, scampi… Alles aangepast aan het seizoen.<br>
      Voor dezelfde schotel als volle maaltijd, mag u zich verwachten aan een nog meer uitgebreide tapasschotel aangevuld 
      met broodjes.`,
      image: "../../assets/images/voorbeeldfoto's/homepage_2.jpg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

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
      text: `Uit onze hobby en na verschillende kookopleidingen en werkervaring hebben wij  Ludwig en Rita besloten een eigen zaak te starten.
      Wij bieden een creatieve eigentijdse keuken met verse seizoen producten aangepast aan het soort feest en conform aan de laatste voeding hygiëne. 
      Elk feest moet uniek zijn met oog voor het kleinste detail ,
      Daarom is overleg met de klant zeer belangrijk
      Heb je een feestje, BBQ …wij koken aan huis of afhaal  menu of tapasschotels zijn ook mogelijk
      Aarzel niet ons te contacteren om een vrij blijvende en gratis offerte te vragen. `,
      image: "../../assets/images/homepage_1.jpg"
    },
    {
      alignment: "right",
      text: `wij hebben u keuken niet nodig enkel een ruimte dat we onze keuken kunnen opstellen
      Alle apperitiefbordjes en borden worden door ons voorzien.
      Indien het met de drank in is worden de  aperitiefglazen ,waterglazen en wijnglazen door ons voorzien.
      Apperitieftafels met hoes kan door ons voorzien zijn mits een kleine meerprijs.`,
      image: "../../assets/images/homepage_2.jpg"
    },
    {
      alignment: "left",
      text: `BBQ u wil een feestje onder vrienden zonder u zorgen te maken over wie het vlees zal bakken
      Wie de groentjes zal schoonmaken en bovenal wie dit achteraf allemaal zal afwassen.
      Wij komen ter plaatse om u BBQ tot in de puntjes te verzorgen,
      dit van een tradionele BBQ tot een Culinaire BBQ 
      met aangepaste groentjes, aardappelen ,koude en warme sausjes 
      Borden en bestek worden door ons voorzien 
      Alles kan naar u wens voor meer info neem gerust vrijblijvend contact op .`,
      image: "../../assets/images/voorbeeldfoto's/homepage_4.jpg"
    },
    {
      alignment: "right",
      text: `Tapasschotel voor bij de aperitief
      Een rijk gevulde schotel met een ruim aanbod fijne charcuterie, kaas ,tapenade ,Olijven, ansjovis, zongedroogde tomaatjes , scampi … aangepast aan het seizoen
      Tappasschotel voor bij de aperitief en als volle maaltijd 
      Hierbij mag u zich verwachten aan een nog meer uitgebreide tapasschotel aangevuld 
      met broodjes`,
      image: "../../assets/images/voorbeeldfoto's/homepage_2.jpg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  featured = false;
  featuredMenu = [
    {
      titel: "testfeatured",
      menucontent: 
      [
        "bla",
        "bla",
      ],
      prijs: "testprijs"
    }
  ]

  menus = [ //A list with menus
    {
      titel: "Walking Dinner", // Menu title
      menucontent: //Menu content
        [
          "3 hapjes van de chef",
          "Scampi safraan met fijne groentjes <br> Serranoham met meloen, slaatje en dressing",
          "Soepje", "Tongrolletjes met zeeevruchtensaus en puree <br> Varkenshaasje met garnituur <br> Gegrilde chateaubriand en garnituur <br> Dit alles met aangepaste aardappelgerechten",
          "ijstaart met 2 sausjes (+€2) OF <br> Dessertbordje",
          "Koffie of thee met versnaperingen"
        ],
      
      //Menu price
      prijs: "Walking diner zonder drank: 50 Euro per/pers. (incl. BTW) <br> Walking diner met drank tot aan de koffie 65 Euro per/pers. (incl. BTW) <br> <small>(inbegrepen dranken zijn: Cava/fruitsap/witte wijn/rode wijn/plat water en spuitwater)</small>"
    },
    {
      titel: "L & R Menu",
      menucontent: 
        [
          "Aperitief receptie met aperitief bordje (3 hapjes) en 2 x 1 hapje (1u receptie)",
          "Slaatje van gerookte zalm met garnalen en dressing <br> OF <br> Serranoham met meloen, slaatje en dressing <br> OF <br> Scampi met saffraan en fijne groentjes",
          "Paprika soep",
          "Varkenshaasje | champignonsaus | warme groentjes en gegratineerde aardappeltjes <br> OF <br> Gegrilde chateaubriand | béarnaise en/of pepersaus | warme groentjes en verse frietjes (+5€)",
          "ijstaart met 2 sausjes (+€2) <br> OF <br> Dessertbordje",
          "Koffie of thee met versnaperingen"
        ],
      
      prijs: "Menu zonder drank: 50 Euro per/pers. (incl. BTW) <br> Menu met drank: 65 Euro per pers. (incl. BTW) <br> <small>(inbegrepen dranken zijn: Cava/fruitsap/witte wijn/rode wijn/plat water en spuitwater). Dit tot aan de koffie.</small>"
    },
    {
      titel: "BBQ",
      menucontent:
        [
          "Kippenboutje met currysausje <br> Scampi saffraan en fijne groentjes <br> Carpaccio van rund <br> Coquille met pastinaak / pijnboompitten",
          "Rode zalm op een bedje van prei <br> Tongrolletje met zeevruchtensausje",
          "Kipfilet / chateaubriand / Ardeens gebraad / ribbetjes / bbq worst / brochette <br> Met warme en koude sausjes <br> Koude groentjes / pasta / pomme rissolé / gratin aardappelen",
          "ijstaart met 2 sausjes (+€2) <br> OF <br> Dessert bord",
          "Koffie of thee met versnaperingen"
        ],
        prijs: "Menu zonder drank: 50 Euro per/pers. (incl. BTW) <br> Menu met drank: 65 Euro per pers. (incl. BTW) <br> <small>(inbegrepen dranken zijn: Cava/fruitsap/witte wijn/rode wijn/plat water en spuitwater). Dit tot aan de koffie.</small>"
      },
  ];

}

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
          "Scampi safraaan met fijne groentjes <br> Serranoham met meloen slaatje en dressing",
          "Soepje", "Tongrolletjes met zeeevruchtensaus en puree <br> Varkenshaasje met garnituur <br> Gegrilde chateaubriand en garniturr <br> Dit alles met aangepaste aardappelgerechten",
          "Ijstaart met 2 sausjes (+2€) OF <br> Dessertbordje",
          "Koffie of thee en versnapperingen"
        ],
      
      //Menu price
      prijs: "Walking diner zonder drank: 50 Euro per/pers. (incl. BTW) <br> Walking diner met drank tot aan de koffie 65 Euro per/pers. (incl. BTW) <br> <small>(inbegrepen dranken zijn: Cava/fruitsap/witte wijn/rode wijn/plat water en spuitwater)</small>"
    },
    {
      titel: "L & R Menu",
      menucontent: 
        [
          "Aperitief receptie met aperitief bordje (3 hapjes) en 2 x 1 hapje (1u receptie)",
          "Slaatje van gerookte zalm met garnalen en dressing OF <br> Serranoham met meloen slaatje en dressing OF <br> Scampi met saffraan en fijne groentjes",
          "Paprika soep",
          "Varkenshaasje | champignionsaus | warme groentjes en gegratineerde aardappeltjes OF <br> Gegrilde chateaubriand | béarnaise en/of pepersaus | warme groentjes en verse frietjes (+5€)",
          "Ijstaart met 2 sausjes (+2€) OF <br> Dessertbordje",
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
          "Kipfilet / chateau briand / ardeensgebraad / ribbetjes / bbq worst / brochtette <br> Dit met warme en koude sausjes <br> Koude groentjes / pasta / pomme rissolé / gratin aardappelen",
          "Ijstaart met 2 sausjes (+€2) OF <br> Dessert bord",
          "Koffie of thee en versnaperingen"
        ],
        prijs: "Menu zonder drank: 50 Euro per/pers. (incl. BTW) <br> Menu met drank: 65 Euro per pers. (incl. BTW) <br> <small>(inbegrepen dranken zijn: Cava/fruitsap/witte wijn/rode wijn/plat water en spuitwater). Dit tot aan de koffie.</small>"
      },
  ];

}

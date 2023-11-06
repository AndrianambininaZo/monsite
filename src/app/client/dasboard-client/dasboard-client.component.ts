import { Component, OnInit } from '@angular/core';
import { ImagesModel } from 'src/app/model/client.model';

@Component({
  selector: 'app-dasboard-client',
  templateUrl: './dasboard-client.component.html',
  styleUrls: ['./dasboard-client.component.scss']
})
export class DasboardClientComponent implements OnInit {
  image = [
    './../../../assets/images/superfondtsik.png',
    './../../../assets/images/robeslide.png',
    'a./../../../assets/images/enfanslide.png',
    'a./../../../assets/images/slidersport.png',
  ];
  images :Array<ImagesModel>= [
    {img:'./../../../assets/images/superfondtsik.png',nom:'Chemis bley',genre:'Homme'  },
    {img:'./../../../assets/images/robeslide.png',nom:'Robe de soir',genre:'Femme'  },
    {img:'./../../../assets/images/enfanslide.png',nom:'Vtemenet ete',genre:'Enfant'  },
    {img:'./../../../assets/images/slidersport.png',nom:'Sport de',genre:'Homme'  },
  ]

  customOptions: any = {
    loop: true, // Carrousel infini
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000, // Activation des indicateurs de pagination    
  };
  text = 'BIENVENUE EN SOCIETE AROSAINA';
  animationText = '';
  constructor() { }
 
  ngOnInit() {
    this.animateText();
  }

  animateText() {
    const textLength = this.text.length;
    let currentIndex = 0;
    let isRverse = false;

     setInterval(() => {
      if (currentIndex === textLength) {
        isRverse = true;
      } else if (currentIndex === 0) {
        isRverse = false;
      }

      this.animationText= this.text.substring(0, currentIndex);

      if (!isRverse) {
        currentIndex++;
      } else {
        currentIndex--;
      }
    }, 250);
  }

}

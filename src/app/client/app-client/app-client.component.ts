import { Component, OnInit ,ElementRef, ViewChild, HostListener} from '@angular/core';

@Component({
  selector: 'app-app-client',
  templateUrl: './app-client.component.html',
  styleUrls: ['./app-client.component.scss']
})
export class AppClientComponent implements OnInit {
  isOpenNav = false;
  text = 'Mon texte';
  animatedText = '';
  isChat:boolean=false;
  scrollPosition: number = 0;
  showButton: boolean = false;
  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollPosition = window.scrollY;
    if (this.scrollPosition > window.innerHeight / 2) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  openMenu(){
    this.isOpenNav = !this.isOpenNav;
  }
  fermerMenu(){
    this.isOpenNav = !this.isOpenNav;    
  }

  
  animateText() {
    const textLength = this.text.length;
    let currentIndex = 0;
    let reverse = false;

     setInterval(() => {
      if (currentIndex === textLength) {
        reverse = true;
      } else if (currentIndex === 0) {
        reverse = false;
      }

      this.animatedText = this.text.substring(0, currentIndex);

      if (!reverse) {
        currentIndex++;
      } else {
        currentIndex--;
      }
    }, 250);
  }

  allerTop() {
    window.scrollTo(0, 0);
    this.showButton = false;
  }
  
  openChat(){
    this.isChat=!this.isChat
  }


}

import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { BotService } from '../services/bot.service';
import { SOCKET_EVENTS } from '../models.ts/enums';

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  greetingsMessage = '';
  passcode = '';

  @ViewChild('myModal') myModal: any;
  @ViewChild('projects') projectsSection: any;
  @ViewChild('work') workSection: any;

  constructor(private botService: BotService) { }

  ngOnInit() {
    this.setGreetingMessage();
    setInterval(() => { this.setGreetingMessage() }, 5 * 60 * 1000)
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.botService.botCommand.subscribe(result => {
      switch (result.type) {
        case SOCKET_EVENTS.PASSCODE:
          this.passcode = result.payload;
          this.myModal.show();
          break;

        case SOCKET_EVENTS.NAVIGATE:
          if (result.payload) {
            if (result.payload.toLowerCase() == 'projects') {
              this.scroll(this.projectsSection.nativeElement);
            }
            else if (result.payload.toLowerCase() == 'work') {
              this.scroll(this.workSection);
            }
          }
          break;

      }
    })
  }

  get socketEvents() {
    return SOCKET_EVENTS;
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

  setGreetingMessage() {
    let today = new Date()
    let curHr = today.getHours()

    if (curHr < 12) {
      this.greetingsMessage = 'Good Morning!⛅️';
    } else if (curHr < 18) {
      this.greetingsMessage = 'Good Afternoon!🌞';
    } else {
      this.greetingsMessage = 'Good Evening!🌛';
    }
  }

  scroll(el: HTMLElement) {
    console.log("Scrolling", el);
    el.scrollIntoView({ behavior: "smooth" });
    this.isCollapsed = true
  }

}

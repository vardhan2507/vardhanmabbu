import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})
export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  greetingsMessage = '';
  constructor() { }

  ngOnInit() {
    this.setGreetingMessage();
    setInterval(() => { this.setGreetingMessage() }, 5 * 60 * 1000)
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
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
    el.scrollIntoView({ behavior: "smooth" });
    this.isCollapsed = true
  }

}

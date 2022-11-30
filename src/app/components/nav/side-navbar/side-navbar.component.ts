import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-side-navbar",
  templateUrl: "./side-navbar.component.html",
  styleUrls: ["./side-navbar.component.css"],
})
export class SideNavbarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}

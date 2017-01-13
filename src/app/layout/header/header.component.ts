import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  @Output() onLangClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  langClicked(lang: string): void {
    this.onLangClicked.emit(lang);
  }

}

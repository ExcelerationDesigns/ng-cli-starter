import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// import { Angulartics2, Angulartics2GoogleAnalytics } from 'angulartics2';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private titleService: Title,
              private translate: TranslateService,
              /* private angulartics2: Angulartics2,
              private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics */) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en_US');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en_US');
    translate.get('appTitle').subscribe(
      (res: string) => this.titleService.setTitle(res)
    );
  }

  toggleLang(langToUse: string) {
    this.translate.use(langToUse);
  }
}

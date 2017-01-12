/* tslint:disable:no-unused-variable */
import { Title, By } from '@angular/platform-browser';
import { getTestBed, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, Injector } from '@angular/core';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SpyLocation } from '@angular/common/testing';
import { PlatformLocation } from '@angular/common';

import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { AngularFireModule } from 'angularfire2';
import { Angulartics2, Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { buildTranslationPathFromHref, createTranslateLoader } from './app.module';

import { AppComponent } from './app.component';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './testing/router-stubs.spec';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const mockBackendResponse = (connection: MockConnection, response: string) => {
  connection.mockRespond(new Response(new ResponseOptions({ body: response })));
};

describe('AppComponent', () => {
  let injector: Injector;
  let backend: MockBackend;
  let translate: TranslateService;
  let title: Title;
  let connection: MockConnection; // this will be set when a new connection is emitted from the backend.
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports: [
        HttpModule,
        TranslateModule.forRoot({
          deps: [Http, PlatformLocation],
          provide: TranslateLoader,
          useFactory: (createTranslateLoader)
        }),
        AngularFireModule,
        // Angulartics2Module
        // Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
      ],
      providers: [
        Title,
        {
          provide: XHRBackend,
          useClass: MockBackend
        },
        // Angulartics2,
        // { provide: Location, useClass: SpyLocation },

      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      appComponent = fixture.componentInstance;
    });

    injector = getTestBed();
    backend = injector.get(XHRBackend);
    translate = injector.get(TranslateService);
    title = injector.get(Title);
    // sets the connection when someone tries to access the backend with an xhr request
    backend.connections.subscribe((c: MockConnection) => connection = c);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  afterEach(() => {
    injector = undefined;
    backend = undefined;
    translate = undefined;
    connection = undefined;
    title = undefined;
  });

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should be able to get translations', () => {
    translate.use('en');

    // this will request the translation from the backend because we use a static files loader for TranslateService
    translate.get('TEST').subscribe((res: string) => {
      expect(res).toEqual('This is a test');
    });

    // mock response after the xhr request, otherwise it will be undefined
    mockBackendResponse(connection, '{"TEST": "This is a test", "TEST2": "This is another test"}');

    // this will request the translation from downloaded translations without making a request to the backend
    translate.get('TEST2').subscribe((res: string) => {
      expect(res).toEqual('This is another test');
    });
  });

  it('should change title of application', async(() => {
    title.setTitle('TEST');
    fixture.detectChanges();

    expect(title.getTitle()).toEqual('TEST');

  }));

  it('should change title of application and use the string from the translation provider', async(() => {

    translate.use('en');
    // this will request the translation from the backend because we use a static files loader for TranslateService
    fixture = TestBed.createComponent(AppComponent);

    // mock response after the xhr request, otherwise it will be undefined
    mockBackendResponse(connection, '{"appTitle": "Exceleration Designs"}');

    expect(title.getTitle()).toEqual('Exceleration Designs');

  }));

  it('should get RouterLinks from template', () => {
    expect(links.length).toBe(2, 'should have 2 links');
  });

  it('should get Home from RouterLinks from template', () => {
    expect(links[0].linkParams).toBe('/home', '1st link should go to Home');
  });

  it('should get About from RouterLinks', () => {
    expect(links[1].linkParams).toBe('/about', '2nd link should go to About');
  });

  it('should get About from RouterLinks', () => {
    expect(links[1].linkParams).toBe('/about', '2nd link should go to About');
  });

  describe('handling baseref paths for asset directory', () => {
    const assetPath = `/assets/i18n`;

    it('should handle null', () => {
      expect(buildTranslationPathFromHref(null)).toBe(assetPath);
    });

    it('should handle default case of /', () => {
      expect(buildTranslationPathFromHref('/')).toBe(assetPath);
    });

    it('should handle an actual basehref', () => {
      expect(buildTranslationPathFromHref('/ng-cli-starter/')).toBe('/ng-cli-starter' + assetPath);
    });
  });

});

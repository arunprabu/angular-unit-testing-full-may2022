// Test cases are written here
// Configures and initializes environment for unit testing and provides methods for creating 
// components and services in unit tests.
import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
// Sets up the router to be used for testing.
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './about/about.component';
// Taking up the component for testing
import { AppComponent } from './app.component'; 
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';

// Describing What Component I am testing
describe('AppComponent', () => {
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UsersComponent },
    { path: 'todo', component: TodoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        TodoComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Unit Testing Tutorial'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Unit Testing Tutorial');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to Angular Unit Testing');
  });
});

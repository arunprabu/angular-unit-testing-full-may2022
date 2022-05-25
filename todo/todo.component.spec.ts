import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: any;

  // dummy todoList items
  const todoData: any[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      providers: [
        {
          provide: TodoService,
          useValue: {
            // pass dummy data to TodoService getTasks method
            getTasks: () => of(todoData )
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have todo item from service in component', () => {
    fixture.detectChanges();
    expect(component.todoList).toEqual(todoData);
  });
});

import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { BehaviorSubject, forkJoin, fromEvent, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
//import { LoginService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  obsArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  items$: Observable<any> = this.obsArray.asObservable();
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(private appService: LoginService) {}

  ngOnInit() {
    this.getData();
  }
  
  private getData() {
    this.appService.getData(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.obsArray.next(data);
    });
 
    const content = document.querySelector('.items');
    const scroll$ = fromEvent(content!, 'scroll').pipe(map(() => { return content!.scrollTop; }));
 
    scroll$.subscribe((scrollPos) => {
      let limit = content!.scrollHeight - content!.clientHeight;
      if (scrollPos === limit) {
        this.currentPage += this.pageSize;
        forkJoin([this.items$.pipe(take(1)), this.appService.getData(this.currentPage, this.pageSize)]).subscribe((data: Array<Array<any>>) => {
          const newArr = [...data[0], ...data[1]];
          this.obsArray.next(newArr);
        });
      }
    });
  }
}

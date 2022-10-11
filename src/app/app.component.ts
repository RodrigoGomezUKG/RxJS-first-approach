import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([10, 20, 30, 40]).subscribe({
      next: (item) => console.log(`resulting item... ${item}`),
      error: (err) => console.log(`error ocurred... ${err}`),
      complete: () => console.log('complete'),
    });

    from(['string 1', 'string 2', 'string 3']).subscribe({
      next: (item) => console.log(`reading : ${item}`),
      error: (err) => console.log(`error in ${err}`),
      complete: () => console.log(`all strings readed`),
    });
  }
}

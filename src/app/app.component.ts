import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-loading';
  data:string = ''

  getValue(event:string){
    this.data = event
  }
  changeDetect(): boolean{
    console.log('called APP Component Change Detection');
    return true
  }
}

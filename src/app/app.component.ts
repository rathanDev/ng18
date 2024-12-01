import { Component, ViewContainerRef, inject } from '@angular/core';
import { OutletComponComponent } from './outlet-compon/outlet-compon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng18';

  viewContainerRef = inject(ViewContainerRef);
  
  async loadLazyComponent() {
    const {LazyComponComponent} = await import('./lazy-compon/lazy-compon.component');
    this.viewContainerRef.createComponent(LazyComponComponent);
  }


  outletCompon: any = null;

  async loadOutletComponent() {
    this.outletCompon = OutletComponComponent;
  }

  testFunc() {
    console.log('testFunc')
  }

}

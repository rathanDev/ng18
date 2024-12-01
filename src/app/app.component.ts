import { Component, ViewContainerRef, inject } from '@angular/core';
import { OutletComponComponent } from './outlet-compon/outlet-compon.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng18';

  viewContainerRef = inject(ViewContainerRef);
  data: any;

  constructor(private apiService: ApiService) {}

  async loadLazyComponent() {
    const { LazyComponComponent } = await import(
      './lazy-compon/lazy-compon.component'
    );
    this.viewContainerRef.createComponent(LazyComponComponent);
  }

  outletCompon: any = null;

  async loadOutletComponent() {
    this.outletCompon = OutletComponComponent;
  }

  callApi() {
    this.apiService.callApi().subscribe({
      next: (res: any) => {
        // const obj = res[0];
        console.log('res', res);
        this.data = JSON.stringify(res.splice(0, 2));
      },
      error: (err) => console.error(err),
    });
  }
}

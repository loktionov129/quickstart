import { Component, HostBinding } from '@angular/core';
import { slideAnimation } from './../../shared/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h3>router-resolver</h3>
    <r-form></r-form>
    <r-list></r-list>
  `,
  animations: [ slideAnimation ]
})
export class RComponent {
  @HostBinding('@routeAnimation') public routeAnimation = true;
  @HostBinding('style.display')   public display = 'block';
  @HostBinding('style.position')  public position = 'absolute';

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.data.initialData);
  }

}

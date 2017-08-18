import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../shared/hero';
import { HeroService } from '../../services/hero/';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  public hero: Hero;
  private data$: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.data$ = this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe((hero: Hero) => this.hero = hero);
  }

  public ngOnDestroy(): void {
    this.data$.unsubscribe();
  }

  private goBack(): void {
    this.location.back();
  }

  private save(): void {
    if (this.hero.name) {
      this.heroService.update(this.hero).then(() => this.goBack());
    } else {
      alert('Name is required!');
    }
  }
}

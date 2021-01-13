import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animate } from '@angular/animations';
import { langHelper } from '../../../services/utilities/langHelper';
export const routeTransitionAnimations = trigger('triggerName', [
  transition('* => *', [

    query(':enter',
      [
        style({ opacity: 0.5 })
      ],
      { optional: true }
    ),

    query(':leave',
      [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0.6 }))
      ],
      { optional: true }
    ),

    query(':enter',
      [
        style({ opacity: 0.6 }),
        animate('0.2s', style({ opacity: 1 }))
      ],
      { optional: true }
    )

  ])
]);
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routeTransitionAnimations]
})

export class LayoutComponent implements OnInit {

  constructor(private router: Router, private LanguageService: langHelper) { }

  ngOnInit(): void {
    //Restore window scroll to top position
    window.scroll(0, 0);
    //this.LanguageService.switchLang();
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }
}

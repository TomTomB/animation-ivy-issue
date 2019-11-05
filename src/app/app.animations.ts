import {
  animate,
  style,
  transition,
  trigger,
  group,
  query,
  animateChild
} from '@angular/animations';

export const RevealerAnimation = [
  trigger('revealer', [
    transition(':enter', [
      style({
        height: '0px',
        overflow: 'hidden'
      }),
      animate('300ms ease-out', style({ height: '*' }))
    ]),
    transition(':leave', [
      style({
        height: '*',
        overflow: 'hidden'
      }),
      animate(
        '200ms ease-in',
        style({
          height: '0px',
          overflow: 'hidden',
          opacity: 0
        })
      )
    ])
  ])
];

export const queryInnerAnimation = trigger('queryInner', [
  transition(':leave', [group([query('@*', animateChild())])])
]);

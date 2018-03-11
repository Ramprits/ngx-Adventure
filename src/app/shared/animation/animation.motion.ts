import { trigger, state, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

export const pageAnimation = trigger("pageAnimation", [
  state("in", style({ opacity: 1, transform: "translateY(0)" })),
  transition("void => *", [
    style({
      opacity: 1,
      transform: "translateY(40px)"
    }),
    animate("400ms  ease-out")
  ]),
  transition("* => void", [
    animate(
      "400ms  ease-out",
      style({
        opacity: 0,
        transform: "translateY(40px)"
      })
    )
  ])
]);

export const triggerAnimation = trigger("listStagger", [
  transition("* <=> *", [
    query(
      ":enter",
      [
        style({ opacity: 0, transform: "translateY(-10px)" }),
        stagger("50ms", animate("550ms ease-out", style({ opacity: 1, transform: "translateY(0px)" })))
      ],
      { optional: true }
    ),
    query(":leave", animate("50ms", style({ opacity: 0 })), {
      optional: true
    })
  ])
]);

export const tagAnimation = trigger("tagAnimation", [
  state("inactive", style({ transform: "rotateY(0deg)" })),
  state("active", style({ transform: "rotateY(90deg)" })),
  transition("active => inactive", animate("300ms ease-out"))
]);
export const right25Animation = trigger("right25Animation", [
  state("inactive", style({ transform: "translateX(0)" })),
  state("active", style({ transform: "translateX(-25px)" })),
  transition("inactive <=> active", animate("400ms ease-out"))
]);
export const left25Animation = trigger("left25Animation", [
  state("inactive", style({ transform: "translateX(0)" })),
  transition("void => *", [
    style({
      transform: "translateX(25px)"
    }),
    animate("500ms 200ms ease-out")
  ]),
  transition("* => void", [
    animate(
      "500ms  200ms ease-out",
      style({
        transform: "translateX(25px)"
      })
    )
  ])
]);

# Module 6 - Variables and Tricks
## Object fit
* The `object-fit` property
  * The `cover` value
  * The `container` value
  * The `scale-down` value
  * The `fill` value
  * The `none` value
* The `object-position` property

## CSS Custom Properties 
 * Understanding Custom properties
 * Naming custom properties
 * The `var` function
   * defining fallback value
 * Valid values for custom properties
   * colors (#, rgba)
   * size units (1px, 0.5rem, 22deg)
   * listed units (hidden, visible, top, left)
   * strings ("abra cadabra")
 * Cascading variables
 * Partial values
    * We can break a color into rgba or hsla ingridients and then change only some of them
    * We can break shadow in parts and control each one with a variable
    * We can break a gradient into parts and control each one with variable
      * NOTE! it does no animate.... more on that later
    * We can break comma-separated-values into parts and control specific ones with variables
    * Grid template tracks...
    * Transforms


## The @property rule
* Use it to fine-grained control the custom properties
* Note that browser support is only around 75%... :-(
* You can define the type, inhertiance, and the initial value
* Allows you to animate things that may not be animatable otherwise like gradients

```css
@property --my-color {
  syntax: "<color>";
  inhertis: false;
  initial-value: '#aaffdd';
}
```

* You can add transition like so:
  * `transition: --my-color 1s;`
* Possible syntax values: 
  * `<length>`
  * `<number>`
  * `<percentage>`
  * `<length-percentage>`
  * `<color>`
  * `<image>`
  * `<url>`
  * `<angle>`
  * `<time>`
  * `<resolution>`
  * and a few more...


## The `calc` function
* We can provide an expression value to a property using the `calc` function
* We can combine values of different units
  * `height: calc(100vh - 100px)`
  * `padding-right: calc(10px * 2)`
* We can use it on **part** of the property
  * `border: calc(1px + 2%) solid black`
  * `transition: transform calc(1s - 120ms)`
* Calc should be used for numerics
  * lengths
  * angles
  * colors
  * time
* Calc can not be used 
  * on strings
  * on media queries
* We can add, substract (with mixed units)
* We can multiply and divide if one of the operands is a pure number
* We can nest calcs
  * `width: calc(100px - calc(100% / 7))`
  * but its not required... `width: calc(100px - (100% / 7))` also works
  
## The `calc` function with custom properties
* We can user properties inside the calc operations
  * `padding: calc(var(--standard-pad) * 2)`
* We can create a pure numerical property and add units later
  * `--amount: 2; padding: calc(var(--amount) * 1em)`
  
## The `::before` and `::after` elements
* Must have `content` in order to exist - even an empty one
* It is not placed before the element, but rather before **the content** of the element
* Cannot be used with elements that do not have content like `<img>`, `<input>`, `<br>`
* You can use them to add images, with the `url` value;
* You can attach property values using the `attr([name])` function - only as text, and only in the content property
* You can use the `counter-reset`, `counter-increment` and `counter` properties to add counters

## Gradient Backgrounds
* The `background-image` property
* Using `linear-gradient` to create an "image" on the fly
* Other gradient functions
* Defining gradient stops
* Setting the background size and position
* The `background-clip` property (Surprise!!!)


## Extra Links
* [Complete guide to CSS custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)
* [Complete guide to `calc` in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/)
* [Using @property in CSS](https://css-tricks.com/using-property-for-css-custom-properties/)
* [Animating @property](https://css-tricks.com/exploring-property-and-its-animating-powers/)
* [A Complete Guide to Gradients](https://css-tricks.com/a-complete-guide-to-css-gradients/)
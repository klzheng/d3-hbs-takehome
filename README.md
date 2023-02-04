# Time Tracking Dashboard 


This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

<br/>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

<br/>

## Overview


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

<p align="center">
  <img src="https://github.com/klzheng/d3-hbs-takehome/blob/main/src/assets/images/desktop-design.png" alt="Time Tracking Dashboard" width="100%"  />
</p>



### Links

- Solution URL: [Github Repo](https://github.com/klzheng/d3-hbs-takehome)
- Live Site URL: [Time Tracking Dashboard](https://klzheng-time-tracking-dashboard.netlify.app/)

<br/>

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Angular](https://angular.io/) - JS framework


### What I learned

First and foremost, I learned how to utilize a popular frontend framework called Angular to build out a website with design and functionality. Coming from someone who mostly just used React to build out the frontend side of things, Angular with its class-based components was definitely a change of pace. That paired along with the use of Typescript (a strict, static and syntactical superset of Javascript), there was a lot of learning and adapting involved when it came to completing this project.

When I initially approached this challenge, my thought process relied mostly on figuring out how I would complete it in React, and then finding or translating a way to implement that process in Angular. But as I started to become more familiar with the framework, I was able to think about how I could actually implement it in Angular instead of React. One thing that took me by surprise was how many files there were for each component. At the bare minimum everytime a component was created, these four other types of files were also instantiated:
- **component.css**
- **component.html**
- **component.spec.ts**
- **component.ts**

In a way this organized each component as its own separate entity, but at the same time it can quickly overwhelm a learning developer with the amount of different files that they needed to be aware of. 

Another thing that I learned about Angular was that data can be passed bi-directionally from the child and the parent components, whereas in React data flows only in one direction. By using the Input and Output decorators, I was able to pass in data to the child component, while also being able to send data from the component. You can see an example of this in action, where the component takes in ```name``` and ```imgPath``` as inputs, while outputting ```cardData``` and ```timeframe``` (take note of the specific syntax):
```ts
  @Input() name: string = "";
  @Input() imgPath: string = "";
  @Output() cardData = new EventEmitter<any>()
  @Output() timeframe = new EventEmitter<any>()
```

There were also things like if you the component to perform an action when it's initialized (on page load), you would need to import ```OnInit``` while also also extending the component, calling a specific method ```ngOnInit```, and serving the method some code, see below:
```ts
export class CardComponent implements OnInit {
  ngOnInit() {
      console.log("hello world")
  }
}
```

Another aspect of Angular that I found interesting was how multiple of the same components were generated. At least the way I implemented it was by:
```html
<app-card
    *ngFor="let d of data; let i = index"
/>
```
And so for every element in the data array, an <app-card> component was generated. Similarly, I also passed in some styling to the component:
```html
<app-card
    *ngFor="let d of data; let i = index"
    [ngStyle]="
    {
        'background-color': colors[i],
        'background-image': icons[i],
        'background-repeat': 'no-repeat',
        'background-position': 'top right',
        'border-radius': '12px'
    }"
/>
```
As well as some inputs that I mentioned earlier like ```data``` and ```timeframe```, both of which would allow for the UI data to be updated everytime a different timeframe was clicked/toggled: 
```html
<app-card 
    *ngFor="let d of data; let i = index"
    [ngStyle]="
    {
        'background-color': colors[i],
        'background-image': icons[i],
        'background-repeat': 'no-repeat',
        'background-position': 'top right',
        'border-radius': '12px'
    }"
    [data]="data[i]"
    [timeframe]="timeframe"
/>
```
In another component, I was able to take in static inputs and send outputs as follows:
```html
<app-header 
    name="Jeremy Robson" 
    imgPath="../../assets/images/image-jeremy.png"
    (cardData) = "receiveData($event)"
    (timeframe) = "updateTimeframe($event)"
/>
```
Where ```name``` and ```imgPath``` are inputs, and ```(cardData)``` and ```(timeframe)``` are outputs coming from the ```receiveData()``` and ```updateTimeframe()``` methods, respectively.

All-in-all, this challenge was fun, acted as a great refresher on the basics of building the frontend, and it allowed me to learn a lot about the Angular framework, which I have no doubts will allow me to become an even stronger developer! 



### Useful resources

- [Official Angular documentation](https://angular.io/docs) - This helped me with learning more about the basics of Angular with solid examples. Official documentation is always a great way to better understand the technology.
- [MDN Web Docs (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS) - An amazing resource to quickly figure out and touch up on common CSS properties and use cases.
- [Offical Typescript documentation](https://www.typescriptlang.org/docs/) - Great articles to help understand more about Typescript, and how it might not seem so different compared to Javascript on the surface, but there might be more to the picture... 
- [How to share data between components in Angular](https://dev.to/this-is-angular/how-to-share-data-between-components-in-angular-4i60) - A good read with more code snippets and examples to supplement the official Angular documentation in learning more about two-way data flow
- [The Dollar Sign ($) and Underscore (_) in JavaScript](https://www.thoughtco.com/and-in-javascript-2037515) - Frankly, a good article to understand more about the $ symbol and how it's commonly used in Angular components
- [What does !: mean in Typescript?](https://stackoverflow.com/questions/50983838/what-does-mean-in-typescript) - Stack Overflow is always a great backup resource to learn more about small quirks, bugs, and things that are just covered less in official documentation. It allowed me to understand what "!:" meant in Typescript. 
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Amazing resource to learn and understand visually the different properties of the CSS flexbox layout. 

<br/>

## Author

- Website - [Personal Site](https://klzheng-portfolio.netlify.app/)
- Twitter - [@klzheng_](https://www.twitter.com/klzheng_)



# personal-portfolio

This README will walk us through my journey to build my personal webiste in EmberJS.

This will be the frontend system that will hold our personal website but its built in EmberJS.

#### How will this project come together

We will be using github's commit history to show how we will build the website from the beginning to the complete project.
Each commit/commit's will break down each step of the process.

Seeing as this is just the frontend means that we will need an api backend to host out content/data/cms.

**Why do we need a api backend?**
Something needs to hold our posts, something that will document our process as we walk through this journey together.

## What will this project comprise of?

This project comprises of 2 things. A **frontend** and a **backend**.

The FRONTEND will be built out in Ember JS, or what some like to call
> A framework for ambitious web developers.

*what I nice statement*

The BACKEND will be a headless cms. Im still debating how im going to approach this still. Not sure if im going to use a headless cms, or build it from scratch. I'll come back to this later on.


## Lets start our journey

We start our journey by installing the very framework we are going to be building all this on ... EMBER.

Before we begin, there needs to be a bit of a backstory as to why im choosing Ember to build this all out in rather than any other framework or system like React, Vue, Laravel, Wordpress etc.

Short answer is because I wanted to learn Ember. Long answer is that most of these frameworks all behave in similar fashion.

They all follow similar principles. 
- Components for reusable content where we can pass data/attributes into it.
- Routes to handle ... routing???
- Data layers
- Model layers
- ....

I cant really break down which is better and which isnt, they all have there pros and cons, and choosing one over the other doesnt make you the better developer or a bad one, smart or dump or junior or senio. These are just tools. They all essentially do the same thing, just in different flavors.

With that out of the way, lets begin on our plan.


##### Install Ember
`ember new **project_name** --quickstart`

Once this is done, follow the on screen promts to start the server
I'm not going to go into much detail here, because this isnt what the project is all about.

---

## PART 1
##### Install Ember CLI SASS

`ember install ember-cli-sass`

This will give us the ability to work in sass files instead of just plain css which will allow us to modularize our stylesheets.

This is also good because we dont have to write a very long single css files, instead break them down by block, component, themes, templates, etc.

For now as we start this process everything will currently tie into 2 css files that is loaded on each page a **LIGHT MODE**(default) and a **DARK MODE**.

`styles.css` this is the default light mode
`styles-dark.css` this is the dark mode 

The dark mode will utilize the build in browser dark mode setting. Either by having the OS/Broswer set to use dark-mode or not

We will require updating `ember-cli-build.js` to handle these changes as the default ember setup, the main css file follows the `*project name*.css` and we are changing those values.

```
let app = new EmberApp(defaults, {
    // Add options here
    outputPaths: {
      app: {
        css: {
          'app-dark': '/assets/styles-dark.css',
          'app': '/assets/styles.css'
        }
      }
    }
  });
```
We are taking the main stylesheets from the styles folder and outputting it in the assets folder used by `index.html` file.
We will also be updating `app/index.html` file so it reads the newly named and newly added stylesheets.

```
...
<link integrity="" rel="stylesheet" href="{{rootURL}}assets/styles.css">
<link integrity="" rel="stylesheet" href="{{rootURL}}assets/styles-dark.css">
...
```

See the `install.sass.json` blog post for more information


---
##### Lets start building our pages

We will start building out a couple pages so we have something to load and build upon.
I wish it was easy to just put a bunch of css together, but having some html will make it easier.

Each website requires a header and footer.
The beauty of ember is there componenets. See components link
So lets create 2 components: `ember generate component header` and `ember generate component footer`
and lets quickly set up the html and  load it in our `application.hbs`

**header.hbs**
```
<header>
This is a header
</header>
```

**footer.hbs**
```
<footer>
This is a footer
</footer>
```

**application.hbs**
```
<Header/>
<main>
{{outlet}}
</main>
<Footer/>
```

As you can see we are following the proper html syntax.

With that being said we need to start putting things together. Because right it appears to be hard to follow, but it will all come together
Lets create a `contact` page: `ember generate route contact`

lets load our `contact.hds` and update the code to something simple
```
<h1>Contact Page</h1>
```

**How will we visit our contact page?**
Lets update our header to give us quicklinks to this page, as well as give us access back to the homepage. In our `component` folder lets update `header.hbs`

```
<header>
    <nav>
        <menu>
            <li><LinkTo @route="index">Home</LinkTo></li>
            <li><LinkTo @route="contact">Contact</LinkTo></li>
        </menu>
    </nav>
</header>
```

the `header`, `nav`, and `menu` are html syntax designed for accessibility and are proper design, the way it should be done. Lets make this site use best practices and not just throw `div's` everywhere.
The `menu` syntax is actually a unordered-list - a la **ul** - but its designed to act as a "toolbar", in this case the toolbar is the site navigation.
Read more about the HTML STANDARD - [menu-element](https://html.spec.whatwg.org/#the-menu-element).


I digress, so lets get back to where we were. Now that you have the links in the header, you can click back and forth between the Contact and Home links to go between the pages.



## Part 1B
So I know how I want to break down this webdiste design wise. Its going to be super simple and clean with lots of white space.
the header will be super simple, no menu popups, not slider .. okay maybe im going to try something different but not yet. Will save that for later.

Lets just add a simple placeholder image and put my name beside it.






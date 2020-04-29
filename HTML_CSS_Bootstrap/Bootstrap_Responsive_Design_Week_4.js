/*

Bootstrap / Responsive Design - Week 4

Recap - where are we up to and where are we going?

Week 4
What is full stack? 
Over the course, we’ll be having experience of the front end - html, css, react 
And the backend, the Platform, the servers, the infrastructure, data, storage, 
This allows us to find out which bits we might connect with in terms of roles. 
HTML 5 and CSS 3 underpin EVERY web site - there might be frameworks that make it easier to do, but these are the key languages. 
In terms of programming, we’ve touched on Concepts / Frameworks:
* Variables, 
* Data Types, 
* Functions (Methods), 
* Objects, 
* Conditions,  (even CSS has some of these - called queries)
* Loops, 
* Collections (Arrays) 

On top of the Concepts / fundaments, you have the language - so currently JS for us. 
On top of the language, there are frameworks, that does the job a bit better, but still using the language.  (i.e. Geordie language enhances English!) 
Then the frontend implementation of JS is React, for example, this is implementation of the frameworks. 
And NodeJS is the backend implementation of JS. 

This week is Bootstrap - it is a framework that layers on top of CSS - and makes some jobs easier. Still uses the language of CSS. 

RESPONSIVE DESIGN

Bootstrap makes responsive design easier. Means website will respond to the size or orientation of screen it is on. Without you having to run any code, it will display differently. Designers need to think what they want site to look like on a phone, iPad, computer. 

WHAT DO WE MEAN BY RESPONSIVE DESING? 
* How people consume internet pages completely changed overnight with the creation of the iPhone 
* The variety of devices that can now ‘browse the web’ includes tablets, phones, microwaves, fridges, televisions etc. 
* It meant the web pages had to be re-thought for a variety of screen sizes and consumers

WHAT DO WE MEAN BY ‘RESPONSIVE DESIGN’?

Responsive design is allowing your website to be ‘responsive’ to the screen it is currently displayed on. 

Best observed with an example: 
BBC in 2003 - HISTORY OF WEB PAGES - WayBack Machine
BBC in 2018 

Much of ‘being responsive’ is actually achieved with CSS

Can’t be super creative at BBC as it HAS to be accessible - same with all government / public websites. 

INRODUCTING THE CSS MEDIA QUERY

A media query is a piece of CSS that ONLY gets applied if a condition is met. 

You can put this in CSS style sheet. Or in style tags within the head of the HTML. 
*/

body {
	background-color: red;
}

@media only screen and (max-width: 600px) {
	body {
		background-colour: lightblue;
	}

.header {
	display: none;
	}
}

/*
This is a simple if else statement - it means ‘if it’s on a screen’ (i.e. not if it’s being printed out) then if the page is more than 600px, background colour should be red, otherwise I want the whole page to have a background colour of light blue. 

If you are printing it out, you might want to remove colours or pictures, to save ink. Often a background image won’t print as it will make it unreadable in print. 

Or you might have a snazzy header you’ve designed for a large screen, but it looks bad on a mobile, so you’d hide the header if screen goes below 600px. 

PUBLISHING YOUR SITE

Github has a way to publish our site. Then you can test it on a mobile. 

Go to github.com and log in
Go to the repository you want to publish
Click the Settings tab
Scroll down to GitHub Pages. 
Source - change it to Master Branch. And this will publish your site. 

It will only publish what you have Pushed to the Origin Master. 
If you Push an update after you publish, it will update. 

INTRODUCING BOOTSTRAP

Go to: getbootstrap.com
Go into Documentation on the taps at the top. 
On that page, under CSS, copy-paste the stylesheet <link> into the <head> of your HTML. 
Paste it in after the title, but before all other stylesheets i.e. my style.css, so my styles will overwrite theirs. 

html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


You don’t have the code on your computer, it just links to their code, so they could  in theory change it. But above is version 4.4.1, they won’t change that, they would name the next update 4.4.2

You can copy all the code onto a stylesheet on your computer, so you can use it offline. But don’t do that usually, as if your computer has downloaded it on a website before, it will use the same file for any other site that uses it. So it’s quicker to load the site. And the CDN as above means it will download from a server geographically near to you. If a CDN is not available (the server is down) they’ve got to use the next nearest one, which will be slower. 

THE GRID SYSTEM

Grid System - Containers, Rows and Cols
Bootstrap includes a responsive, mobile first fluid grid system that lets you split the screen up into 12 columns and lets you customise the size of your HTML elements as a fraction of 12. 
It uses a series of containers, rows and columns to do your layout
Generally you only want one container on your website. 
And then a row, which is split into 12 columns. 
And you can put rows into your columns - you can keep nesting. 

POSSIBLE LAYOUTS
So you might have 6 + 3 + 3 on a desktop (one images takes half the screen and the other two have quarter each)
On a mobile, you might have 12 + 6 + 6  (the large images takes the full screen and below it the two smaller ones sit side by side)
Bootstrap starts mobile first. 
Grid is relative to screen size, rather than absolute. 
The space between the columns is called the Gutter. You can have it or not. 
X+Y - rows first, columns second

GRID SYSTEM - CONTAINERS

Bootstrap makes it easy to centre content on your page and profile sensible page margins. 

GRID SYSTEM - COLUMNS
Bootstrap works on a grid layout. with 12 columns that make up the page. 
If you do not want to use all 12 columns individually, you can group the columns together to create wider columns. 
.col—xs-4 (xs is for small screens, i.e. mobiles) means for small screen upwards, I want 4 columns. 
.col-md-12 (md is for medium screens) for medium screens upwards, I want 12 columns

TO GET A HEADER TO APPEAR ON DESKTOP BUT DISAPPEAR ON A MOBILE

*/

<!— Header —>
<div class=“row d-none d-md-block”>
	<div class=“col-12 header”>
		<h1>My Todo List</h1>
	</div>
</div>

/*

GRID SYSTEM - ROWS

Use DIVs not SPANs because you do want your content to fill the entire column. 

Draw it before you code it. 
Give your grid background colours so you can see them. You can delete these afterwards. 

A mobile responsive website
Native apps can tap into functionality of the phone, can use camera, bluetooth, microphone, video recorder. With a mobile responsive website you can’t. You download Apps from the App Store so you get that feeling of downloading an App. 

Within header you might have bootstrap that has 'd-none d-md-block', which means on mobile, don't show it, but medium and upwards, do show it. That's how to get header to hide on mobiles. 

Instagram, Facebook, all use javascript and reactNative to make it a native app. 

James’ tip is Flutter  to take over React - you write the language  once, it’ll run on android, websites, native, etc. 
Written by Google. 
Written in a language called Dart, mix of Java and JavaScript. 

For homework, convert what currently got in tables, and put it into bootstrap grid. 

James’s code along exploring Bootstrap and Media Queries
[week_004_responsive_design_webinar.mp4 - Google Drive](https://drive.google.com/file/d/1Lo_VKBTpSoftLo8fxrZEXGbCKcRJKfFW/view?usp=sharing)

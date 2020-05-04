/*
What is CSS - week 3

Cascading style sheets
created by WWWC (W3C)
HTML - defines content
CSS styles it. 

Dribble - for design

CSS Zen garden - the HTML is exactly the same with all these pages, but the CSS changes and it transforms the way it looks. 

Always pair it up - CSS pairs with HTML documents. 

Use US English for CSS - color, center

WAYS OF ADDING CSS

1 You can put CSS inline in the HTML - these will take precedence over anything in the style sheet. So if you put an inline style, within a page’s html - that will override the CSS style.css
So if you are happy with all the h1 headings being a particular font and size, but you want one heading only to be different, you might put that styling inline, and keep all the other headings using style.css
Within the body of the HTML, you can write this:
<h1 style=“font-size; 50px; font-family Arial;”>My Heading</h1>
But iff you have many pages on your website, and  you want to change the font, you may have to do this hundreds of times. 

2 PUT THE CSS IN STYLE TAGS IN THE HEAD
*/
<style></style> section in the <head>

<style>
h1 {
	font-family: Arial
}
</style>

/*
3 Link to a separate CSS file in the <head> known at External CSS
With an external stylesheet file, you can change the look of an entire website by changing just one file. 
Open a new folder called style.css
Put your styles i that sheet
And then link your HTML - in the head of the HTML page, you write <link href=“style.css” rel=“stylesheet” type=“test/css” />
 
PRIORITY
Your computer will prioritise the lowest style sheet. So in the head of your HTML, if you have the href for style1.css
And then underneath you have  href for style2.css, your computer will read the first one (and make the font red) and then read the next one (and make the font green). 
useful for bootstrap, as we can use the generic stylesheet and then have our one underneath. 
It only overwrites the things that are different between the two. 

LINKING CSS AND HTML

Reducing repetition in your code. Brands will have their own default CSS so you stick to branding guidelines.  i.e. every h1 will have a style already decided. 

Reduce the amount of info that has to be saved onto your computer. The CSS can be cached on  your computer. 

CSS Styntax

A CSS rule set consists of a selector and a declaration block: 
*/
h1 { color:blue; font-size:12px }
/*
Selector is h1
Declaration is within the curly braces
color and font-size  is the property
Blue and 12px  is the value

ID and Class Selectors
*/
h2 id=“products_title”
/* 
If it appears more than once on the page, use a Class i.e. receipt list style
If it only appears once on the page, you can use an ID - i.e. the main page title. 
Sometimes people only use Class, in case there might be an extra use further down the line. 

In CSS, you use hashtag to reference the ID i.e. myHeading
You use 
*/
#myHeading {
color: red;
}

In CSS, you use . to reference CLASS i.e. taskItem
.taskItem {
color: blue;
}

If you just want every li to be orange, just do this: 
li {
color: orange;
}

/*
<div> and <span>

These are all DIVs - Header, Nav, Section, Footer - all these tags are new in HTML5 - aids screen readers for accessibility 
Also useful for humans reading it through - Footer is your Footer. Nav is your navigation bar. 
DIV stands for divider - means a block of content
Body is the entire site. Main is a section of that, so is Header. 

NB Background colour or borders are really useful for seeing where the DIVs are. 
<div style=“background-color: red”>
DIV is a block level element so will fill the whole width of the screen left to right
</div>

<span style=“background-color: red”>
Span is not a block level element so will fill only the amount of space they need i.e. as wide as the text they contain</span>

CENTRING
Don’t use center tags
A coloured background DIV fills the screen, but the text isn’t centred. 

Margins give you space around the DIV. 
You can give your 
<div style=“background-colour: orange; text-align: center; width: 100px; margin: 10px auto 10px auto;”
Order in Top Right Bottom Left so the autos are doing the centering 

In CSS this would be 
*/
#cellStyle {
background-colour: orange; 
text-align: center; 
width: 100px; 
margin: 10px auto 10px auto;
}

// PADDING 
// Cell padding - pads a thing out - gives space within the DIV block 
#cellStyle {
padding: 10px auto 10px auto;
}

// FLOATS
// Whatever you want on the right, comes first in your HTML and then you float it right in the CSS
#cellStyle {
float: right;
}

// TO GROUP SELECTOR IN CSS
// if you want to apply the same style to more than one style
h1, p {
  color: red;
}
/*
SELECTOR PRECEDENCE:
h1   then    ID   then    Class

canva.com - free designs for mocking up websites
Marvelapp.com
Overflow.io

FLEXBOX
Is another way of making responsive grids

BOOTSTRAP
Is an implementation of Flexbox and makes responsive grids really easy to use. All websites are blocks of codes. 

You can name your classes and your IDs with British English so you can use colour instead of color

# Homework
*  Do a bit of CSS
*  We’ll all have our own levels of perfection and interest. 
*  Fine to google stuff and look at what selectors it uses and how it targets your html. 
*  Don’t go crazy as we’re going to use Bootstrap next week 
*  Don’t worry if don’t look like the final thing, just get used to CSS and have a play with it. 
*  Try some different selectors like ID, Class, p tags, h tags
*  Background colour
* Border
* etc. etc. 
* Push it as far as you want to push it. 
* Take things out of the table now. 
* Convert it to DIVS
* Don’t make that a priority though. 
* To make it relative you can use percentages, but only on widths, but you can’t really do it on heights. You have to give a pixel size on heights. 

LINKS

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
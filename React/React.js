/*
React

James has provided three Webinars and I have taken screenshots from each of them with the code etc. So look at those within BBC folder - week-005-react/James webinars and screenshots

JavaScript bringing together with html and css. 

JS is the core language. A framework has to still be written in JS, but it takes the things you might want to do, and it makes it easier for the human. So React makes constructing a User Interface easier. You might write 4 lines of code and there are 50k lines of code under the hood. Someone has done that for you. 

React is a front end framework that layers on javascript. jQuery was a super popular JS framework. Anything that isn’t static is usually done with JS. Used to be Flash. Apple killed Flash and ActionScript, by the iPhone not supporting Flash, because it used a lot of power, so phone battery went down really quickly, so Apple just decided they wouldn’t support Flash. 

Lots of the web - 90%? - still use jQuery, but it makes websites hard to maintain. If you change a bit of code in one place, you can’t see the impact in another part of the site. 

Angular JS  took everything that jQuery was good at: being able to move things, interactive, not being bothered by which browser you’re using and made them better. But Angular was quite slow. If you had a table with 50k rows, and change data in one row, Angular would have to refresh the whole page. And it got quite slow. Angular is quite good now, on version 12 or something, but developers still judge it on the slow first software release. 

FaceBook came into it and took everything that jQuery and Angular were good at, and combined it into React. FaceBook wanted a single language that does all their apps. FaceBook does not own all your React code. It’s released under the MIT licence.  (it used to be released under FaceBook’s own licence and there was a bit in T&C that said they can have your code if they want it. Then WordPress said they wouldn’t use it anymore, so FaceBook gave licence to MIT, so it would be more public, but it’s still hosted under FaceBook’s repositories. Whereas Twitter do not own/host Bootstrap now - it’s been given wholly to the community. 

ReactNative - works on a mobile - runs like a natural app. 

[The State of JavaScript 2019](https://stateofjs.com)
State of JS website - shows the popularity of different JS frameworks. React is still the most popular. But Vue is popular too. 

If you have a pretty good grip of React, you will be able to do Vue and Angular too. 

React makes it painless to create interactive User Interfaces. Go back to our lists of the things that are dynamic, the things that change and that the user can change. 

When we say ‘render’ we mean what we want to get onto the screen of the user. When a state changes in your code i.e. for our ToDos, if there’s a new task, then the list of tasks and the total number of tasks has changes, and so React has split each part of user interface into components. And then when you make a change, React just refreshes/renders those particular items, so it is fast. It doesn’t refresh the whole page. 

For our Todo App, the state might be two tasks, and then total number of tasks. When I click delete on one task, the app has to move to a different state, now there’s only one task and the other has gone. So React doesn’t reload the whole page, it just renders the change on the screen. 

Isolated Single Purpose Components
In React, we only need to code components once and then we can reuse them on the page. 

INSTALL/CREATE A NEW REACT APP

Google ‘Create React App’ and you can see FaceBook’s GitHub account, which has documentation on it for installing and using React. 
www.github.com/facebok/create-react-app

To start a new React App, open terminal and go into your correct folder and then type this: 
npx create-react-app todo-app-frontend
and then hit return
(the “todo-app-frontend” bit is our choice and is the name we might give our app folder)

This will pull down all the stuff needed from GitHub. You’ll have a folder called todo-app-frontend (or whatever you chose to name it) and you can go into that folder using the cd command within terminal. 

When the install has finished, it will suggest that you begin by typing ‘npm start’ and then it will say ‘Happy hacking!’

package.json - manages our dependencies. You need to do 
npm install (when you are in the correct folder in Terminal)
This pulls down all the bits of code from the internet that we might need and sticks them in our computer. We don’t need to install this again unless we change package.json. 

Then need to do 
npm start 
(Node Package Manager NPM)
Your laptop has started up a web server on my computer. And a React tab will open in Chrome. 
And terminal will no longer work as it has been taken over by the server. 
To get out of it, ctrl + C  in terminal will stop it. When you then refresh your page in Chrome, you won’t get anything. 
When you want to start server again, put in npm start again. 

EXPLORING WHAT YOU GET 

Open in Visual Studio Code
code . 
Then open Public and index.html.  Generally won’t want to change much in here, as React deals with this, but may want to add in bootstrap and your own css style sheet. 

Open index.html and go to [Introduction · Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) and copy the bootstrap CSS link again and paste into the head of your index.html 
Then maybe change your title, and you’re ready to go. 

The src folder is where you will make most of your changes. 
package.json has things of interest  - the scripts for starting and build for a production build. 
These are similar to the package.json we were using for our JS testing. 
Dependencies are telling Node what things our code (that we are about to write) relies on. So essentially all the code that we are relying on that we don’t need to write ourselves. i.e. React’s code. npm install will bring in all those dependencies we need our code to lie on top of. 

Open app.js within src folder

STARTING / STOPPING THE LOCAL SERVER 

Then go to Command Line and make sure you are within your ‘todo-app-frontend’ directory
Then type ‘npm start’ and hit return. 
This fires up the start scripts and runs a local server on your laptop. Chrome will load this page - localhost:3000 (localhost is your computer and the port is 3000, which is the port React has chosen to use)

Stop Server with ctrl+c

CREATING COMPONENTS

Take a look at [Components and Props – React](https://reactjs.org/docs/components-and-props.html)
- Components let you split the UI into independent, reusable pieces and think about each piece in isolation. 

Can make changes in VSC i.e. in app.js and it does “hot reload” so you don’t need to keep refreshing your App, as you save your changes, it updates automatically. 
*/

// Replace this: 

html
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


// with


class App extends React.Component {
  render() {
    return  (
    <p>Hello there!!!</p>
    );
  }
}

/*
You can only return one containing element. So it has to be within a div. 

cmd+k and cmd+c to comment out
cmd+k and cmd+u to uncomment 

Then you can right click on src folder in VSC and select new file and name it Header.js (title case)
And then copy contents over from App.js and change class to Header and delete next two things. 
You’ll always have a render component 
You’ll always have an export default [filename];
In public folder, create styles.css and paste all your styles in there. And then link it within your html. 

In our context, App is the parent and AddTask and Header are the children. 

You can make a new file called DeveloperListing.js within the src directory. And in there you can paste in this function. 
*/
java
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

/*
And then you add DeveloperListing to App.js and it can appear in your local server.

Component is a class
Render is a function - the render function is called every time the component is called. Render asks ‘what do you want displayed on the screen when the component is called?’
In James’ example:
DeveloperListing and Interests are components
developerName is a prop
Interests is an array


STYLING REACT COMPONENTS
Google ‘react component styling’ to see opinions on the best way. 
See reactjs.org/docs/faq-styling
There’s various different approaches that people take. 
There is already a file called App.css in the src directory. 
You can open that up and have a look. 
If I wanted DeveloperListing to be styled, I could create a new file DeveloperListing.css. Then I could put some styles into that. Such as giving colours and sizes to a class called .DeveloperName.
And then in the same way, I import DeveloperListing.css into DeveloperListing.js and use `className=“DeveloperName”` to get some styling onto my text. 
If it’s a .js file you don’t need to specify the file extension, but if it isn’t, if it is .css you need to write the extension. 

GITHUB VERSION CONTROL

Using the CreateReactApp also makes/initialises a local GitHub repository on our computer, which we can commit changes to. (But we do need to push it up to our online GitHub account to have a backup. )

We can go into Terminal and put in git status and then we’ll see our repository and the changes we’ve made to it so far.

So commit your code locally first. So use git add . and then git commit -m”Initial skeleton of components” 
And then git status will show that commit
And we can also use git log to see detail of Initial commit and second commit etc. 

We can see our remote repository by typing git remote -v 
(v stands for verbose)
And when you hit return you can see there is nothing there. 

Open your GitHub account on the GitHub website
Click + on top right hand side to Create a new repository
Put in a new Repository name
Keep it Public
Make sure Initialize this repository with a README is not selected and also that None is selected for both Add .gitignore and for Add a license. This is because CreateReactApp has already made a README and a gitignore for us. 
Then it’ll create the new repository. 
Check HTTPS is selected for our use, not SSH (James uses SSH)

Copy this line: git remote add origin https://github.com/rlfweb/gradient.git
Then paste into Terminal and hit return.
If we do git remote -v again, we can see that we have got our remote repository working. 

Then do git push origin master and then our stuff will be up on master branch i.e. Github online
(may have to put in username and password - won’t see password on screen, it won’t give us asterisks or anything like that - just have to put it in and hit return.)
Can go back onto our GitHub.com account and refresh the repository will be able to see our repository with its contents. 

Instead of forking a repo from James, we’ve made a repository and pushed our code up to it. 

HOMEWORK

Take html file and split it into components. Print page off and draw boxes around the various components and make them. 
Got to learn some React 
Get your header looking just how it looked in html. 

---------

So there isn’t an official/categoric way of doing components splitting but I always think good way of answering that is thinking of two concerns:

* Am I going to re-use this anywhere? If yes then it might make a good candidate to be a single component
* Does it have a single responsibility? If yes then it might make a good candidate to be a single component

 [20:57](https://techreturners.slack.com/archives/GP4AYMRDG/p1578344242008700) 
Step 1 of this guide provides some ideas on component design (edited) 

 [20:57](https://techreturners.slack.com/archives/GP4AYMRDG/p1578344243008900) 
 [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)  (edited) 

--------

Here is a webinar on the HTML to React components as promised
https://storage.googleapis.com/bbc-step-into-tech/2019-11/static_to_components.mp4
Also this is the corresponding repository for you to look through:
https://github.com/techreturners/bbc-cohort2-todo-app-frontend
I would advise watching through the video once before diving into looking over the code
techreturners/bbc-cohort2-todo-app-frontend



Array for the completed task and an array for tasks still to do - two arrays in two states
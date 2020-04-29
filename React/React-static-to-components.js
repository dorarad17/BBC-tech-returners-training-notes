/* 

NOTES FROM JAMES'S WEBINAR
https://storage.googleapis.com/bbc-step-into-tech/2019-11/static_to_components.mp4

Print out your static_design.html in which you've put your html, css, bootstrap. Circle the parts that you are going to make into individual components i.e. 

App - parent 
  Header
  Add Task 
  Task Count 
  Task List 
    Task - to be displayed many times 

In your new React App, create a components folder within your src folder. 

New file, name it Header.js for example

Then set it up as per App.js
i.e. import React from 'react';

Paste the bootstrap link into index.html

change class to className 

Then paste your bootstrap and css from your static_example.html into your various components, into the return brackets of your page

If brackets don't have a closing bracket, make sure they have a self-closing bracket

Just have one container, in your App.js

You can keep copying and pasting your static layout into each component. 

And import your new components into the App.js at the top 

And within App.js you can also add in the component name in the return()
i.e. 

return(
  <div ClassName ="container"
    <Header />
  <div/>
)

You can reuse components many times i.e.
return (
  <div>
    <Task />
    <Task />
    <Task />
  </div>
)
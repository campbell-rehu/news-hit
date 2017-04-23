# News Application built with React

[TOC]

## Introduction

This application retrieves the top and latest headlines from a number of sources. The news content is retrieved from [NewsAPI.org](https://newsapi.org/) which is a fantastic resource.

## Thoughts

### Connecting to a Service

I attempted to abstract the news item retreival (via an ajax call) to a separate file but there was some kind of sync issue and the React component wasn't receiving the news items. So I just used it within the component itself. I'm not entirely sure what the best practice is for services in React. Having used Angular 2, I partly expected React to allow for native dependency injection out of the box and I was disappointed to not find it there. Further investigation is required.

### Updating Component State + AJAX Calls

When the user selects a source in the sidebar, it is propogated up to the app component which stores it in state and uses it in the news api url. However, I discovered that the state isn't updated immediately when the `setState()` function is called. I considered creating a second function to call and using the `componentWillMount()` function but learned that the `setState()` function call takes the updated state and a callback function to be called once the state is confirmed to be updated. Within the callback, I was able to make the AJAX call.

## News Sources

- Al Jazeera
- BBC Sport
- Entertainment Weekly
- Tech Crunch
- The Huffington Post
- The Next Web
- The Verge
- Time


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

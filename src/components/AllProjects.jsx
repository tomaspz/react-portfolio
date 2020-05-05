import React, { Component } from 'react';

import Project from './Project';

class AllProjects extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">

        <Project 
          deployment="https://collectbay.herokuapp.com/"
          imageSource="./assets/img/collectbay.jpg"
          altDesc="screenshot of collectbay heroku website"
          appTitle="CollectBay"
          appDescription="Find and save your collections. Network with other collectors."
          githubUrl="https://github.com/tomaspz/Collect_Bay"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://log-and-eat-burgers.herokuapp.com/"
          imageSource="./assets/img/burger-screenshot.jpg"
          altDesc="screenshot of log and eat burgers app"
          appTitle="Log & Eat Burgers"
          appDescription="Virtually create your own burgers and eat them. Made with Node, Express, Handlebars and MySQL"
          githubUrl="https://github.com/tomaspz/log-and-eat-burgers"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://express-note-taker-tomaspz.herokuapp.com/notes"
          imageSource="./assets/img/express-note-taker.jpg"
          altDesc="screenshot of express note taker app"
          appTitle="Express Note Taker"
          appDescription="Web app created with Node and Express and using JSON to store the data."
          githubUrl="https://github.com/tomaspz/express-note-taker"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://github.com/tomaspz/employee-tracker-cms"
          imageSource="./assets/img/employee-tracker-cms.jpg"
          altDesc="screenshot of employee tracker cms app"
          appTitle="Employee Tracker CMS"
          appDescription="A CLI CMS app to manage employees. Made with Node, Inquirer and MySQL."
          githubUrl="https://github.com/tomaspz/employee-tracker-cms"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://tomaspz.github.io/cli-developer-team-generator/output/team.html"
          imageSource="./assets/img/cli-team-generator.jpg"
          altDesc="screenshot of cli team member generator app"
          appTitle="CLI Team Generator"
          appDescription="Asks CLI questions to the user to collect information about team members. Made with Node and Inquirer"
          githubUrl="https://github.com/tomaspz/cli-developer-team-generator"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://tomaspz.github.io/concerthunt/"
          imageSource="./assets/img/concerthunt.jpg"
          altDesc="screenshot of concert hunt app"
          appTitle="ConcertHunt"
          appDescription="A web app to find your favorite live music near you"
          githubUrl="https://github.com/tomaspz/concerthunt"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://tomaspz.github.io/weather-dashboard/"
          imageSource="./assets/img/weather-dashboard.jpg"
          altDesc="screenshot of weather dashboard app"
          appTitle="Weather Dashboard"
          appDescription="Search the weather for a specific city worldwide"
          githubUrl="https://github.com/tomaspz/weather-dashboard"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://tomaspz.github.io/generate-password/"
          imageSource="./assets/img/password-generator.jpg"
          altDesc="screenshot of password generator app"
          appTitle="Password Generator"
          appDescription="Web app to generate a random password"
          githubUrl="https://github.com/tomaspz/generate-password"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://tomaspz.github.io/day-planner/"
          imageSource="./assets/img/day-planner.jpg"
          altDesc="screenshot of day planner app"
          appTitle="Day Planner"
          appDescription="Set your daily tasks during wokring hours"
          githubUrl="https://github.com/tomaspz/day-planner"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://tomaspz.github.io/code-refactor/"
          imageSource="./assets/img/code-refactor.jpg"
          altDesc="screenshot of code refactor website"
          appTitle="Code Refactor"
          appDescription="Clean and polish the code of a website."
          githubUrl="https://github.com/tomaspz/code-refactor"
          githubDesc="GitHub Repo"
        />

        <Project 
          deployment="https://weblocomotion.com/"
          imageSource="./assets/img/weblocomotion.jpg"
          altDesc="screenshot of weblocomotion website"
          appTitle="Web Locomotion"
          appDescription="Web design, marketing and analysis."
        />

        <Project 
          deployment="https://informalgifts.com"
          imageSource="./assets/img/informalgifts.jpg"
          altDesc="screenshot of informal gifts website"
          appTitle="Informal Gifts"
          appDescription="An online shop where you can find great prices."
        />

        <Project 
          deployment="https://puppy-usa.com"
          imageSource="./assets/img/puppy-usa.jpg"
          altDesc="screenshot of puppy-usa website"
          appTitle="Puppy USA"
          appDescription="A portable touch-sensible projector powered by Android."
        />

      </div>   
    );
  }
}

export default AllProjects;

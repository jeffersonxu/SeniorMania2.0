# SeniorMania2.0
My high school senior year I built a [web application](https://github.com/jeffersonxu/SeniorMania) that would track a senior tradition where teams would complete a multitude of "bucket list" with tasks ranging from team selfies in a porta potty to other various quirky challenges. However, looking back at the code I wrote, it is quite gross. I essentially used one html file and one javascript file both > 300 lines long 🤮. I rebuilt this web application again using [React.js](https://reactjs.org/) 🔥 for performance and to play around with component design. I surprisingly discovered that the number of lines of code written was around 25% fewer than my original. 

## Dependencies
This application was built using the ```npx create-react-app``` command. The only other packages installed are [firebase](https://www.npmjs.com/package/firebase) and [react-router-rom](https://www.npmjs.com/package/react-router-dom). 

## Running Locally
After cloning the repo, run the following commands and then go to http://localhost:3000/
```
npm install
npm start
```
## Remarks
This application was deployed on Heroku using this [buildpack](https://github.com/mars/create-react-app-buildpack). Additionally, shout out to this [repo](https://github.com/satansdeer/react-firebase-auth) for explaining how to combine React with Firebase authentication.

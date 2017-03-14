# Install
* unzip file or `git clone https://github.com/a15n/door-chat.git`
* `npm install && npm run start` (or `yarn && yarn start`)
* In a new terminal window run `npm run server` (or `yarn run server`)
* go to `http://localhost:3000/`
 
# Learnings
* This was the first app I've built using React. I haven't studied Redux yet but I think that a Redux approach to managing state would have been better than my way of storing it in the ChatPage component.
* I used a "pods" structure to organize my code. Each component has a JS file, a CSS file, and a test file. This made it easy to know where all the code was located. I didn't have one `component/` folder with ~10 components in it.
* React needs a CLI tool. Using Ember CLI I could run `ember generate component foo-bar` and it would spin up the appropriate JS, HTML, test, etc files. Adding them manually is laborious.

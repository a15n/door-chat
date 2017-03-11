ChatPage
  SideBar
    - user
    - list of rooms
    * http://localhost:8080/api/rooms
  main
    MainHeader
      - room name
      - people in room
      * http://localhost:8080/api/rooms/0
    MainBody
      - messages in room {author, timestamp, messag}
      * http://localhost:8080/api/rooms/1/messages
    MainFooter


state = {
  rooms: [],
  roomDetails: {},
  roomMessages: [],
}

COLORS

SideBar
- background #FF1940
- Room Names #FFFFFF
- Active Room background #800D20


MainHeader
- Room Name #696969
- my name #FF1940
- their names #696969


MainBody 
- background #EFF1F2
- names #6A6A6A
- my message background #FF1940
- their message text #333333
- their message background #FFFFFF

MainFooter
- "Send" #4A90E2


# basics
everything in "Detailed design specs"
* set username
* chat
I should write lot's of tests
how do I guarantee standalone CSS code? css modules? check out bulletproof CSS vidoe
how can I get around having to `.bind(this)` to everything


# stretch goals
iOS chat inspired blue background fade
nice 404 page




------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

DoorDash Frontend Interview Project
TLDR: Build a chat app with real APIs
Time: 3hr - 6hrs
Allowed tools & frameworks: anything
Show us what you got!
Howdy! 👋
This is the frontend interview project for DoorDash! We’re going to ask you to build something with whatever tools you want, whatever language you want, or whatever.

If you want to keep it vanilla, that’s fine—this should take you two hours with jQuery, plain ol’ HTML and CSS. If you want to go all out and use other tools, that’s fine too—just make sure you have enough documentation for us to be able to build and run the app.

The goal here is not to demonstrate your pure coding ability—we’re here to give you a problem that’s not totally spec’d out for you, and we want to see far you can go. How good can you make it without much guidance? What are the sort of improvements and choices you’ll make as you build this thing, and where do your priorities lie?

Remember, building stuff is supposed to be fun, so be creative! Happy coding!

Getting started
There’s a few things you need to get started on to get this to work.

1. Installing minimum deps
Make sure you have node installed, with a version greater than 7.0.0. I highly recommend nvm, or just installing the latest version of node with brew install node on macOS.

Once you have a good node installed, run npm install in this repo to get your dependencies.

2. Serving your app
By default, you can run npm start to run your app, serving the files from /public. You can, however, change this to whatever you want! Just make sure you document the changes somewhere so we can run this.

3. Running the api server
We have provided a simple api server for you. You can run npm run api-server to start it. Read the spec for more details on the api.

4. Read the spec
There’s a pretty fleshed out spec in the ./spec directory. Checkout the design specs here to understand what you’re building!

How we’ll test this
We’re going to review your code to see how you work and how you make tradeoffs—no automated tests for this one. We’ll schedule a call with you after you submit this to walk through the code to understand your thought process. If you come on-site, we’ll take your code here, and we’ll build on it to tests other things—how you write tests, how you build out new features and refactor old code, etc.

We’ll be evaluating for:
maintainability
testability
readability
solid UX without strict guidance
Extra notes
A couple of things to say:

Feel free to change the language you’re writing this in. We want to see what good code looks like for you add a gulpfile, setup webpack, or just use the plain JS, CSS, and HTML you’re given. It’s all up to you!

Feel free to use any libraries or frameworks you want, with the idea that they’re increasing your productivity, not writing the app for you.

Feel free to change any of the scaffolding we provided for you.






------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





# Detailed design specs
The goal of the app is to take in a username to allow someone to "login", and then see a set of chat rooms with available messages. When you click into a room, you can view past messages, as well as add new messages.

## Set Username
The first screen you should see is the "login" screen. A user can type a username they'll use, and if they provide some string and hit "Join the DoorDash Chat!" button, we'll save their username for when they add new messages.

![Set Username](./set-username.png)

## Chat
When you've submitted a username, we'll load up the chat interface.

On the left, we have:
* user info
  * username
  * time that user has been online
* list of rooms available

On the right, we have the selected chat room. There, we show:

* room information
  * room name,
  * list of usernames of users in the room
* messages
  * message text
  * username of the user that posted it
  * newest messages on the bottom, older on the top
  * scroll the view to see older messages

![Chat](./chat.png)

## Specifics

* The left panel should be a fixed width, and the right panel should stretch to accommodate
* Should scroll the chat window to the bottom when new messages are added




------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






# Backend APIs provided for you:

## RoomsDetail API
- http://localhost:8080/api/rooms/0
  - `GET /rooms/<id>`
    - Response shape:
    ```
    {
      id: Integer,
      name: String,
      users: String[],
    }
    ```

## RoomsList API
- http://localhost:8080/api/rooms
  - `GET /rooms`
    - Response shape:
    ```
    [
      {
        id: Integer,
        name: String,
      }
    ]
    ```

## Messages API
 - http://localhost:8080/api/rooms/0/messages
  - `GET /rooms/<id>/messages`
    - Response shape:
    ```
    [
      {
        name: String,
        message: String,
      }
    ]
    ```
    - messages are ordered by time
  - `POST /rooms/<id>/messages`
    - Expected payload shape:
    ```
    {
      name: String,
      message: String,
    }
    ```





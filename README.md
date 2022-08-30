
# Record Your Zen - Frontend

Inspired by a tracker we built in school and the Daylio app, I wanted to track my ever changing moods in a very simplified manner.

In its essence, this is a web application using  MongoDB,  Express, React and Node.js to do CRUD operations to keep track of user's moods.  The app is comprised of a react frontend application and an express back-end REST api. This api will be used in conjunction with the React app which provides a user-interface for the web app.


Details|Languages|Framework|
|--|--|--|
|Frontend  |JavaScript |HTML, CSS, React |
|Backend  | JavaScript| ExpressJs, NodeJS, MongoDB |

**This readme will describe the frontend.** The backend is located in  [ZenTracker-Backend](https://github.com/Yas7777/ZenTracker-Backend).

If you don't care to install it - this is how the overall app looks:

## Installation and Tools

TLDR: If these instructions aren't followed, this web app is just not going to work  🤷‍♀️

1. Install an IDE of your choice.

> I prefer Webstorm: https://www.jetbrains.com/pycharm/download/

2. Clone this repository.

3. Open the IDE terminal (preferred to avoid issues)

4. Use command `npm install`

5. Once its installed, use command `npm start`

6. Create a `.env` file and type the following:

-  `<PORT=8000>`. This is the port number on which the React app server will  run.

The react application will run on `localhost:8000`.

##  Description

The frontend user-interface (UI) uses React and consists of 3 pages, a Navigation Bar and Dark Mode  :alien:. More details below!

Details|Description|Links|
|--|--|--|
|Home Page |Displays user moods currently stored in the MongoDB moods collection.| Summary Table with delete and edit icons that deletes or edits the entry accordingly|
|Add Page |Form consists of mood options, a place to type notes and the date. The user is automatically taken back to the Home Page once the form is completed. |‘Add’ button adds an entry to the database (calls the REST API endpoint to create a entry). |
|Edit Page | The form is automatically filled-in when the page is loaded with controls to edit the data.| ‘Save’ button updates the entry in the database (calls the REST API endpoint to update a entry).

##  🔥My Hot Takes🔥

* I like my dark mode.

* For a Zen tracker, it doesn't look particularly zen.  I struggled with CSS (probably evidenced by the GIF). I intend to improve it significantly in the coming months using bootstrap or other templating tools.

##  Future Improvements

* [ ] Deploy this app.
* [ ] Given the sensitive nature of the app, I would like to add a secure login and authentication page.
* [ ] Improve UI significantly.
* [ ] Conduct trend analysis on the data received and display interesting visualizations next to the tracker.  

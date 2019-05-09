# todo-app

### Author: Alistair Blake
#### Links and Resources
* [Repo] (https://github.com/Alwynblake/todo-app)

#### Feature Tasks 
Created the following components and structure them according to the following diagram.  
``` 
App
  Landing
  Dashboard
    NoteCreateForm
    NoteList
      Noteitem (Optional)
```
###### App Component
* The App component manages the frontend routes and has a navbar
* the `/` route displays the `Landing` component
* the `/dashboard` route displays the `Dashboard` component

###### Landing Component
* The Landing component displays a brief description of the notes app

###### Dashboard Component 
* The Dashboard component manages the entire **application state**
* The state contains a notes array
* It has a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added has the following data
    * `id`: always should contain the result of `uuid.v1()`
    * `content`: user provided content
    * `title`: user provided title
### Available Scripts
In order to view frontend_tooling within the browser,
in the terminal type: 
##### `npm install`
##### `npm start`

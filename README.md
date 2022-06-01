# library
This is a redo of the book-collection project -- gonna try and follow the instructions more closely.

1. Set up the skeleton HTML/CSS and JS files.
2. All book objects will be stored in a simple array, so add a function that can take user's input and store the new objects into an array. 

3. Write a function that loops through the array and displays each book on the page. 

4. Add a "NEW BOOK" button that brings up a form allowing users to input the details for the new book: author,title,number of pages, whether its been read and anything else you might want.

5. Add a button on each book's display to remove the book from the library. 
    - You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds with the index of the library array.

Add a button on each book's display to change its read status.
    - To facilitate this, you will want to create a function that toggles a book's read status on your Book prototype instance.


Thoughts --

Delete button
* Need to do two things: delete the card itself, remove the object from the array
    - Delete the parent Node? 
    - Find the index relative to a counter associated with the bookCard? (splice)
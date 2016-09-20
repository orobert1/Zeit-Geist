# [Zeit-Geist](https://zeit-geist.herokuapp.com)#

## *A Portfolio Sharing Website and Behance Clone, which allows users to create and share portfolio pieces. It is a full stack web app using a Rails back-end, Postrgesql database, React.js / Flux front-end architecture*

###Single Page App
Zeit-Geist is a single page App that renders to the DOM using a single element. This allows for a more fluid User Experience. Zeit-Geist implements front-end User Authentication and a FLUX cycle that re-renders the DOM content based on a Users Sign in status.

###Projects
The Project Index Page shows a feed of the Twenty most recently posted projects. When a User clicks on a Project, they are directed to that Project's page, where the site makes an API request to the backend, which queries the database for that project and all associated images and descriptions, and then sends that data back to the front-end which updates the content component's state and renders them in the correct order to the DOM inside of content container react elements.

![index](docs/index.png)

###Project Page
This Page populates itself with all of the Images and Descriptions Associated with a project. The Page also features a link to the Project's Author or, if the author is visiting a project that they have created, a link that allows the Author to delete their Project.

![Project Page](docs/project_page1.png)




![Project Page](docs/project_page2.png)




![Project Page](docs/project_page3.png)

###User Page
When a user navigates to another User's page or their own page, they trigger an AJAX request that triggers a controller that finds only the 15 most recent projects associated with that User. The front-end stores all of the Projects in a project store and renders them to the page in react content containers. If the visiting user scrolls to the end of the page, they trigger the same AJAX request and the store collects the next 15 most recent posts and re-renders the page with the updated post containers.

![User Page](docs/user_page.png)

###Project Creation Process
Upon clicking the "Create Project Button", the user is taken to a page where they can upload as many images and descriptions as they would like through a process that dynamically resizes the project canvas every time a user clicks the "Add Image" or "AddDescription" button. After pressing the submit button, the user is then asked to choose a project cover photo and then is given an interface for positioning the cover to fill a post container.

![Create Project](docs/project_create.png)

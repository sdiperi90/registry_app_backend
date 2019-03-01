# Project Overview

## Project Schedule

| Day   | Date        | Deliverable                                                                           | Status     |
| ----- | ----------- | ------------------------------------------------------------------------------------- | ---------- |
| Day 1 | February 28 | Project Description                                                                   | Complete   |
| Day 1 | February 28 | Wireframes / Priority Matrix / Functional Components                                  | Complete   |
| Day 1 | February 28 | Login with Google oauth                                                               | Complete   |
| Day 2 | March 1     | Core Application Structure (HTML, CSS, etc.)                                          | Incomplete |
| Day 3 | March 2     | Pseudocode / actual code                                                              | Incomplete |
| Day 4 | March 3     | CRUD on Registry (create, edit, delete registry)                                      | Incomplete |
| Day 5 | March 4     | CRUD on Presents (create, delete, update presents list)                               | Incomplete |
| Day 6 | March 5     | Conditional rendering presents list (view all, purchased, remaining items, favorites) | Incomplete |
| Day 7 | March 6     | Present                                                                               | Incomplete |

## Project Description

A registry is a an app that assists a user in the communication of gift preferences to wedding guests. A user creates a registry for wedding or baby shower events and adds a list of items they wish to receive as a gift and then distributes it to family and friends. When the item is selected by friends or family it will then will be marked as purchased.

## Wireframes

https://drive.google.com/drive/u/0/folders/1Q0LvgGuJJtvojfcFnUX6SvJQgmPSs0sh?ths=true

## Priority Matrix

https://drive.google.com/drive/u/0/folders/16xbMXq2KNDUchZ4r04Ytk1mrwTQe59ww?ths=true

### MVP/PostMVP - 5min

#### MVP

-   CRUD on Registry (create, edit, delete registry)
-   CRUD Presents (create, delete, update presents list)
-   Conditional rendering presents list (view all, purchased, remaining items, favorites)
-   Oauth login with Google

#### PostMVP

-   Add more than one event type to app
-   Send invitations through messages/email
-   Use external API for product list

## Architectural Design

https://drive.google.com/drive/u/0/folders/1PWqJeldHsh4n2de7wu_8PFWaes2rw3tm?ths=true

## ERD

https://drive.google.com/drive/u/0/folders/1sCyJ0LnFqWSAtttzIwKgoFhHRamKEURC?ths=true

## UI Components

| Component      |                 Description                  |
| -------------- | :------------------------------------------: |
| Header         | This will render the header include the nav  |
| Home           |      This will render the landing page       |
| Login          |       This will render the login form        |
| SearchRegistry |  This will render search form for registry   |
| RegistryResult | This will render registry result from search |
| ProductList    |   This will render ProductItem Componenet    |
| ProductItem    |        This will render all products         |
| CreateRegistry |   This will render form to create registry   |
| RegistryList   |   This will render RegistryItem Component    |
| RegistryItem   |   This will render Items added to registry   |
| Footer         |         This will render the footer          |

| Component      | Priority | Estimated Time | Actual Time |
| -------------- | :------: | :------------: | :---------: |
| Home           |    H     |      4hrs      |     ...     |
| Login          |    H     |      8hrs      |     ...     |
| Sign Up        |    H     |      4hrs      |     ...     |
| SearchRegistry |    H     |     12hrs      |     ...     |
| RegistryResult |    H     |     12hrs      |     ...     |
| ProductList    |    H     |      2hrs      |     ...     |
| ProductItem    |    H     |      6hrs      |     ...     |
| CreateRegistry |    H     |      8hrs      |     ...     |
| RegistryList   |    H     |      2hrs      |     ...     |
| RegistryItem   |    H     |      8hrs      |     ...     |
| Total          |    H     |     58hrs      |     ...     |

## Helper Functions

Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....

| Function   |                        Description                        |
| ---------- | :-------------------------------------------------------: |
| Capitalize | This will capitalize the first letter in a string of text |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project.

#### SAMPLE.....

| Library   |           What it Does            |
| --------- | :-------------------------------: |
| Bootstrap | Used to help style my application |
| Giphy API |      Used to get gifs to use      |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

#### SAMPLE.....

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.

#### SAMPLE.....

| Original Plan           |                                           Outcome                                            |
| ----------------------- | :------------------------------------------------------------------------------------------: |
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated |

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object

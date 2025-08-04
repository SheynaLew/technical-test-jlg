# Career Path Test

## Implementation

- Pull the repo
- cd into the repo
- Run npm i
- Run npm run dev to run the dev environment locally.
- Add a user name to the url (e.g "http://localhost:5173/?user="jen")
- Adding a user name for a user who has already completed the test will display the completion card
- To display the test, replace this with a new user name.

## With More Time

- I did not have time for the back-scroll to view previous answers, but with more time I would add this, or consider using navigation arrows to allow the user to revisit answers during the test.
- I would make the app more responsive
  ** The Info Cards would either change size (including font) or layout, or would not be visible on mobile screens.
  ** The entire app would be responsive to a mobile screen (font size would be decreased, and widths of containers would be reduced. I'd also change the OpinionBar so that the radio-buttons are smaller, preventing them from becoming squashed together).
- I would have a styling variables file so that things like color are easily set and changed without the need to find every instance of the colour in the app.
- I would consider accessibilty
  ** The colour of the questions number is not accessible at the moment and could cause issues
  ** I'd look into the colour of the button and text on the button and determine how accessible that is. Depending on branding requirements, I would consider changing this.
  ** I'd reduce my use of divs and use semantic html more where possible.
  ** I'd use ARIA labelling where necessary
  \*\* I'd include alt text
- I would set font size in the index.css, rather than individually across multiple css files.

## Component Structure and Planning

- See component-structure.png

## Additional Tech Used

- My OpinionsBar and ProgressBar were built using radixUI components.
- For anything more complex I would consider building a component from scratch, but these fit the purpose and saved time.

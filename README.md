# Auto Review Script

A JavaScript script to automate filling out review forms by selecting the "Agree" option (value=4) for all radio button questions, filling a comment box with placeholder text, highlighting the selections, and automatically submitting the form after a 5-second delay.

## Features
- Automatically selects radio buttons with value="4" for all questions
- Highlights selected options and comment box in yellow for visibility
- Fills the comment box with placeholder text
- Auto-submits the form after a 5-second delay
- Provides console feedback for actions

## Usage
1. **Run the Script**:
   - Open the web page containing the review form in your browser
   - Open Developer Tools (F12 or right-click Or Inspect)
   - Navigate to the Console tab
   - Copy and paste the contents of `Tpe.js` or `TPE.txt` into the console and press Enter

2. **Expected Behavior**:
   - All radio buttons with value="4" will be selected
   - Selected options will be highlighted in yellow
   - Comment box will be filled with default text
   - Form will auto-submit after 5 seconds

3. **Requirements**:
   - Form must have radio buttons with `value="4"`
   - Comment box must have `id="Comment"`
   - Submit button must be `<input type="submit">` or `<button type="submit">`

## Installation
No installation required. Copy the script from `Tpe.js` or `TPE.txt`  paste it into the browser console.

## Limitations
- Requires specific HTML structure
- May not work if form elements don't match expected selectors
- Auto-submission depends on finding a valid submit button

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Disclaimer

Use this script responsibly and at your own risk. Always review form submissions before they are sent.

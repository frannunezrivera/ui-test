# Lonely Planet UI Test

The purpose of this test is for you to show us how you would refactor some basic code if you were to write it in the scope of a large project.

The code in this repo works fine and will render a webpage but would *not* scale. How you refactor it is entirely up to you. You can split up the files, remove libraries, add libraries, rewrite the structure completely if you wish.

===========================
NOTE: 
TIME SPENT: It tooks me around 3 hours to complete this exercise.

Nowadays, with the many mobile devices we have, I think it is very important to make your site responsive at least. So I centered my test in make the website responsive/rescalable and make it more reusable. You can resize the browser window and the content will fit!

-I prepared the site for 2 layouts:	
	-under 1100px
	-over 1100px

-The width is configurable by a variable in the SASS file. 
-Anyway, the content has to fit perfectly in any width.

-I made the site themable too, then, changing a few vars you can change the colors of the site. Ideally I would splitted vars in another file: original-lp-theme.sass for example and I would have imported it. But i think is fair enough for this exercise.

-I like more the auto explained code rather than the commented code, that's because you won't see many comments on my code, has to be completely understandable. Anyway I can adapt my way of coding to add more or less comments (as is logical)

===========================
# What we would like to see

## HTML

- Update the html structure to use a style you would adopt in a large project.
- Feel free to use as many/few html5 elements as you would like.
- Comment on any decisions you have made that may be of interest.

===========================
NOTE: 

- I took the original html as a base and refactored it, adding new html5 tags to improve the website structure:
	-NAV, ARTICLES, SECTIONS, HEADERS, FOOTERS...
===========================

## CSS

- The css is written in Sass. It's ugly and has no real structure to it.
- Refactor into a structure you would be happy with.
- Comment on any decisions you have made that may be of interest.
===========================
NOTE: 

- I reorganized and rewrote the CSS to make it more readable.
- I added variables to make it themable.
- I added variable to configure at wich width has to change the layout.
- I made the top navigation bar fixed when its rendered for devices. Make sense that the user can always navigate while reading without return to the beggining of the website.
- I made it responsive.
===========================


## JS

- There is a read more widget and a lightbox implemented on the page.
- The Javascript is written in coffeescript. It is fully functional but far from testable.
- Refactor it into your preferred style.
- Your code should be performant, scalable and testable.
- The finished product should be user friendly.
- Comment on any decisions you have made that may be of interest.
- Compressed to minify the size.

===========================
NOTE: 

- I'm not an expert in cofeescript since I only used it for "fun" at home. So I decide to make it in standard JS.
- I created a JS Library to make it reusable (lp-library.js).
- And I create another JS where I use the library (ui-test.js).
- I have improved the 2 widgets of the library:
	-Lightbox: Since the website is updated to be compatible with mobile devices makes no sense to press ESC to remove the lightbox. Then I added the click/tap as an action to remove the lightbox. I adjusted the images inside the lightbox also, to make it fit inside the screen. I also made it configurable with params.

	-ReadMore: I made it all configurable with params. I also improve it with a function to calculate the height of the full container automatically if the maximun height is not declared. Note that I have used a closure to make this function private to this method.
- Compressed to minify the size.

===========================


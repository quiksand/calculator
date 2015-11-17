# calculator

##About
This is a calculator application
It was created to satisfy the requirements of the fourth Free Code Camp Zipline.

##Latest Live Version
http://codyschindler.com/fcc/calculator

##Working principles
Pretty straight forward calculator app. You can use the keyboard for numbers and functions. 

##Shortcuts
0-9, .,  +, -, *, /, %  : Numbers, decimal,  and operations

`  : All Clear

\\  : Clear Entry

,  : +/-

Return, =  : Equal


##Known issues
1. Modulo math function could cause some weird issues when floating point numbers are involved. All the other functions could too, for that matter, although I believe I sorted out the others and put some good rounding functions in to make sure numbers turn out ok. Javascript handles floats in a funny way, and I wanted to see how far I could get handling the exceptions without using somebody else's math plugin. This is a learning exercise, after all :).
2. Numbers overflow in the wrong direction on the "screen." The easy fix breaks other parts, so I just went ahead and shipped it as-is, since it doesn't affect functionality.
3. Using the keyboard won't light up the keys. Not an issue so much as a feature I never got around to writing. Maybe in the future.

##Disclaimer
Don't use it for rocket science or brain surgery- it wasn't designed to handle that kind of responsibility ;)

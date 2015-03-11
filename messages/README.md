README
Rebecca Larson
Lab 6

This lab involved parsing a JSON file and modifies a HTML.

1. All aspects of the lab have been correctly implemented.
2. Ming helped me fix an infinite loop error.
3. I have spent about 3 hours on this assignment.

Answer to Question:

It is not possible to request data from a different origin because XMLHttpRequest complies with the brower's the same-origin policy. This means that XMLHttpRequest only works when the request is made to the host for the web page. This is for security reasons, as without the same-origin policy, the website you are requesting information from has access to the host website (which could be your banking website, email, etc). It is also not possible to request data from your local machine using XMLHttpRequest, again for security reasons, as you don't want a web browser to have access to your personal files.

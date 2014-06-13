jQuery include plugin
================
This jQuery plugin is here to help developers include another html file in a html file.
In this plugin you can access included content in $(document).ready function.

How to use it?
================
To include the plugin in your code:

	<script src="jquery.include.js"></script>

To include another html file:

	<script>$.include("include.inc");</script>

Example
================
**index.htm**:

	<html>
		<head>
			<script src="jquery.js"></script>
			<script src="jquery.include.js"></script>

			<script>
				$(document).ready(function () {
					alert($("#test").text());
				});
			</script>
		</head>
		<body>
			<script>$.include("include.inc");</script>
		</body>
	</html>

**include.inc**:

	<div id="test">
		There is no issue between this plugin and jquery.
	</div>

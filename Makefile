

jquery.konami.min.js: jquery.konami.js
	uglifyjs2 $^ -c -m -o $@

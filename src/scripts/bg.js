'use strict';
window.addEventListener("load", init);
function init() {
	console.log('init()');

	var
		fs 					= require("fs")
		, tumblr 			= require('tumblr')
		// , tumblr 			= require('tumblr.js')
		// , oauth 			= require('oauth')
		, exorcist   		= require('exorcist')
		, path 		  		= require('path')
		// , express 			= require("express")
//		, tumblrAPI 		= require("express-tumblr-oauth")
		// , mapfile 			= path.join(__dirname, 'bundle.js.map')
		// , app 				= express()
		, callback_URL		= 'google.com'
		, oauth = {
			requestUrl 			: 'https://www.tumblr.com/oauth/request_token'
			, authorizeURL 		: 'https://api.tumblr.com/oauth/authorize'
			, oauth_callback	: 'https://api.tumblr.com:80/v2/blog/bookcult.tumblr.com/posts/text?limit=2&api_key=lGuohaIkGsYCy69StuPmI5CDQ7UiIDoVg1tHoirxbNziYp7vj0'
			, accessTokenURL 	: 'https://www.tumblr.com/oauth/access_token'
			//requestTokenURL 	: 'https://api.tumblr.com/oauth/request_token'
			, consumer_key		: 'lGuohaIkGsYCy69StuPmI5CDQ7UiIDoVg1tHoirxbNziYp7vj0'
			, consumer_secret	: 'VViK77e3pJjqmAYSglCUFiQdiCkfumDS3UyOlPJoRmPbkqgu1g'
			, token				: '3QPvnwo4gK2rw0XFutnmMwJ9QAHGittBnSY8w3ipJyWyfeEQOH'
			, token_secret		: 'G8SGtciW0tDCNZ4Ee60lojwqEEfehLOm22ynsV1Kh6mJzsHJZH'
		}
		;


	var blog = new tumblr.Blog('bookcult.tumblr.com', oauth);

	var asdf = require('oauth');
	
	console.log('Livraria OAuth', asdf);
	console.log('tumblr', tumblr);
	console.log('oauth', oauth);
	console.log('blog', blog);

	blog.text({ limit: 2 }, function (error, response) {
		if (error) {
			throw new Error(error);
		}

		console.log(response.posts);
	});

// 	var user = new tumblr.User(oauth);
// 
// 	user.info(function (error, response) {
// 		if (error) {
// 			throw new Error(error);
// 		}
// 
// 		console.log(response.user);
// 	});
 
	// var config =
	//   { oauth:
	//       { consumer_secret: consumer_secret
	//       , consumer_key: consumer_key
	//       , callback: callback_URL
	//       }
	//   }
	//  
	// tumblrAPI(app, config)
	//  
	// app.listen(3000)

	$("li").on("mouseover", function () {
		var pos = $("#blog").offset();
		pos.top += 20;
		pos.left -= 200;
		$("#titleBlog").css({ top: pos.top, left: pos.left }).show();
	});

	$("li").on("mouseout", function () {
		$("#titleBlog").hide();
	});
}
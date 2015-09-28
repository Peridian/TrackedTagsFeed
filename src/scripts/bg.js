'use strict';
window.addEventListener("load", init);
function init() {

	var consumerKey = 'lGuohaIkGsYCy69StuPmI5CDQ7UiIDoVg1tHoirxbNziYp7vj0';

	console.log('init()');

	var
		fs = require("fs")
		, tumblr = require('tumblr')
		, oauth = require('oauth')
		, consumer
		;

	window.tumblr = tumblr;

	console.log('tumblr', tumblr);
	console.log('oauth', oauth);

		var client = tumblr.Tagged({
			consumer_key: 'lGuohaIkGsYCy69StuPmI5CDQ7UiIDoVg1tHoirxbNziYp7vj0',
			consumer_secret: 'VViK77e3pJjqmAYSglCUFiQdiCkfumDS3UyOlPJoRmPbkqgu1g',
			token: 'Y559tLKowmgG2i7PEbfKd6yYCkE0tQMaqtx40SRlvpiU8uoVt0',
			token_secret: '6ztFGYCCXnSSsbjdYYntJBed48ryLUigu4LV10odr0mCWTviA2'
		});
/*	
		// Make the request
		client.userInfo(function (err, data) {
			// ...
		});
	*/

	/*
	var client = new tumblr.Client({
		// ...
	});
	*/

	$.getJSON('http://api.tumblr.com/v2/blog/YOURBLOG.tumblr.com/posts/photo?callback=?', {
		api_key: consumerKey,
		tag: 'meme',
		limit: 12
	}).then(function (json) {
		console.log(json);
	});

	/*
	 consumer = new oauth.OAuth(
		"http://www.tumblr.com/oauth/request_token",
		"http://www.tumblr.com/oauth/access_token",
		'lGuohaIkGsYCy69StuPmI5CDQ7UiIDoVg1tHoirxbNziYp7vj0',
		'VViK77e3pJjqmAYSglCUFiQdiCkfumDS3UyOlPJoRmPbkqgu1g',
		"1.0A",
		"http://localhost:3000/auth/callback",
		"HMAC-SHA1"
			);
		console.log('consumer', consumer);
	*/

	$("li").on("mouseover", function () {
		var pos = $("#blog").offset();
		pos.top += 20;
		pos.left -= 200;
		$("#titleBlog").css({ top: pos.top, left: pos.left }).show();
	});

	$("li").on("mouseout", function () {
		$("#titleBlog").hide();
	});

	/*function ajax() {
		$.ajax({
			url:
			dataType: 'jsonp',
			success: function (results) {
				// Logs to your javascript console.
				console.log(results);
				// writes the title to a div with the Id "myDivId" (ie. <div id="myDivId"></div>)
				$("#myDivId").html(results.response.title);
			}
		});
	 }

	function ProcessTitle(reponse) {
		console.log('response');
		console.log(response);
		var posts = reponse.response.posts;
		var text = '';
		for (var i in posts) {
			p = posts[i];
			text += '<a href=' + p.post_url + '>' + p.title + '</a><br>';
		}
		$('#titleBlog').append(text);
	*/
}
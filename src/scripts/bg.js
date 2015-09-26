'use strict'
var jsdom = require("jsdom").jsdom;
var fs = require("fs");
//var $ = fs.readFileSync("./jquery.js", "utf-8");
//var $ = require("jquery")(jsdom.jsdom().createWindow());

var tumblr = require('tumblr');

/*jsdom.env({
    html : "<html><body></body></html>",
    done : function(errs, window) {
        global.window = window;
    }
});
*/
/*
var client = tumblr.createClient({
  consumer_key: '<consumer key>',
  consumer_secret: '<consumer secret>',
  token: '<oauth token>',
  token_secret: '<oauth token secret>'
});
*/
//var document = document ||

window.addEventListener("load", init);

function init() {

	//client.posts(blogName, options, callback);

	$("li").on("mouseover", function () {
		console.log('MouseOver', $(this).text());
		var pos = $("#blog").offset();
		pos.top += 20;
		pos.left -= 200;
		$("#titleBlog").css({ top: pos.top, left: pos.left }).show();
	});

	$("li").on("mouseout", function () {
		console.log('MouseOut', $(this).text());
		$("#titleBlog").hide();
	});
}

function ajax() {
	$.ajax({
		url: "http://api.tumblr.com/v2/blog/cinemagorgeous.com/info?api_key=lGuohaIkGsYCy69StuPmI5CDQ7UiIDoVg1tHoirxbNziYp7vj0",
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
}
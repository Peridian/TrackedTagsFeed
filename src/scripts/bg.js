window.addEventListener("load", init);

function init() {
	
	(function ajax() {
		console.log('ajax');
		$('document').ready(function () {
			$.ajax({
				url: "http://api.tumblr.com/v2/blog/myblog.tumblr.com/info?api-key=myapikey",
				dataType: 'jsonp',
				success: function (results) {
					console.log(results);
				}
			});
		});
	})()

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
var current_id = null;

function highlight(button) {
	$(button).css("background-color", "#006400");
	$(button).css("color", "white");
	return
}

function current_page()
	{
		var url = document.URL;
		console.log(url);
		for(i = url.length; i != 0; i--)
		{
			if(url[i] == '/')
				break;
		}
		if((i+1) == url.length){
			highlight(document.getElementById("s-index"));
			return;
		}
		
		var page = url.substring(i+1, url.length-5);
		var pull = "s-"+page;

		return pull;
	}

$(document).ready(function(){
		current_id = current_page();
		highlight(document.getElementById(current_id));
	}
)
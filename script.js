chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		newWindow();
	}
});

function newWindow() {
	input = prompt('Let`s Qiita!');
	query_mem =  input.split(' ');
	query_num = query_mem.length;
	query = '';
	for(i=0;i<query_num;i++){
		query = query+' '+query_mem[i];
	}

	if(query!=null){
		window.open('https://qiita.com/search?q='+query);
	}
}
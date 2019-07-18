function parseTitle(content){
	var r = /(<h2.*?h2>)/;
	r.exec(content);
	return RegExp.$1;
}

function parseContent(content){
	var r = /}(.*?)/;
	r.exec(content);
	return RegExp.$1;
}

var myObj = {
	letter : 'a',
	writeLetter : function() {
		console.log(this.letter);
	}
};


myObj.writeLetter();
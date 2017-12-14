
	let text = $('.text')[0];
	let boxs = $('.box')[0];
	let bottom = $('.bottom1')[0];
	console.log(bottom)
	let span1 = $('.span1')[0];
	let span2 = $('.span2')[0];
	let submit = $('.button')[0];
	let con = $('.bottom')[0];
	 

		text.onkeyup = function(){
			span1.innerText = this.value.length;
			span2.innerText = 100-this.value.length;
			return this.value;
		}
		text.onkeydown = function(e){
			if(e.keyCode == 13){
			event.preventDefault();
			let t = $('<div>');
			t.className ='bottom';
			prepend(bottom,t);
			t.innerText = text.onkeyup();
			this.value = null;
			}
		}
		 

function submi(){
			let t = $('<div>');
			t.className ='bottom';
			t.innerText = text.onkeyup();
			text.value = null;
			prepend(bottom,t);
		}
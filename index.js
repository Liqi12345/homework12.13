/*
属性: 1.创建字母
	  2.字母个数

方法: 1.开始函数
	  2.遍历个数
	  3.一个函数的创建方法
	  4.下落方法





 */

class Code{
		constructor(){
			this.code = ['Q','T','P','L','W','F','B','A','H','N','G','D'];
			this.length = 7;
			// 定义一个空数组,方便遍历
			this.arr = [];
			this.speed = 10;
		}
		// 开始函数
		start(){
			this.getcode(this.length)
			this.drop()
		}
		// 遍历个数
		getcode(length){
			for(let i = 0; i <= length;i++){
				this.one()
			}
		}
		// 创建一个元素的方法
		one(){
			let divs = $('<div>');
			let item = Math.floor(Math.random()*this.code.length);
			divs.className = 'boxs'
			divs.innerText = this.code[item]
			document.body.append(divs);
			this.arr.push(divs)
			divs.style.top = Math.floor(Math.random()*100) + 'px';
			divs.style.left = Math.floor(Math.random()*(window.innerWidth -400) + 200) + 'px';

		}
		// 下落方法
		drop(){
			let that = this;
			setInterval(function(){
				for(let i = 0;i < that.arr.length;i++){
				let tops1 = that.arr[i].offsetTop + that.speed;
				that.arr[i].style.top = tops1 + 'px';
				if(tops1 >= 500 ){
					document.body.removeChild(that.arr[i])
					that.arr.splice(i,1)
					that.one()
				}
				// console.log(that.speed)
				}
			},100)	
		}
}



/* class Code{
// 	constructor(){
// 		this.code = ['Q','T','P','L','W','F','B','A','H','N','G','D'];
// 		this.length = 7;
// 		this.arr = [];
// 		this.speed = 10;
// 	}
// 	start(){
// 		this.getcode(this.length)
// 		this.drop()
// 	}

// 	getcode(length){
// 		for(let i = 0; i <= length;i++){
// 			this.one()
// 		}
// 	}
// 	one(){
// 		let only = Math.floor(Math.random()*this.code.length);
// 		// console.log(this.code[only])
// 		let divs = $('<div>');
// 		divs.className = 'boxs';
// 		divs.innerText = this.code[only];
// 		document.body.append(divs)
// 		this.arr.push(divs)	
// 		let tops = Math.floor(Math.random()*100);
// 		let lefts = (window.innerWidth-400)*Math.random()+200;
// 		divs.style.top = tops + 'px';
// 		divs.style.left = lefts + 'px';	
// 	}

// 	drop(){
// 		let that = this;
// 			setInterval(function(){	
// 			for(let i = 0;i < that.arr.length;i++){
// 				let tops1 = that.arr[i].offsetTop + that.speed;
// 				that.arr[i].style.top = tops1 + 'px';
// 				if(tops1 >= 500){
// 					document.body.removeChild(that.arr[i])
// 					that.arr.splice(i,1)
// 					that.one()
// 				}
// 			}		
// 		},100)
// 	}
 }*/



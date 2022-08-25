function getPassword(){
	let Chars ="0ABCDEFGHIJKLMNOPQRSTUWXYAZabcdefghijklmnopqrstuvwxyz123456789!@#$&*+:;?"
	let length = 10
	let password = ''

	for(let i = 0;i < length; i++){
		let randomIndexGen = Math.floor(Math.random()* Chars.length)
		password += Chars.substring(randomIndexGen,randomIndexGen+1)
	}

	document.getElementById('password').value = password


	//let Chars2 ="0ABCDEFGHIJKLMNOPQRSTUWXYAZabcdefghijklmnopqrstuvwxyz123456789!@#$&*+:;?"
	let length2 = 10
	let password2 = ''

	for(let i = 0;i < length; i++){
		let randomIndexGen2 = Math.floor(Math.random()* Chars.length)
		password2 += Chars.substring(randomIndexGen2,randomIndexGen2+1)
	}

	document.getElementById('password2').value = password2
}
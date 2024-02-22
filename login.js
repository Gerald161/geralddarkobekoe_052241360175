var patterns = {
    studentNumber: /^[\d]{12}$/,
    phoneNumber: /^[\d]{10}$/,
    firstName: /^[A-Za-z\d\s]{2,25}$/,
    address: /^[A-Za-z\d\s]{10,25}$/,
    lastName: /^[A-Za-z\d\s]{2,25}$/,
    // password: /^[\w]{8,20}$/,
    // email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

const input = document.querySelectorAll('input');

var anyFieldInValid = true

function validate(field, regex){
    if(field.type != "file"){
        if(field.name != "birth-year"){
            if(regex.test(field.value)){
                field.className = 'valid';
        
                anyFieldInValid = false
            }else{
                field.className = 'invalid';
        
                anyFieldInValid = true
            }
        }
    }
}

input.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
        validate(e.target, patterns[e.target.name]);
    })
})

// var password_show = document.querySelector(".show_hide_pass")

// var password_field = document.querySelector("#password")

// password_show.addEventListener("click", (e)=>{
//     if(password_show.innerHTML == "SHOW"){
//         password_show.innerHTML = "HIDE"

//         password_field.type = "text"
//     }else{
//         password_show.innerHTML = "SHOW"

//         password_field.type = "password"
//     }
// })

let signup_button = document.querySelector("#signup_button")

signup_button.addEventListener("click", (e)=>{
    e.preventDefault()

    input.forEach((input)=>{
        validate(input, patterns[input.name]);
    })

    if(anyFieldInValid == false){
        var loading = document.querySelector(".loading");

        signup_button.classList.add("show_loader");

        loading.classList.remove("show_loader");
    }
})

var thumbnail_button = document.querySelector("#thumbnail");

var thumbnail_image_placeholder = document.querySelector(".thumbnail_image_placeholder");

var thumbnail_icon = document.querySelector("i");

thumbnail_button.addEventListener("change", e =>{
	if(thumbnail_button.files.length){
		updateImage(thumbnail_button.files[0]);
	}
});

function updateImage(file){
	if(file.type.startsWith("image/")){
		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.onload = () => {
			thumbnail_icon.style.display = "none";
			thumbnail_image_placeholder.src = reader.result;
			thumbnail_image_placeholder.style.display = "block";
		}
	}else{
		thumbnail_icon.style.display = "block";
		thumbnail_image_placeholder.style.display = "none";
	}
}
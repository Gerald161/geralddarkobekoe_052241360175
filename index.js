var images = [
    {
        image: "./images/1.jpg",
        name: "Joe"
    },
    {
        image: "./images/2.jpg",
        name: "Mama"
    },
    {
        image: "./images/3.jpg",
        name: "Chucky"
    },
    {
        image: "./images/4.jpg",
        name: "Gee"
    },
];

var testimonials = document.querySelector(".testimonials");

images.forEach((image)=>{
    testimonials.innerHTML += `
    <div class="testimonial">
        <img loading="lazy" src=${image.image}>
        <div class="textbox">
            <h2>${image.name}</h2>
            <div class="person">
                <img src="./images/fresh.jpg">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia facilis aperiam a consequuntur beatae.</p>
        </div>
    </div>
    `
})
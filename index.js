var images = [
    {
        image: "./images/1.jpg",
        name: "Joe",
        avatar: "./images/fresh.jpg"
    },
    {
        image: "./images/2.jpg",
        name: "Ariel",
        avatar: "./images/jasmine.jpg"
    },
    {
        image: "./images/3.jpg",
        name: "Chun-Li",
        avatar: "./images/jade.jpeg"
    },
    {
        image: "./images/4.jpg",
        name: "Gee",
        avatar: "./images/ruby.jpeg"
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
                <img src=${image.avatar}>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia facilis aperiam a consequuntur beatae.</p>
        </div>
    </div>
    `
})
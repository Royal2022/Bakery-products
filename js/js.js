'use strict';

let body = document.querySelector('body');

/*============ burger menu open or close ============*/

let burger_button = document.querySelector('.burger_button');
let open_menu = document.querySelector('.open_menu');
let close_menu = document.querySelector('.close_menu');
let burger_content = document.querySelector('.burger_content');
let close_win = document.querySelector('.burger_shadow');
let t_or_f = true;

burger_button.addEventListener('click', function (){
    if (t_or_f){
        burger_content.style.display = 'flex';

        open_menu.style.display = 'none';
        close_menu.style.display = 'flex';

        body.style.overflowY = 'hidden';
        t_or_f = false;
    }
    else {
        burger_content.style.display = 'none';

        open_menu.style.display = 'flex';
        close_menu.style.display = 'none';

        body.style.overflowY = 'scroll';
        t_or_f = true;
    }
});
close_win.addEventListener('click', function (){
    burger_content.style.display = 'none';

    open_menu.style.display = 'flex';
    close_menu.style.display = 'none';

    body.style.overflowY = 'scroll';
    t_or_f = true;
});





/*============ images slider ============*/

let button_left = document.querySelector('.button_left');
let button_right = document.querySelector('.button_right');

let mini_images = document.querySelectorAll('.mini_images_off');


let slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {

    let slides = document.querySelectorAll(".img_off");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    if (slideIndex === 1){
        button_left.style.display = 'none';
    }
    if (slideIndex !== 1){
        button_left.style.display = 'flex';
    }
    if (slideIndex === 3){
        button_right.style.display = 'none';
    }
    if (slideIndex !== 3){
        button_right.style.display = 'flex';
    }


    for (let slide of slides) {
        slide.style.display = "none";
    }
    for (let slide of mini_images){
        slide.className = 'mini_images_off';
    }
    slides[slideIndex - 1].style.display = "flex";

    mini_images[slideIndex - 1].className = 'mini_images_on';
}

button_left.onclick = function (){
    showSlides(slideIndex -= 1);

}
button_right.onclick = function (){
    showSlides(slideIndex += 1);

}



for (let i = 0; i < mini_images.length; i++){
    mini_images[i].onclick = function (){
        showSlides(slideIndex = i+1);

        let on = document.querySelector('.mini_images_on');

        mini_images[i].className = (this.className === 'mini_images_on')?' mini_images_on':'mini_images_on';

        if (mini_images[i].className === 'mini_images_on'){
            on.className = 'mini_images_off';
        }
        else {
            on.className = 'mini_images_on';
        }
    }
}



/*============ zoom_full_images ============*/

let img_off = document.querySelectorAll('.img_off');
let zoom_full_images = document.querySelector('.zoom_full_images');
let img_push = document.querySelector('.img_push');

for (let i = 0; i < img_off.length; i++){
    img_off[i].onclick = function (){
        zoom_full_images.style.display = 'flex';
        body.style.overflowY = 'hidden';
        img_push.innerHTML += `<div class="full_images">
<img src="${img_off[i].getAttribute('src')}"></div>`;
    }
}

let button_close = document.querySelector('.button_close');

button_close.onclick = function (){
    zoom_full_images.style.display = 'none';
    body.style.overflowY = 'scroll';
    img_push.innerHTML = '';
}










/*============ button_add_recipe ============*/



let add_recipe = document.querySelectorAll('.add_recipe');

let black_fon = document.querySelector('.black_fon');

let content_add_recipe = document.querySelector('.content_add_recipe');

for (let i = 0; i < add_recipe.length; i++){
    add_recipe[i].onclick = function (){
        content_add_recipe.style.display = 'flex';
        body.style.overflowY = 'hidden';
    }
}

black_fon.onclick = function (){
    content_add_recipe.style.display = 'none';
    body.style.overflowY = 'scroll';
}






/*============ slider_recipes ============*/


let button_slider_left = document.querySelector('.button_slider_left');
let button_slider_right = document.querySelector('.button_slider_right');


let slider_recipes = document.querySelector('.slider_recipes');
let slider_box = document.querySelectorAll('.slider_box');

/*let k = 1;
let s = 1;

button_slider_left.onclick = function (){
    if (s > slider_box.length)
    {
        k++;
        slider_recipes.insertBefore(slider_box[s], null);
        slider_recipes.insertBefore(slider_box[k], slider_box[0]);
        s++;
    }
    else {
        slider_recipes.insertBefore(slider_box[0], slider_box[1]);

        k = 0;
        s = 1;
    }
}
button_slider_right.onclick = function () {
    if (s < slider_box.length)
    {
        k++;
        slider_recipes.insertBefore(slider_box[s], null);
        slider_recipes.insertBefore(slider_box[k], slider_box[0]);
        s++;
    }
    else {
        slider_recipes.insertBefore(slider_box[0], slider_box[1]);

        k = 0;
        s = 1;
    }
}*/

let slideIndex2 = 1;


function showSlides2(n) {

    let itemListParent = document.querySelector('.slider_recipes');
    let itemList = document.querySelectorAll('.slider_box');

    if (n > itemList.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = itemList.length
    }
        let one =0;
        let two =0;
        let three =0;
        for (let i = 0; i < itemList.length; i++){
            if (i === 1){
                one = i;
            }
            if (i === 2){
                two = i;
            }
            if (i === 3){
                three = i;
            }
        }
        itemListParent.insertBefore(itemList[one], null);
        itemListParent.insertBefore(itemList[two], itemList[0]);
}

function showSlides3(n) {

    let itemListParent = document.querySelector('.slider_recipes');
    let itemList = document.querySelectorAll('.slider_box');

    if (n > itemList.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = itemList.length;
    }
        let one =0;
        let two =0;
        let three =0;
        for (let i = 0; i < itemList.length; i++){
            if (i === 1){
                one = i;
            }
            if (i === 2){
                two = i;
            }
            if (i === 3){
                three = i;
            }
        }
        itemListParent.insertBefore(itemList[0], null);
        itemListParent.insertBefore(itemList[one], itemList[two]);
}

button_slider_left.onclick = function (){
    showSlides3(slideIndex2 += 1);

}
button_slider_right.onclick = function (){
    showSlides2(slideIndex2 += 1);

}



/*============ slider_recipes_mini ============*/



let button_slider_left_mini = document.querySelector('.button_slider_left_mini');
let button_slider_right_mini = document.querySelector('.button_slider_right_mini');




let slideIndex_mini = 1;
showSlides_mini(slideIndex);


function showSlides_mini(n) {

    let slides = document.querySelectorAll(".slider_box_mini");

    if (n > slides.length) {
        slideIndex_mini = 1;
    }
    if (n < 1) {
        slideIndex_mini = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex_mini - 1].style.display = "flex";
}

button_slider_left_mini.onclick = function (){
    showSlides_mini(slideIndex_mini -= 1);
}
button_slider_right_mini.onclick = function (){
    showSlides_mini(slideIndex_mini += 1);
}







/*============== Add Recipe ==============*/


let directions = document.querySelector('#directions');

let directions_button = document.querySelector('.directions_button');

let ingredient_save_box = document.querySelector('.ingredient_save_box');


directions_button.addEventListener('click', function (){
    if (directions.value !== ''){
        ingredient_save_box.innerHTML += `<div class="ingredient_save">
                    <p class="text" style="font-family: 'Amiko', serif">${directions.value}</p>
                    <div class="ingredient_delete" onclick="dellete()"><img src="img/cross%20(1).png" alt=""></div>
                    </div>`;
    }
    directions.value = '';
});


function dellete(){
    let ingredient_delete = document.querySelectorAll('.ingredient_delete');

    for (let i = 0; i < ingredient_delete.length; i++){
        let ingredient_save = document.querySelectorAll('.ingredient_save');

        ingredient_save[i].addEventListener('click', function (){
            ingredient_save[i].remove();
        });
    }
}



/*
console.log(getComputedStyle(ingredient_save_box).height)
*/

/*============== Add Ingredient ==============*/

let j = 0;

function creat_box (){
    let box_count_of_ingredients_and_ingredient = document.querySelectorAll('.box_count_of_ingredients_and_ingredient');

    let count_of_ingredients = document.querySelectorAll('#count_of_ingredients');
    let ingredient = document.querySelectorAll('#ingredient');

    for (let i = 0; i < count_of_ingredients.length; i++){
        if (count_of_ingredients[i].value !== '' && ingredient[i].value !== ''){
                box_count_of_ingredients_and_ingredient[j++].innerHTML = `<div class="save_text">
                        <div class="text_count_of_ingredients" style="font-family: 'Amiko', serif">${count_of_ingredients[i].value}</div>
                        <div class="text_ingredient">${ingredient[i].value}</div>

                        <div class="ing_count_delete"><img src="img/cross%20(1).png" alt=""></div>
                    </div>`;
            delete_save();

        }
    }

}

delete_save();


function delete_save (){
    let ing_count_delete = document.querySelectorAll('.ing_count_delete');

    let box_c_o_i_and_i = document.querySelectorAll('.box_count_of_ingredients_and_ingredient');
    for (let i = 0; i < ing_count_delete.length; i++){
        ing_count_delete[i].onclick = function (){
                box_c_o_i_and_i[i].remove();
                j--;
        }
    }

}




document.querySelector('.add_ingredient').onclick = function (){
    let elem = document.querySelector('.box_count_of_ingredients_and_ingredient>label');

    if(!elem){
        document.querySelector('.open_box').innerHTML += `                    
                    <div class="box_count_of_ingredients_and_ingredient" style="margin-top: 20px">
                        <label>
                            <input type="text" placeholder=" 1 Cup" id="count_of_ingredients" onblur="creat_box()">
                        </label>
                        <label>
                            <input type="text" placeholder=" Milk" id="ingredient" onblur="creat_box()">
                        </label>
                    </div>`;
    }
    delete_save();

}






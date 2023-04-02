const modal = document.getElementById("modal");
const open_modal = document.getElementById("open_button");
const close_modal = document.getElementById("close_button");
const body = document.body;
const container = document.getElementById("container");

var time = document.getElementById("time");
const after_time_out = document.getElementById("after_time_out");
var no = 30;

// alert(window.innerWidth);
var chances = 3;

open_modal.addEventListener("click", function () {

    
    container.style.marginTop = '3em';
    time.style.marginTop = '18em';
    modal.show();

});

close_modal.addEventListener("click", function () {
    modal.close();
    
    container.style.marginTop = '2em';
    time.style.marginTop = '0em';

});


const b1 = document.getElementById('r11');
const b2 = document.getElementById('r12');
const b3 = document.getElementById('r13');
const b4 = document.getElementById('r21');
const b5 = document.getElementById('r22');
const b6 = document.getElementById('r23');
const b7 = document.getElementById('r31');
const b8 = document.getElementById('r32');
const b9 = document.getElementById('r33');

// List of Color Palete buttons 

const aqua = document.getElementById('aqua');
const brown = document.getElementById("brown");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const lightblue = document.getElementById("lightblue");
const orange = document.getElementById("orange");
const purple = document.getElementById("purple");
const chartreuse = document.getElementById("chartreuse");
const blue = document.getElementById("blue");
const slateblue = document.getElementById("slateblue");
const deeppink = document.getElementById("deeppink");
const darkgreen = document.getElementById("darkgreen");

var list_of_buttons = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
var list_of_colors = [aqua, brown, red, yellow, lightblue, orange, purple, chartreuse, blue, slateblue, deeppink, darkgreen];


// Two important game buttons

const start_button = document.getElementById("start_button");
const submit_button = document.getElementById("submit_button");

// chances button

const chances_button = document.getElementById("chances_button");

const box_for_colors = document.getElementById("box_for_colors");

const three_buttons = document.getElementById("three_buttons");


start_button.onclick = function () {

    setTimeout(() => {
        start_button.remove();

    }, 500);

    list_of_buttons.forEach(element => {

        element.style.backgroundColor = '#778866';

    });

    // sixty_to_fifty();



    list_of_colors.forEach(element => {

        element.onclick = function () {

            list_of_buttons.forEach(element1 => {

                element1.onclick = function () {

                    element1.style.backgroundColor = element.style.backgroundColor;

                }

            });

        }

    });


    submit_button.onclick = function () {

 


        if (b1.style.backgroundColor == 'red' && b6.style.backgroundColor == 'red' && b8.style.backgroundColor == 'red'
            && b2.style.backgroundColor == 'yellow' && b4.style.backgroundColor == 'yellow' && b3.style.backgroundColor == 'purple'
            && b9.style.backgroundColor == 'purple' && b5.style.backgroundColor == 'orange' && b7.style.backgroundColor == 'lightblue') {

            alert("You Won");
            submit_button.remove();

            chances_button.style.width = '70%';
            chances_button.innerText = 'Congratulations you won';
            time.remove();
            after_time_out.innerText = "Game Complete";
            after_time_out.style.display = 'block';
            box_for_colors.remove();

            list_of_buttons.forEach((e) => {
                e.disabled = true;
            })




        }

        else {


            chances--;



            chances_button.innerText = `Chances left(${chances})`;

            if (chances == 0) {

                alert("You lost");


                list_of_buttons.forEach((e) => {
                    e.disabled = true;
                })

                chances_button.style.width = '60%';
                chances_button.innerText = 'Chances Over, You Lost !!!';
                time.innerText = 'Time Out';
                after_time_out.innerText = 'Game Over';
                after_time_out.style.display = 'block';
                submit_button.remove();
                box_for_colors.remove();



            }

        }

    }


    setInterval(function () {
        time.innerText = `00:${no--}`;

        if (no < 10) {
            time.innerText = `00:0${no}`;
        }

        if (no == 0 && chances > 0) {
            list_of_buttons.forEach((e) => {
                e.disabled = true;
            })

            after_time_out.innerText = `Time Over`;
            chances_button.innerText = 'You Lost';
            after_time_out.style.display = 'block';
            submit_button.remove();

            time.remove();
        }


        if (no == 0 || time.innertext == 'Time Out' || (chances == 0)) {

            list_of_buttons.forEach((e) => {
                e.disabled = true;
            })

            time.innerText = `Game Over`;
            submit_button.remove();

            time.remove();

        };

    }, 1000);

}

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

const retry_section = document.getElementById("retry_section");
// const retry_button = document.createElement('button');
// retry_button.classList.add("retry_button");
const retry_button = document.getElementById("retry_button");

retry_button.onclick = function(){
    window.location.reload();
    // console.log("wjbsw");
}

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


// -------------------------------------------------------------------------------------------

const set1_of_colors = ["aqua","brown","orange"];
const set2_of_colors = ["chartreuse","purple","red"];
const set3_of_colors = ["yellow","blue","deeppink"];
const set4_of_colors = ["lightblue","darkgreen","slateblue"];



const b1_color = set1_of_colors[Math.round(Math.random()* 2)];
const b2_color = set2_of_colors[Math.round(Math.random()* 2)];
const b3_color = set1_of_colors[Math.round(Math.random()* 2)];
const b4_color = set3_of_colors[Math.round(Math.random()* 2)];
const b5_color = set4_of_colors[Math.round(Math.random()* 2)];
const b6_color = set2_of_colors[Math.round(Math.random()* 2)];
const b7_color = set1_of_colors[Math.round(Math.random()* 2)];
const b8_color = set3_of_colors[Math.round(Math.random()* 2)];
const b9_color = set4_of_colors[Math.round(Math.random()* 2)];



// body.style.backgroundColor = colors_displayed_onScreen[Math.round(Math.random()* 5)];


b1.style.backgroundColor = b1_color;
b2.style.backgroundColor = b2_color;
b3.style.backgroundColor = b3_color;

b4.style.backgroundColor = b4_color;
b5.style.backgroundColor = b5_color;
b6.style.backgroundColor = b6_color;

b7.style.backgroundColor = b7_color;
b8.style.backgroundColor = b8_color;
b9.style.backgroundColor = b9_color;


// ------------------------------------------------------------------------------------------------

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

 


        if (b1.style.backgroundColor == b1_color && b6.style.backgroundColor == b6_color && b8.style.backgroundColor == b8_color
            && b2.style.backgroundColor == b2_color && b4.style.backgroundColor == b4_color && b3.style.backgroundColor == b3_color
            && b9.style.backgroundColor == b9_color && b5.style.backgroundColor == b5_color && b7.style.backgroundColor == b7_color) {

            alert("You Won");
            submit_button.remove();

            chances_button.style.width = '70%';
            chances_button.innerText = 'Congratulations you won';
            time.remove();
            after_time_out.innerText = "Game Complete";
            after_time_out.style.display = 'block';
            retry_section.style.display = 'block';
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
                retry_section.style.display = 'block';
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
         
            retry_section.append(retry_button);
            retry_section.style.display = 'block';
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

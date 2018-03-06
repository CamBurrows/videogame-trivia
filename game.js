//globals
var scorecounter = 0;
var questioncounter = 0;

//array which will be used to select current questions
var qnumberarray = ["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"]



function logger(){
    console.log("scorecounter:" + scorecounter);
    console.log("questioncounter:" + questioncounter);
    console.log("questioncounter:" + questioncounter);
    console.log("-----------------");
}

//object which contains all quiz info and subinfo
var questions = {
   
    "q1": {
        question: "Which of these is a town that has shown up frequently in the Legend of Zelda series from Nintendo?", 
        a: ["Central City", "false"],
        b: ["Iceborough", "false"],
        c: ["Albion", "false"],
        d: ["Kakariko Village", "true"],
        correct: "Kakariko Village",
        correctimageurl: "https://media.giphy.com/media/ctVVFlrOE9Yk/giphy.gif"
    },

    "q2": {
        question: "On the opening screen of this 1996 game, you can squish the forehead, ears, nose, and mouth of the titular character. What game is it?",
        a: ["Super Mario 64", "true"],
        b: ["The Legend of Zelda: Ocarina of Time", "false"],
        c: ["Donkey Kong 64", "false"],
        d: ["Banjo Kazooie", "false"],
        correct: "Super Mario 64",
        correctimageurl: "https://media.giphy.com/media/12xxC4fWDFhpmw/giphy.gif"
    },

    "q3": {
        question: "Which of these consoles has 32 bits?",
        a: ["Nintendo 64", "false"],
        b: ["Super Nintendo Entertainment System", "false"],
        c: ["PlayStation 1", "true"],
        d: ["PlayStation 2", "false"],
        correct: "Playstation 1",
        correctimageurl: "https://media.giphy.com/media/53mmuLPR8QTrq/giphy.gif"
    },

    "q4": {
        question: "Which of these video game characters was the main icon of Sega's Dreamcast console?",
        a: ["Super Mario", "false"],
        b: ["Master Chief", "false"],
        c: ["Megaman", "false"],
        d: ["Sonic the Hedgehog", "true"],
        correct: "Sonic the Hedgehog",
        correctimageurl: "https://media.giphy.com/media/13nN1XlbXhqqTC/giphy.gif"
    },

    "q5": {
        question: "In which of the following games do the likes of Inky and Clyde impede your progress through a succession of mazes?",
        a: ["Pikmin", "false"],
        b: ["Pac-Man", "true"],
        c: ["Tetris", "false"],
        d: ["Lemmings", "false"],
        correct: "Pac-Man",
        correctimageurl: "https://media.giphy.com/media/d9QiBcfzg64Io/giphy.gif"
    },

    "q6": {
        question: "Soon, I will conspire with my fellow residents, Baal, Mephisto, Cain, and Marius to overthrow the demon master. From which game do I hail?",
        a: ["The Elder Scrolls III: Morrowind", "false"],
        b: ["Dungeons and Dragons", "false"],
        c: ["World of Warcraft", "false"],
        d: ["Diablo II", "true"],
        correct: "Diablo II",
        correctimageurl: "https://media.giphy.com/media/3oz8xShPdv0EIdos8g/giphy.gif"
    },

    "q7": {
        question: "Which game, first released for home computer use in 1986, required the player to deliver newspapers, with each day of the week being the next level of play?",
        a: ["Paperboy", "true"],
        b: ["Newspaperman", "false"],
        c: ["Weekly delivery", "false"],
        d: ["Mailman", "false"],
        correct: "Paperboy",
        correctimageurl: "https://media.giphy.com/media/z4toaBLxNLwnS/giphy.gif"
    },

    "q8": {
        question: "Which of these characters had a 'Bad Fur Day' and became 'Live and Reloaded'?",
        a: ["Colliwobble", "false"],
        b: ["Conker", "true"],
        c: ["Cashew", "false"],
        d: ["Crispy", "false"],
        correct: "Conker",
        correctimageurl: "https://media.giphy.com/media/aJE7nth6laFKU/giphy.gif"
    },

    "q9": {
        question: "In which game did Super Mario first appear?",
        a: ["Super Mario Bros", "false"],
        b: ["Mario Party", "false"],
        c: ["Donkey Kong", "true"],
        d: ["Super Mario 64", "false"],
        correct: "Donkey Kong",
        correctimageurl: "https://media.giphy.com/media/V6OKzOfUTs0rC/giphy.gif"
    },

    "q10": {
        question: "In the Mario series, what object typically denotes a 1-Up or an extra life?",
        a: ["Red Cap", "false"],
        b: ["Star", "false"],
        c: ["Red Mushroom", "false"],
        d: ["Green Mushroom", "true"],
        correct: "Green Mushroom",
        correctimageurl: "https://media.giphy.com/media/CSUTYhGy4pHO0/giphy.gif"
    },

}

//function that generates buttons and assigns data
function newquestion(input){

    $(".buttons").empty();
    
    $("#questionLine").text(questions[input].question);
    //change question text
    //create a new button and give it a data-attr either true or false based on object, give it class btn
    var a = $("<button>"+ questions[input].a[0]+"</button>");
    a.attr('data-name', questions[input].a[1]);
    a.attr('class', "btn");
    $(".buttons").append(a);

    var b = $("<button>"+ questions[input].b[0]+"</button>");
    b.attr('data-name', questions[input].b[1]);
    b.attr('class', "btn");
    $(".buttons").append(b);

    var c = $("<button>"+ questions[input].c[0]+"</button>");
    c.attr('data-name', questions[input].c[1]);
    c.attr('class', "btn");
    $(".buttons").append(c);

    var d = $("<button>"+ questions[input].d[0]+"</button>");
    d.attr('data-name', questions[input].d[1]);
    d.attr('class', "btn");
    $(".buttons").append(d);
};



$(document).ready(function(){
    
    newquestion("q1");

    function delayNewQ() {
        var x = setTimeout("newquestion(qnumberarray[questioncounter])", 4000);
    };

    function counterreset(){
        var z = setTimeout(count = 34, 4000);
    };

    var count = 30;

    var counter = setInterval(timer, 1000);

    function timer(){
        count--;
        if (count <= 0){
            clearInterval(counter);
            $(".buttons").empty();
            $(".buttons").append("<img src="+ questions[qnumberarray[questioncounter]].correctimageurl + ">");
            $("#questionLine").text("Time's Up! The correct answer is "+ questions[qnumberarray[questioncounter]].correct);
            questioncounter++;
            delayNewQ();
            counterreset();

        return;
        };
        $("#timer").text(count);
    };
    
    $(document).on("click", ".btn", function(){
        
        if ($(this).attr("data-name")==="true"){
            scorecounter++;
            $(".buttons").empty();
            $(".buttons").append($("<img src="+ questions[qnumberarray[questioncounter]].correctimageurl + ">"));
            $("#questionLine").text("That's Right! It's "+ questions[qnumberarray[questioncounter]].correct);
            questioncounter++;
            logger();
        };
        
        if ($(this).attr("data-name")==="false"){
            $(".buttons").empty();
            $(".buttons").append("<img src="+ questions[qnumberarray[questioncounter]].correctimageurl + ">");
            $("#questionLine").text("That's Wrong! The correct answer is "+ questions[qnumberarray[questioncounter]].correct);
            
            questioncounter++;
            logger();

        };

        delayNewQ();
        counterreset();
    });



});
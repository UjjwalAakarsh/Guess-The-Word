p1_name=localStorage.getItem('player1');
p2_name=localStorage.getItem('player2')
document.getElementById('p1_name').innerHTML=p1_name;
document.getElementById('p2_name').innerHTML=p2_name;
p1_score=0;
p2_score=0;
document.getElementById('p1_score').innerHTML=p1_score;
document.getElementById('p2_score').innerHTML=p2_score;
document.getElementById("q_turn").innerHTML="Question Turn- "+p1_name;
document.getElementById("a_turn").innerHTML="Answer Turn- "+p2_name;

function send(){
    get_word=document.getElementById("word_input").value;
    q_word=get_word.toLowerCase();
    console.log(q_word)

    letter1=q_word.charAt(1);
    console.log(letter1);
    replace1=q_word.replace(letter1," _ ");
    console.log(replace1)
    y=q_word.length-1
    console.log(y);
    letter2=q_word.charAt(y);
    console.log(letter2);
    replace2=replace1.replace(letter2," _ ");
    console.log(replace2)

    x=Math.floor(q_word.length/2);
    letter3=q_word.charAt(x);
    console.log(letter3);
    replace3=replace2.replace(letter3," _ ");
    console.log(replace3);
    q_tag=`<h4 id="word_display">Q. ${replace3}</h4>`
    a_tag=`<input type="text" id="input_check_box"><br>`;
    btn_tag=`<button onclick="check()" class="btn btn-primary">Check</button><br>`
    document.getElementById("output").innerHTML=q_tag+a_tag+btn_tag;
    document.getElementById("word_input").value=""
}
q_turn="P1";
a_turn="P2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if (answer==q_word){
        if (a_turn=="P2"){
            p2_score=p2_score+1;
            document.getElementById('p2_score').innerHTML=p2_score;
        }
        else{
            p1_score=p1_score+1;
            document.getElementById("p1_score").innerHTML=p1_score;
        }
    }
    if(a_turn=="P1"){
        a_turn="P2";
        document.getElementById("a_turn").innerHTML="Answer Turn- "+p2_name;
    }
    else{
        a_turn="P1";
        document.getElementById("a_turn").innerHTML="Answer Turn- "+p1_name;
    }
    if(q_turn=="P2"){
        q_turn="P1";
        document.getElementById("q_turn").innerHTML="Question Turn- "+p1_name;
    }
    else{
        q_turn="P2";
        document.getElementById("q_turn").innerHTML="Question Turn- "+p2_name;
    }
    document.getElementById("output").innerHTML=""
}

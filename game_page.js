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
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    correct_answer=n1*n2;
    console.log(correct_answer)

    q_tag=`<h4 id="word_display">Q. ${n1} x ${n2}</h4>`
    a_tag=`<input type="number" id="input_check_box"><br>`;
    btn_tag=`<button onclick="check()" class="btn btn-primary">Check</button><br>`
    document.getElementById("output").innerHTML=q_tag+a_tag+btn_tag;
    document.getElementById("n1").value="";
    document.getElementById("n2").value=""
}
q_turn="P1";
a_turn="P2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if (answer==correct_answer){
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

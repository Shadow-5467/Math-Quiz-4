player1 = localStorage.getItem("Player1");
player2 = localStorage.getItem("Player2");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1 + " : "; 
document.getElementById("player2_name").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1score ;  
document.getElementById("player2_score").innerHTML = player2score ;  

document.getElementById("player_question").innerHTML = "questionturn - " + player1 ;
document.getElementById("player_question").innerHTML = "questionturn - " + player2 ; 

question_turn = "player1";
answer_turn = "player2"

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player_score = player1_score +1;
            document.getElementById("player1_score").innerHtml = update_player1_score;
        }
        else
        {
            update_player2_score = player2score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHtml = "Question Turn - " + player2_name ;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
}
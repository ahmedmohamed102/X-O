let turn = "x";
let itme = document.querySelector(".itme");

let squares = [];

function end(num1 , num2 ,num3){
    itme.innerHTML=`${squares[num1]}.Wenner`
    document.getElementById('itme'+num1).style.background="#000"
    document.getElementById('itme'+num2).style.background="#000"
    document.getElementById('itme'+num3).style.background="#000"

    setInterval(function(){itme.innerHTML+="."},1000)
    setTimeout(() => {
        location.reload()
    }, 4000);
}

function wenner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("itme" + i).innerHTML;
  }

  if (squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != "") {
    end(1,2,3)
  }

  else if (squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != "") {
        end(4,5,6)
  }

  else if (squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != "") {
        end(7,8,9)
  }

  else if (squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != "") {
        end(1,4,7)
  }

  else if (squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != "") {
        end(2,5,8)
  }

  else if (squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != "") {
        end(3,6,9)
  }

  else if (squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != "") {
        end(1,5,9)
  }

  else if (squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != "") {
        end(3,5,7)
  }
}

function game(id) {
  let elment = document.getElementById(id);
  if (turn === "x" && elment.innerHTML == "") {
    elment.innerHTML = "X ";
    elment.style.color='rgb(0, 255, 234)'
    turn = "o";
    itme.innerHTML = "O";
    itme.style.color='rgb(180, 0, 156)'
  } else if (turn === "o" && elment.innerHTML == "") {
    elment.innerHTML = "O ";
    elment.style.color='rgb(180, 0, 156)'

    turn = "x";
    itme.innerHTML = "X";
    itme.style.color='rgb(0, 255, 234)'
  }
  wenner();
}

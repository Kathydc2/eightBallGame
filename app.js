//Question//
let question = document.getElementById("question");

const usePrompt = () => {

    let userInput = prompt("Ask your question");
    console.log(userInput);
    question.append(userInput);
    setTimeout(function() {document.getElementById('question').innerHTML='';},5000)
    //alert(random);
    document.getElementById("question").innerText=random;
}

//Answer//
function getAnswer()
{
    let myarray= new Array("Yes","No","Maybe","Try again Later","It is certain","It is decidedly so","Without a doubt","Most likely","Reply hazy,try again","Don't count on it","My sources say no","Outlook not so good","Very doubtful");
    let random = myarray[Math.floor(Math.random() * myarray.length)];
    setTimeout(function() {document.getElementById('answer').innerHTML='';},5000)
    //alert(random);
    document.getElementById("answer").innerText=random;
}



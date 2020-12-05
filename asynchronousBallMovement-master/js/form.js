class Form
{
constructor()
{

}
display(){
    var title = createElement('h2')
    title.html("CAR RACING GAME")
    title.position(450,100)
    var input=createInput("name")
    input.position(450,260)
    var button=createButton("Play")
    button.position(450,300);
    var greeting=createElement('h3');
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount);
        greeting.html("WELCOME  "+name)
        greeting.position(500,300)
    })
}

}
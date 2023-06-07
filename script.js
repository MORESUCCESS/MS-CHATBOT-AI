function sendMessage(){
    var message =document.getElementById("message").value;
    document.getElementById("message").value="";
    var usermessage="<div class='user-message' style=' padding: 5px 20px;; background:darkslategrey;box-shadow:0px 0px 10px rgba(224,225,16,0.3); border-radius:20px; margin-top:1em; float: right;width:80%;font-size: 20px;color:#fff; '><br><span style='color:yellow'>You:</span> <br>"+ message +"</div>";
    document.getElementById("chatting").innerHTML += usermessage;

    var chatbotmessage ="<div class='bot-message' style=' padding: 5px 20px;border:0px;box-shadow:0px 0px 10px rgba(224,225,16,0.3);border-radius:20px; margin-top:8em; width:80%;font-size: 20px;background:#2a2a2a; color:#fff;'><br><span style='color:yellow'>MS Chatbot AI:</span><br>"+ motivaionalResponse(usermessage)+"</div>";
    document.getElementById("chatting").innerHTML += chatbotmessage;
}
// function to get the motivational message
function motivaionalResponse(text){
    if(containkeyword(text, ["sad", "down", "broken", "depressed", "unhappy", "heartbroken", "not happy"])){
        return "The toughest and hardest time comes when things are about to get better, always remember that tough time don't last, but tough people do, stay strong and keep pushing forward!.There is a sacredness in tears. They are not the mark of weakness, but of power. They speak more eloquently than ten thousand tongues. They are the messengers of overwhelming grief, of deep contrition, and of unspeakable love.";
    }
    else if(containkeyword(text, ["stressed", "overwhelmed", "pressure", "anxious"])){
        return "Take a deep breadth and remind yourself that you're capable of handling anything that comes your way. Stay positive";
    }
    else if(containkeyword(text, ["failure", "mistake", "defeat", "frightened"])){
        return "Don't be afraid of failure. It's just a stepping stone to success. Learn from your mistakes and keep going!";
    }
    else if(containkeyword(text, ["your name"])){
        return "My name is MS Chatbot, I am a motivational Speaker, kindly let me know how you feel so that I can motivate you.";
    }
    else if(containkeyword(text, ["whats up", "how are you"])){
        return "Yo!, I'm good let me know the way you feel and let me motivate you.";
    }
    else if(containkeyword(text, ["thank you", "thanks"])){
        return "You're welcome!, I am glad you're motivated!.";
    }
    else if(containkeyword(text, ["i need motivation", "i need motivation words", "please motivate me", "motivate me", "can you motivate me"])){
        return "Let me know the exact way you really feel, and let me motivate you";
    }
    else if(containkeyword(text, ["why do people doubt me", "doubt me", "people are limiting me", "i am limited by people", "people limits me"])){
        return "if people are doubting how far you can go, go as far as you can that you can't hear them anymore.";
    }
    else if(containkeyword(text, ["hi", "hello","hey"])){
        return "Hi, whats up? kindly let me know the way you feel and let me motivate you!";
    }
    else if(containkeyword(text, ["write a program", "java","code", "write a code"])){
        return "I'm Sorry, as an AI, I can't write a program or code, I can only motivate you.";
    }
    else if(containkeyword(text, ["okay", "ok","alright"])){
        return "Yeah!";
    }
    else if(containkeyword(text, ["procastination", "not doing things on time","delay in everything"])){
        return "My advice is to never do tomorrow what you can do today. Procrastination is the thief of time!, do not delay or postpone what you are supposed to do at the right time.";
    }
    else if(containkeyword(text, ["inspirational quote", "inspirational"])){
        return "Try not to become a man of success, but rather become a man of value, and Focus on being productive instead of busy.";
    }
    else if(containkeyword(text, ["get hurt", "feel disappointed", "disappointed","hurt"])){
        return "As long as the world still exist people will always remain unbelievable, unpredictable, and always full of weird doings!. If you always get worried about what people will say, you will remain unhappy, just stay positive and be your real self";
    }
    else if(containkeyword(text, ["you are crazy,","you are crazy","you are mad,", "you are mad", "mad","crazy", "idiot", "bitch", "are you mad","are you crazy","bastard"])){
        return "I am deeply sorry if I made you angry &#128116; kindly let understand the way you really feel and let me motivate you!";
    }
    else if(containkeyword(text, ["who made you","developed you","created you","made you","developed you"])){
        return "More Success &#128119;, was the one who developed me.";
    }
    else if(containkeyword(text, ["I am good","I'm good","fine","I am okay","Alright"])){
        return "Ohk";
    }
    else{
        return "Sorry  I don't really understand the way you feel or what you are trying to say, kindly let me know the way you actually feel!";
    }
}
//function to check if user input contain any of the given words
function containkeyword(input, keywords){
    input = input.toLowerCase();
    for(var i=0; i<keywords.length; i++){
        if(input.includes(keywords[i])){
            return true;
        }
    }
    return false;
}

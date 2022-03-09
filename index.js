 var word = document.getElementById("word")
        var definition = document.getElementById("definition")
        var pronunciation = document.getElementById("pronunciation")
        var time = document.getElementById("time")
        var img = document.getElementById("img")
        var reset = document.getElementById("reset")

//         let speech = new SpeechSynthesisUtterance();

//        speech.lang = "en-US";
 //        speech.text = pronunciation.value;
//         speech.volume = 1;
//         speech.rate = 1;
//         speech.pitch = 1;                


       function speak(){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(pronunciation.value));
           // window.speechSynthesis.speak();

         }

        async function getWord() {
            try {
                let res = await fetch("https://random-words-api.vercel.app/word/");
                var result = await res.json();
               
                word.innerHTML = result[0].word
                pronunciation.innerHTML = result[0].pronunciation
                definition.innerHTML = result[0].definition
                img.src = "https://avatars.dicebear.com/api/identicon/"+result[0].word+".svg"
                time.innerHTML = new Date().toLocaleString();
                
            }catch (error) {    
                console.log(error);
            }
        }
        getWord();

        reset.addEventListener('click',()=>{
            getWord();
        })

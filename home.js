
     const playButton=document.getElementById('playbutton');
     const pauseButton=document.getElementById('pausebutton');
     const stopButton=document.getElementById('stopbutton');
     const textInput=document.getElementById('text');

        playButton.addEventListener('click' , playText(textInput));
        pauseButton.addEventListener('click' , pauseText());
        stopButton.addEventListener('click' , stopText());
       
    function playText(){
      const utterance=new SpeechSynthesisUtterance(textInput.value);
        speechSynthesis.speak(utterance);   
      }
    function pauseText() {
            if (speechSynthesis.speaking) speechSynthesis.pause();
      }
    function stopText() {
            speechSynthesis.resume();
              speechSynthesis.cancel();
        }



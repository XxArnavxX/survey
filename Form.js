class Form{
    constructor(){
        this.greeting = createElement('h2');
        this.text = createElement('h1', "welcome to the survery for new ideas of school");
        this.question1 = createElement('h3', "do you want quarantine to end?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('no');
        this.question2 = createElement('h3', "Do you think quarantine will end in may-june?");
        this.radio = createRadio('h4');
        this.radio.option('yes');
        this.radio.option('no');
        this.question3 = createElement('h3', "does quarantine affect your social life");
        this.radio = createRadio('h5');
        this.radio.option('yes');
        this.radio.option('no');
        this.question4 = createElement('h3', "does quarantine affect you?");
        this.radio = createRadio('h6');
        this.radio.option('yes');
        this.radio.option('no');
        this.question5 = createElement('h3', "does quarantine make your grades worse?");
        this.radio = createRadio('h7');
        this.radio.option('yes');
        this.radio.option('no');
    }

    display(){
        this.greeting.position(200, 20);
        this.text.postion(200, 40);
        this.question1.position(200, 60);
    }
}
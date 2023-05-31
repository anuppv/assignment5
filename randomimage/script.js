function getRandomImage() {
    var randomImage = new Array();
        
    randomImage[0] = "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";
    randomImage[1] = "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg";
    randomImage[2] = "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg";
    randomImage[3] = "https://images.unsplash.com/photo-1684174534027-21968a4479f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    randomImage[4] = "https://images.unsplash.com/photo-1684409915983-0a199e350a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
    randomImage[5] = "https://images.unsplash.com/photo-1634616195757-66d5e402058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
        
    var rndimg = Math.floor(Math.random()*randomImage.length); 
    return document.getElementById("image_random").innerHTML = '<img src="'+randomImage[rndimg]+'" />';
}
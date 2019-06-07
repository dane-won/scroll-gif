
(function(){
    const outputElem = document.querySelector('.output');
    const jihyoElem = document.querySelector('.char');
    
    const sect2title = document.querySelector('.sect2title');
    const sanaElem = document.querySelector('.sana');

    let num = 0;

    function showValue() {
        let posY = jihyoElem.getBoundingClientRect().bottom;
        outputElem.innerHTML = posY;

        // 여기 스크롤 기준점들은 어떻게 동적으로 만들지? // 

        if(posY>2900) {
            sanaElem.style.background = "url('img/sana-01.png') center center no-repeat fixed";
        }else if(posY>2800) {
            sanaElem.style.background = "url('img/sana-02.png') center center no-repeat fixed";
        }else if(posY>2700) {
            sanaElem.style.background = "url('img/sana-03.png') center center no-repeat fixed";
        }else if(posY>2600) {
            sanaElem.style.background = "url('img/sana-04.png') center center no-repeat fixed";
        }else if(posY>2500) {
            sanaElem.style.background = "url('img/sana-05.png') center center no-repeat fixed";
        }else if(posY>2400) {
            sanaElem.style.background = "url('img/sana-06.png') center center no-repeat fixed";
        }else if(posY>2300) {
            sanaElem.style.background = "url('img/sana-07.png') center center no-repeat fixed";
        }else if(posY>2200) {
            sanaElem.style.background = "url('img/sana-08.png') center center no-repeat fixed";
        }else if(posY>2100) {
            sanaElem.style.background = "url('img/sana-09.png') center center no-repeat fixed";
        }else if(posY>2000) {
            sanaElem.style.background = "url('img/sana-10.png') center center no-repeat fixed";
        }else if(posY>1900) {
            sanaElem.style.background = "url('img/sana-11.png') center center no-repeat fixed";
        }else if(posY>1800) {
            sanaElem.style.background = "url('img/sana-12.png') center center no-repeat fixed";
        }else{
            sect2title.style = "";
        }
        
        // sanaElem.style.backgroundSize = "70% 70%";
        
        
    }

    window.addEventListener('scroll',function(){
        showValue();
    });

    showValue();
})();
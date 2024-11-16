class SliderController
{
    slider;
    framestrack;
    slides = [];
    timeInterval = 4000;
    timeIntervalId;
    currentSlideIndex = -1;
    slideDirection = 1; //-1 1

    constructor()
    {
        this.slider = document.querySelector('.slider');
        this.framestrack = document.querySelector('.framestrack');
        this.slides = [...document.querySelectorAll('.slide')];
    }

    moveSlideTo(slideIndex)
    {
        if( this.timeIntervalId )
        {
            clearTimeout(this.timeIntervalId);
        }

        this.currentSlideIndex = slideIndex;
        this.framestrack.style.left = `-$(this.currentSlideIndex*100)vw`;
        this.tick();{}
    }

    tick()
    {
        this.timeIntervalId = setTimeout
        (
            ()=>{
                if( this.currentSlideIndex + this.slideDirection >= this.slides.length)
            }, this.timeInterval
        );
    }
}
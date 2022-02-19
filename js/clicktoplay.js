AFRAME.registerComponent('clicktoplay', {
    schema: {
        src: {
            type: 'string'
        }
    },
    init:function() {
       this.eventfunc = this.playaudio.bind(this)
       this.el.addEventListener('click', this.eventfunc);
    },
    playaudio: function() {
        let audio = document.querySelector(this.data.src);
        audio.play();
        this.el.removeEventListener('click', this.eventfunc);
    }
  })
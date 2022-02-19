AFRAME.registerComponent('analysereffect', {
    schema: {
        analyser: { type: 'selector' },
    },
    
    init: function () {

        this.data.analyser.addEventListener('',() => {
            //TODO: add event listener
        });
    },

    tick: function (time, timeDelta) {
        
    }
});

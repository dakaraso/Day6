AFRAME.registerComponent('generatefloor', {
    // for pool obj container
    schema: {
        pool: {
            type: 'string'
        },
        zoffset: {
            default: 0
        }
    },

    init: function () {
        this.start = false;

        this.el.sceneEl.addEventListener('start', ()=>{
            //generate floor
            this.gen();

            //set start
            this.start = true;
        });
    },

    tick: function (time, timeDelta) {
        
        //count on start
        if (this.start) {
            this.oldTime = time;
            this.start = false;
        }

        //TODO: check if time passsss
        if (true) {
            //TODO: change position here



        }
    },

    gen: function() {

        let planepool = this.el.sceneEl.components.pool__plane;
        // or
        // let planepool = this.el.sceneEl.components['pool__plane'];

        for(let i=0; i<30; i++){
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
        }
    }
});

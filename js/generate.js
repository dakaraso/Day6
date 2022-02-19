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

    //每個frame固定持續呼叫 time: 目前時間 timeDelta: 每個frame的時間差
    tick: function (time, timeDelta) {
        
        // console.log(time);
        // console.log(timeDelta);

        //count on start
        if (this.start) {
            this.startTime = time;
            this.start = false;
        }

        //TODO: check if time passsss
        if (time - this.startTime>300) {
            //TODO: change position here

            //移動地板位置
            let pos = this.el.getAttribute('position');
            // console.log(pos);
            pos.z+=1 *timeDelta/1000;

            if(pos.z>=20){
                pos.z=0;
            }

        }
    },

    gen: function() {

        let planepool = this.el.sceneEl.components.pool__plane;
        // or
        // let planepool = this.el.sceneEl.components['pool__plane'];

        for(let i=0; i<200; i++){
            setTimeout(()=>{
                let el = planepool.requestEntity();
                el.setAttribute('position', '0 0 '+(i*-1));
                el.play();
            }, i*200);
        }
    }
});

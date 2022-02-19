AFRAME.registerComponent('analysereffect', {
    schema: {
        analyser: { type: 'selector' },
    },

    init: function () {

        let maincam = document.getElementById('maincam');
        let secondcam = document.getElementById('secondcam');

        this.data.analyser.addEventListener('audioanalyser-beat-high', () => {
            //TODO: add event listener
            console.log('high-beat!!!!!');



            let rotx = Math.random() * (-90);
            let roty = Math.random() * 90 -45;

            secondcam.setAttribute('rotation',{
                x: rotx,
                y: roty,
                z:0
            });

            maincam.setAttribute('camara','active', false);
            secondcam.setAttribute('camara','active', true);

            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let color = `rgb(${r},${g},${b})`;

            this.el.setAttribute('color', color);

            //1000毫秒後切換回來
            setTimeout(()=>{
                maincam.setAttribute('camara','active', true);
                secondcam.setAttribute('camara','active', false);

                this.el.setAttribute('color', 'white');
            },1000);
        });
    },

    tick: function (time, timeDelta) {
        let analyser = this.data.analyser;
        let analysercomp = analyser.components.audioanalyser;

        //等analysercomp生成
        if (analysercomp) {
            //抓到音量
            let volume = analysercomp.volume;
            // console.log(volume);
            //用音量去調整環境光大小
            this.el.setAttribute('intensity',volume/100);
        }
    }
});

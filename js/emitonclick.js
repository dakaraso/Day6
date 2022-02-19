AFRAME.registerComponent('emitonclick', {
    schema: {
        event: {
            type: 'string',
            default: 'start'
        }
    },
    // for start box
    events: {
        click: function() {
            //emit
            this.el.emit(this.data.event);

            //cancel interaction
            this.el.removeAttribute('class');

            //TODO: add audio analyser component to analyser element
        }
    }
});
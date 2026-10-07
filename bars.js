/* Start - own code */

// New visualisation
// scrolling bar chart - shows recent energy levels
function Bars(){
    this.name = "Bars";

    // stores past energy values to draw the scrolling history
    var history = [];
    // width of each bar in pixels
    var barWidth = 8; 

    this.draw = function(){
        push();
        noStroke();

        var spectrum = fourier.analyze();
        var bass = fourier.getEnergy('bass');
        var treble = fourier.getEnergy('treble');
        var energy = (bass + treble) / 2;

        // add the latest energy value to the history array
        history.push(energy);

        var maxBars = ceil(width / barWidth) + 1;
        if(history.length > maxBars){
            history.shift();
        }

        // draw each bar, newest on the right
        for(var i = 0; i < history.length; i++){
            var e = history[i];
            var barHeight = map(e, 50, 255, 5, height/4);

            var r = map(e, 0, 255, 100, 255);
            var g = map(e, 0, 255, 0, 255);
            var b = 200;
            fill(r, g, b);

            var x = width - (history.length - i) * barWidth;
            rect(x, height/2 - barHeight, barWidth - 2, barHeight * 2);
        }
        pop();
    };
}

/* End - own code */
/* Start - own code */

function Ellipsoid(){
    this.name = "Ellipsoid";
    this.pg = createGraphics(windowWidth, windowHeight, WEBGL); //Graphics buffer


    this.draw = function() {
        var spectrum = fourier.analyze();
        var bass = fourier.getEnergy('bass');
        var treble = fourier.getEnergy('treble');

        var baseRadius = min(width, height) * 0.3;
        var radiusRange = min(width, height) * 0.15;
        
        var radius1 = baseRadius + floor(map(bass, 0, 255, -radiusRange, radiusRange));
        var radius2 = baseRadius + floor(map(bass, 0, 255, -radiusRange, radiusRange)*0.7);
        var radius3 = baseRadius + floor(map(bass, 0, 255, -radiusRange, radiusRange)*1.3);
        
        var baseDetail = 4;
        var detailRange = 20;

        var detail = baseDetail + round(map(treble, 0, 255, 4, detailRange)*0.5);

        this.pg.clear(); //clears 3D layers background every frame

        //lightning
        this.pg.ambientLight(10);
        this.pg.directionalLight(205, 205, 5, 10, 10, -1);

        this.pg.push();

        //rotation
        this.pg.rotateY(millis() * 0.0008);
        this.pg.rotateX(millis() * 0.0004);

        this.pg.strokeWeight(1);

        this.pg.ambientMaterial(125, 22, 155);

        this.pg.ellipsoid(radius1, radius2, radius3, detail, detail);
        this.pg.pop();

        push();
        imageMode(CENTER);
        image(this.pg, width/2, height/2);
        pop();
    };


    this.onResize = function() {
        if (this.pg) {
            this.pg.remove(); //remove old graphics buffer
        }
        this.pg = createGraphics(width, height, WEBGL); //rebuild at correct size
    }
}

/* End - own code */
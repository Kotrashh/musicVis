/* Start - own code */

//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
	this.menuDisplayed = false;
	
	this.menuAlpha = 0;
	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	this.toggleX = 20;
	this.toggleY = 60;

	this.itemBounds = [];

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		if(this.playbackButton.hitCheck()){
			return;
		}
		if(this.toggleHitCheck()){
			return;
		}
		if(this.menuDisplayed && this.menuHitCheck()){
			return;
		}

		var fs = fullscreen();
		fullscreen(!fs);
	};
	//open-close menu
	this.toggleHitCheck = function(){
		if(mouseX > this.toggleX && mouseX < this.toggleX + 100 && mouseY > this.toggleY - 20 && mouseY < this.toggleY + 6){
			this.menuDisplayed = !this.menuDisplayed;
			return true;
		}
		return false;
	}

	//menu hit check
	this.menuHitCheck = function(){
		for(var i = 0; i < this.itemBounds.length; i++){
			var b = this.itemBounds[i];
			if(mouseX > b.x && mouseX < b.x + b.w && mouseY > b.y && mouseY < b.y+b.h){
				vis.selectVisual(vis.visuals[i].name);
				this.menuDisplayed = false;
				return true;
			}
		}
		return false;
	}

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();

		var targetAlpha;
		if(this.menuDisplayed){
			targetAlpha = 255;
		}else{
			targetAlpha = 0;
		}
		this.menuAlpha = this.menuAlpha + (targetAlpha - this.menuAlpha)*0.15;

		//playback button 
		this.playbackButton.draw();

		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(20);
		text("Menu", this.toggleX, this.toggleY);

		//only draw the menu if menu displayed is set to true.
		if(this.menuAlpha > 1){
			this.menu();
		}	
		pop();

	};

	//clickable list of visualisation
	this.menu = function(){
		this.itemBounds = [];
		//draw out menu items for each visualisation
		for(var i = 0; i < vis.visuals.length; i++){
			var yLoc = this.toggleY + 35 + i*32;
			var isSelected = (vis.visuals[i] === vis.selectedVisual);

			if(isSelected){
				fill(0, 255, 200, this.menuAlpha)
			}else{
				fill(255, this.menuAlpha)
			}

			noStroke();
			textSize(18);
			text(vis.visuals[i].name, this.toggleX, yLoc);

			this.itemBounds.push({ x: this.toggleX - 4, y: yLoc - 18, w: 160, h: 26 });
		}
	};
}

/* End - own code */

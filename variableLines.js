mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;

var width = 0;
var height = 0;

var myLines = 1;

mgraphics.redraw();

function bang()
{
	mgraphics.redraw();
}

function numLines(v)
{
	myLines = v;
	if (myLines < 1)
		myLines = 1;
		
	mgraphics.redraw();
}

function paint()
{
	// calculate the current width and height
	width = (box.rect[2] - box.rect[0]);
	height = (box.rect[3] - box.rect[1]);
	
	var myPoint;
	var pushAmt;
	var isVert = 0;
	
	with (mgraphics) {
		move_to(Math.random() * width, Math.random() * height);

		set_line_width((Math.random() * 10) + 1);	

		for (i=0; i<myLines; i++) {
			myPoint = get_current_point();	
			pushAmt = (Math.random() * 100) - 50;
			
			if (isVert) {
				if ((myPoint[1] + pushAmt) < 0) {
					pushAmt = pushAmt * -1.0;
				} else if ((myPoint[1] + pushAmt) > height) {
					pushAmt = pushAmt * -1.0;
				}
				
				rel_line_to(0, pushAmt);
				
				isVert = 0;
			} else {
				if ((myPoint[0] + pushAmt) < 0) {
					pushAmt = pushAmt * -1.0;
				} else if ((myPoint[0] + pushAmt) > width) {
					pushAmt = pushAmt * -1.0;
				}
				
				rel_line_to(pushAmt, 0);
				isVert = 1;
			}
		}
			
		stroke();
	}
}
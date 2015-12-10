var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;

var GUI;
var menu;
var exitUI;

var VERSION = "v1.9";
var NAME = "HackPE";
var DEVELOPERS = "AllMCPE";

var MARK = " ";
var split = " ";

var defaultDestroyTime = [
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 
0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 
0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 
3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, 
null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, 
null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, 
null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, 
null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, 
null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 
2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 
5, null, null, null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];

var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;
var falling = 0;
var next = 0;
var px, py, pz, lx, ly, lz, vel, saver;
var cd = 0;
var s = 0;
var Xdiff;
var Zdiff;
var Xpos;
var Zpos;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var Entities = [];
var counter = 0;

var speedminech = false;
var speedmine;

var godmodech = false;
var godmode;

var fovch = false;
var fov;

var flightch = false;
var flight;

var onlydaych = false;
var onlyday;
var thisday = false;

var fastregench = false;
var fastregen;
var superregen = false;

var instakillch = false;
var instakill;
var instakilled = false;

var saddleupch = false;
var saddleup;
var saddle = false;

var knockbackch = false;
var knockback;
var knockbacks = false;

var tapspamch = false;
var tapspam;
var spammer = false;

var jetpackch = false;
var jetpack;
var jetpacked = false;

var nofallch = false;
var nofall;
var nofalls = false;

var nukerch = false;
var nuker;
var nukers = false;

var cbuildch = false;
var cbuild;
var cbuilder = false;

var speedch = false;
var speed;
var speeded = false;

var stackdrch = false;
var stackdr;
var stacked = false;

var highjumpch = false;
var highjump;
var highjumps = false;

var brightch = false;
var bright;

var coordch = false;
var coord;
var coords = false;

var derpch = false;
var derp;
var derps = false;

var killch = false;
var kill;
var killaura = false;

var gmspeedch = false;
var gmspeed;

var invplacech = false;
var invplace;

var jesusch = false;
var jesus;
var waterwalk = false;

var nowallch = false;
var nowall;
var nowalls = false;

var invscrch = false;
var invscr;

var effectch = false;
var effect;
var effects = false;

var passwordch = false;
var password;

function dip2px(dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){
	clientMessage("\n" + ChatColor.GREEN + "Your hack by AllMCPE.");
	ModPE.showTipMessage(NAME + " Release " + VERSION);
}

ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuBtn = new Button(ctx);
      menuBtn.setText('>[HACK]<');
		menuBtn.setTextColor(Color.WHITE);
		menuBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
				mainMenu();
				exit();
			}
		}));
		layout.addView(menuBtn);
		
		GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUI.setBackgroundDrawable(new ColorDrawable(Color.BLUE));
		GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 160, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
 
	  
function mainMenu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var menuLayout = new LinearLayout(ctx);
			var menuScroll = new ScrollView(ctx);
			var menuLayout1 = new LinearLayout(ctx);
			menuLayout.setOrientation(1);
			menuLayout1.setOrientation(1);
			menuScroll.addView(menuLayout);
			menuLayout1.addView(menuScroll);
			
			var name = new TextView(ctx);
			name.setTextSize(20);
			name.setText(NAME + split + VERSION + MARK);
			name.setTextColor(Color.RED);
			name.setGravity(Gravity.CENTER);
			menuLayout.addView(name);
			
			var creative = new Button(ctx);
			creative.setText("Creative Mode");
			creative.setTextColor(Color.GREEN);
			creative.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					Level.setGameMode(1);
                    Server.sendChat("/gamemode 1")
				}
			}));
			menuLayout.addView(creative);
			
			var survival = new Button(ctx);
			survival.setText("Survival Mode");
			survival.setTextColor(Color.GREEN);
			survival.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					Level.setGameMode(0);
                    Server.sendChat("/gamemode 0")
				}
			}));
			menuLayout.addView(survival);
			
			speedmine = new CheckBox(ctx);
			speedmine.setText("Mine Hack");
			speedmine.setTextColor(Color.BLUE);
			speedmine.setChecked(speedminech);
			speedmine.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!speedminech){
						speedminech = true;
						speedmine.setTextColor(Color.CYAN);
						instaDestroy();
					}else{
						speedminech = false;
						speedmine.setTextColor(Color.BLUE);
						defaultDestroy();
					}
					speedmine.setChecked(speedminech);
				}
			}));
			menuLayout.addView(speedmine);
			
			if(speedminech) {
				speedmine.setTextColor(Color.CYAN);
			}
			
			godmode = new CheckBox(ctx);
			godmode.setText("God Hack");
			godmode.setTextColor(Color.BLUE);
			godmode.setChecked(godmodech);
			godmode.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!godmodech){
						godmodech = true;
						godmode.setTextColor(Color.CYAN);
						Player.setHealth(30000);
					}else{
						godmodech = false;
						godmode.setTextColor(Color.BLUE);
						Player.setHealth(20);
					}
					godmode.setChecked(godmodech);
				}
			}));
			menuLayout.addView(godmode);
			
			if(godmodech) {
				godmode.setTextColor(Color.CYAN);
			}
			
			fov = new CheckBox(ctx);
			fov.setText("FOV Hack");
			fov.setTextColor(Color.BLUE);
			fov.setChecked(fovch);
			fov.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!fovch){
						fovch = true;
						fov.setTextColor(Color.CYAN);
						ModPE.setFov(120);
					}else{
						fovch = false;
						fov.setTextColor(Color.BLUE);
						ModPE.resetFov();
					}
					fov.setChecked(fovch);
				}
			}));
			menuLayout.addView(fov);
			
			if(fovch) {
				fov.setTextColor(Color.CYAN);
			}
			
			flight = new CheckBox(ctx);
			flight.setText("Fly Hack");
			flight.setTextColor(Color.BLUE);
			flight.setChecked(flightch);
			flight.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!flightch){
						flightch = true;
						flight.setTextColor(Color.CYAN);
						Player.setCanFly(true);
					}else{
						flightch = false;
						flight.setTextColor(Color.BLUE);
						Player.setCanFly(false);
					}
					flight.setChecked(flightch);
				}
			}));
			menuLayout.addView(flight);
			
			if(flightch) {
				flight.setTextColor(Color.CYAN);
			}
			
			onlyday = new CheckBox(ctx);
			onlyday.setText("Day Hack");
			onlyday.setTextColor(Color.BLUE);
			onlyday.setChecked(onlydaych);
			onlyday.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!onlydaych){
						onlydaych = true;
						onlyday.setTextColor(Color.CYAN);
						thisday = true;
					}else{
						onlydaych = false;
						onlyday.setTextColor(Color.BLUE);
						thisday = false;
					}
					onlyday.setChecked(onlydaych);
				}
			}));
			menuLayout.addView(onlyday);
			
			if(onlydaych) {
				onlyday.setTextColor(Color.CYAN);
			}
			
			fastregen = new CheckBox(ctx);
			fastregen.setText("Regen Hack");
			fastregen.setTextColor(Color.BLUE);
			fastregen.setChecked(fastregench);
			fastregen.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!fastregench){
						fastregench = true;
						fastregen.setTextColor(Color.CYAN);
						superregen = true;
					}else{
						fastregench = false;
						fastregen.setTextColor(Color.BLUE);
						superregen = false;
					}
					fastregen.setChecked(fastregench);
				}
			}));
			menuLayout.addView(fastregen);
			
			if(fastregench) {
				fastregen.setTextColor(Color.CYAN);
			}
			
			instakill = new CheckBox(ctx);
			instakill.setText("Instant Kill Hack");
			instakill.setTextColor(Color.BLUE);
			instakill.setChecked(instakillch);
			instakill.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!instakillch){
						instakillch = true;
						instakill.setTextColor(Color.CYAN);
						instakilled = true;
					}else{
						instakillch = false;
						instakill.setTextColor(Color.BLUE);
						instakilled = false;
					}
					instakill.setChecked(instakillch);
				}
			}));
			menuLayout.addView(instakill);
			
			if(instakillch) {
				instakill.setTextColor(Color.CYAN);
			}
			
			saddleup = new CheckBox(ctx);
			saddleup.setText("Ride Entities");
			saddleup.setTextColor(Color.BLUE);
			saddleup.setChecked(saddleupch);
			saddleup.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!saddleupch){
						saddleupch = true;
						saddleup.setTextColor(Color.CYAN);
						saddle = true;
					}else{
						saddleupch = false;
						saddleup.setTextColor(Color.BLUE);
						saddle = false;
					}
					saddleup.setChecked(saddleupch);
				}
			}));
			menuLayout.addView(saddleup);
			
			if(saddleupch) {
				saddleup.setTextColor(Color.CYAN);
			}
			
			knockback = new CheckBox(ctx);
			knockback.setText("Knockback Hack");
			knockback.setTextColor(Color.BLUE);
			knockback.setChecked(knockbackch);
			knockback.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!knockbackch){
						knockbackch = true;
						knockback.setTextColor(Color.CYAN);
						knockbacks = true;
					}else{
						knockbackch = false;
						knockback.setTextColor(Color.BLUE);
						knockbacks = false;
					}
					knockback.setChecked(knockbackch);
				}
			}));
			menuLayout.addView(knockback);
			
			if(knockbackch) {
				knockback.setTextColor(Color.CYAN);
			}
			
			tapspam = new CheckBox(ctx);
			tapspam.setText("TapSpam");
			tapspam.setTextColor(Color.BLUE);
			tapspam.setChecked(tapspamch);
			tapspam.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!tapspamch){
						tapspamch = true;
						tapspam.setTextColor(Color.CYAN);
						spammer = true;
					}else{
						tapspamch = false;
						tapspam.setTextColor(Color.BLUE);
						spammer = false;
					}
					tapspam.setChecked(tapspamch);
				}
			}));
			menuLayout.addView(tapspam);
			
			if(tapspamch) {
				tapspam.setTextColor(Color.CYAN);
			}
			
			jetpack = new CheckBox(ctx);
			jetpack.setText("Jetpack Hack");
			jetpack.setTextColor(Color.BLUE);
			jetpack.setChecked(jetpackch);
			jetpack.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!jetpackch){
						jetpackch = true;
						jetpack.setTextColor(Color.CYAN);
						jetpacked = true;
					}else{
						jetpackch = false;
						jetpack.setTextColor(Color.BLUE);
						jetpacked = false;
					}
					jetpack.setChecked(jetpackch);
				}
			}));
			menuLayout.addView(jetpack);
			
			if(jetpackch) {
				jetpack.setTextColor(Color.CYAN);
			}
			
			nofall = new CheckBox(ctx);
			nofall.setText("Slow Fall");
			nofall.setTextColor(Color.BLUE);
			nofall.setChecked(nofallch);
			nofall.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!nofallch){
						nofallch = true;
						nofall.setTextColor(Color.CYAN);
						nofalls = true;
					}else{
						nofallch = false;
						nofall.setTextColor(Color.BLUE);
						nofalls = false;
					}
					nofall.setChecked(nofallch);
				}
			}));
			menuLayout.addView(nofall);
			
			if(nofallch) {
				nofall.setTextColor(Color.CYAN);
			}
			
			nuker = new CheckBox(ctx);
			nuker.setText("NUKE");
			nuker.setTextColor(Color.BLUE);
			nuker.setChecked(nukerch);
			nuker.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!nukerch){
						nukerch = true;
						nuker.setTextColor(Color.CYAN);
						nukers = true;
					}else{
						nukerch = false;
						nuker.setTextColor(Color.BLUE);
						nukers = false;
					}
					nuker.setChecked(nukerch);
				}
			}));
			menuLayout.addView(nuker);
			
			if(nukerch) {
				nuker.setTextColor(Color.CYAN);
			}
			
			cbuild = new CheckBox(ctx);
			cbuild.setText("TNT Build");
			cbuild.setTextColor(Color.BLUE);
			cbuild.setChecked(cbuildch);
			cbuild.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!cbuildch){
						cbuildch = true;
						cbuild.setTextColor(Color.CYAN);
						cbuilder = true;
					}else{
						cbuildch = false;
						cbuild.setTextColor(Color.BLUE);
						cbuilder = false;
					}
					cbuild.setChecked(cbuildch);
				}
			}));
			menuLayout.addView(cbuild);
			
			if(cbuildch) {
				cbuild.setTextColor(Color.CYAN);
			}
			
			speed = new CheckBox(ctx);
			speed.setText("Speed Hack");
			speed.setTextColor(Color.BLUE);
			speed.setChecked(speedch);
			speed.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!speedch){
						speedch = true;
						speed.setTextColor(Color.CYAN);
						speeded = true;
						s = 1;
					}else{
						speedch = false;
						speed.setTextColor(Color.BLUE);
						speeded = false;
						s = 0;
					}
					speed.setChecked(speedch);
				}
			}));
			menuLayout.addView(speed);
			
			if(speedch) {
				speed.setTextColor(Color.CYAN);
			}
			
			stackdr = new CheckBox(ctx);
			stackdr.setText("Stack Drop");
			stackdr.setTextColor(Color.BLUE);
			stackdr.setChecked(stackdrch);
			stackdr.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!stackdrch){
						stackdrch = true;
						stackdr.setTextColor(Color.CYAN);
						stacked = true;
					}else{
						stackdrch = false;
						stackdr.setTextColor(Color.BLUE);
						stacked = false;
					}
					stackdr.setChecked(stackdrch);
				}
			}));
			menuLayout.addView(stackdr);
			
			if(stackdrch) {
				stackdr.setTextColor(Color.CYAN);
			}
			
			invscr = new CheckBox(ctx);
			invscr.setText("Dinnerbone Hack");
			invscr.setTextColor(Color.BLUE);
			invscr.setChecked(invscrch);
			invscr.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!invscrch){
						invscrch = true;
						invscr.setTextColor(Color.CYAN);
						ModPE.setFov(300.0);
					}else{
						invscrch = false;
						invscr.setTextColor(Color.BLUE);
						ModPE.resetFov();
					}
					invscr.setChecked(invscrch);
				}
			}));
			menuLayout.addView(invscr);
			
			if(invscrch) {
				invscr.setTextColor(Color.CYAN);
			}
			
			highjump = new CheckBox(ctx);
			highjump.setText("Bunny Hack");
			highjump.setTextColor(Color.BLUE);
			highjump.setChecked(highjumpch);
			highjump.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!highjumpch){
						highjumpch = true;
						highjump.setTextColor(Color.CYAN);
						highjumps = true;
					}else{
						highjumpch = false;
						highjump.setTextColor(Color.BLUE);
						highjumps = false;
					}
					highjump.setChecked(highjumpch);
				}
			}));
			menuLayout.addView(highjump);
			
			if(highjumpch) {
				highjump.setTextColor(Color.CYAN);
			}
			
			bright = new CheckBox(ctx);
			bright.setText("Brightness Hack");
			bright.setTextColor(Color.BLUE);
			bright.setChecked(brightch);
			bright.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!brightch){
						brightch = true;
						bright.setTextColor(Color.CYAN);
						Block.setLightLevel(0, 15);
					}else{
						brightch = false;
						bright.setTextColor(Color.BLUE);
						Block.setLightLevel(0, 0);
					}
					bright.setChecked(brightch);
				}
			}));
			menuLayout.addView(bright);
			
			if(brightch) {
				bright.setTextColor(Color.CYAN);
			}
			
			coord = new CheckBox(ctx);
			coord.setText("Coordinates Hack");
			coord.setTextColor(Color.BLUE);
			coord.setChecked(coordch);
			coord.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!coordch){
						coordch = true;
						coord.setTextColor(Color.CYAN);
						coords = true;
					}else{
						coordch = false;
						coord.setTextColor(Color.BLUE);
						coords = false;
					}
					coord.setChecked(coordch);
				}
			}));
			menuLayout.addView(coord);
			
			if(coordch) {
				coord.setTextColor(Color.CYAN);
			}
			
			derp = new CheckBox(ctx);
			derp.setText("Random Movement");
			derp.setTextColor(Color.BLUE);
			derp.setChecked(derpch);
			derp.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!derpch){
						derpch = true;
						derp.setTextColor(Color.CYAN);
						derps = true;
					}else{
						derpch = false;
						derp.setTextColor(Color.BLUE);
						derps = false;
					}
					derp.setChecked(derpch);
				}
			}));
			menuLayout.addView(derp);
			
			if(derpch) {
				derp.setTextColor(Color.CYAN);
			}
			
			kill = new CheckBox(ctx);
			kill.setText("Kill Aura (DOES NOT WORK!!!!!)");
			kill.setTextColor(Color.BLUE);
			kill.setChecked(killch);
			kill.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!killch){
						killch = true;
						kill.setTextColor(Color.CYAN);
						killaura = true;
					}else{
						killch = false;
						kill.setTextColor(Color.BLUE);
						killaura = false;
					}
					kill.setChecked(killch);
				}
			}));
			menuLayout.addView(kill);
			
			if(killch) {
				kill.setTextColor(Color.CYAN);
			}
			
			gmspeed = new CheckBox(ctx);
			gmspeed.setText("Game Speed 60");
			gmspeed.setTextColor(Color.BLUE);
			gmspeed.setChecked(gmspeedch);
			gmspeed.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!gmspeedch){
						gmspeedch = true;
						gmspeed.setTextColor(Color.CYAN);
						ModPE.setGameSpeed(60);
					}else{
						gmspeedch = false;
						gmspeed.setTextColor(Color.BLUE);
						ModPE.setGameSpeed(20);
					}
					gmspeed.setChecked(gmspeedch);
				}
			}));
			menuLayout.addView(gmspeed);
			
			if(gmspeedch) {
				gmspeed.setTextColor(Color.GREEN);
			}
          
			invplace = new CheckBox(ctx);
			invplace.setText("Infinite Placing Hack");
			invplace.setTextColor(Color.BLUE);
			invplace.setChecked(invplacech);
			invplace.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!invplacech){
						invplacech = true;
						invplace.setTextColor(Color.CYAN);
						
					}else{
						invplacech = false;
						invplace.setTextColor(Color.BLUE);
						
					}
					invplace.setChecked(invplacech);
				}
			}));
			menuLayout.addView(invplace);
			
			if(invplacech) {
				invplace.setTextColor(Color.CYAN);
			}
			
			jesus = new CheckBox(ctx);
			jesus.setText("Jesus Hack");
			jesus.setTextColor(Color.BLUE);
			jesus.setChecked(jesusch);
			jesus.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!jesusch){
						jesusch = true;
						jesus.setTextColor(Color.CYAN);
						waterwalk = true;
					}else{
						jesusch = false;
						jesus.setTextColor(Color.BLUE);
						waterwalk = false;
					}
					jesus.setChecked(jesusch);
				}
			}));
			menuLayout.addView(jesus);
			
			if(jesusch) {
				jesus.setTextColor(Color.CYAN);
			}
			
			nowall = new CheckBox(ctx);
			nowall.setText("Ghost");
			nowall.setTextColor(Color.BLUE);
			nowall.setChecked(nowallch);
			nowall.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!nowallch){
						nowallch = true;
						nowall.setTextColor(Color.CYAN);
						nowalls = true;
						Entity.setCollisionSize(getPlayerEnt(), 0.1, 0.1);
					}else{
						nowallch = false;
						nowall.setTextColor(Color.BLUE);
						nowalls = false;
						Entity.setCollisionSize(getPlayerEnt(), 1, 2);
					}
					nowall.setChecked(nowallch);
				}
			}));
			menuLayout.addView(nowall);
			
			if(nowallch) {
				nowall.setTextColor(Color.CYAN);
			}
			
			effect = new CheckBox(ctx);
			effect.setText("Effect Hack");
			effect.setTextColor(Color.BLUE);
			effect.setChecked(effectch);
			effect.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!effectch){
						effectch = true;
						effect.setTextColor(Color.CYAN);
						effects = true;
					}else{
						effectch = false;
						effect.setTextColor(Color.BLUE);
						effects = false;
						Entity.removeAllEffects(getPlayerEnt());
					}
					effect.setChecked(effectch);
				}
			}));
			menuLayout.addView(effect);
			
			if(effectch) {
				effect.setTextColor(Color.CYAN);
			}
          
          
            password.setText("Hack Player Password");
            password.setTextColor(Color.BLUE);             
            password.setChecked(passwordch);
            password.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if(!passwordch){
                        passwordch = true;
                        password.setTextColor(Color.CYAN);
                        Server.sendChat("/login 12345")
                    }else{
                        passwordch = false;
                        password.setTextColor(Color.BLUE);
                        Server.sendChat("/login")
                    }
                  password.setChecked(passwordch);
                }
            }));
            menuLayout.addView(password);
 
            if(passwordch) {
                password.setTextColor(Color.GREEN);
            }
			
			var day = new Button(ctx);
			day.setText("Daytime");
			day.setTextColor(Color.GREEN);
			day.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					Level.setTime(55555);
				}
			}));
			menuLayout.addView(day);
			
			var night = new Button(ctx);
			night.setText("Nighttime");
			night.setTextColor(Color.GREEN);
			night.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					Level.setTime(14000);
				}
			}));
			menuLayout.addView(night);
			
			var maker = new TextView(ctx);
			maker.setTextSize(17);
			maker.setText("Made by" + split + DEVELOPERS);
			maker.setTextColor(Color.RED);
			maker.setGravity(Gravity.CENTER);
			menuLayout.addView(maker);
			
			menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
			menu.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
			menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
			}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function exit(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var xLayout = new LinearLayout(ctx);
			var xButton = new Button(ctx);
			xButton.setText('X');
			xButton.setTextColor(Color.RED);
			xButton.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					exitUI.dismiss();
					menu.dismiss();
				}
			}));
			xLayout.addView(xButton);
			
			exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));
			exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
			exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
			}catch(exception){
				Toast.makeText(ctx, exception, 1).show();
			}
	}}));
}

function instaDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0.1);
	}
}
 
function defaultDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, defaultDestroyTime[i]);
	}
}

function modTick() {
	if(thisday) {
		Level.setTime(200);
	}
	if(superregen) {
		Player.setHealth(20);
	}
	if(jetpacked) {
		toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
		var player = getPlayerEnt();
		setVelX(player, playerFlySpeed * playerDir[0]);
		setVelY(player, playerFlySpeed * playerDir[1]);
		setVelZ(player, playerFlySpeed * playerDir[2]);
	}
	if(nofalls) {
		px = getPlayerX();
		py = getPlayerY();
		pz = getPlayerZ();
		if(falling==0 && Entity.getVelY(getPlayerEnt())<-0.5 && cd==0) {
			falling = 1;
		}
		if(falling==1 && Entity.getVelY(getPlayerEnt())>=-0.5) {
			falling=0;
		}
		if(falling==1 && getTile(px, py-3, pz)!=0 && cd==0) {
			saver = Level.spawnMob(px, py-1, pz, 10);
			vel = Entity.getVelY(getPlayerEnt());
			Entity.setRenderType(saver,1);
			rideAnimal(getPlayerEnt(), saver);
			setVelY(saver,vel);
			ModPE.showTipMessage("");
			next = 1;
		}
		if(next==1) {
			next--;
			cd = 10;
			Entity.remove(saver);
			setVelY(getPlayerEnt(),vel);
		}
		if(cd>0) {
			cd--;
		}
	}
	if(speeded) {
		if(s==1) {
        Xpos = getPlayerX();
        Zpos = getPlayerZ();
        s = s + 1;
		}
		else if(s==3) {
        s = 1;
        Xdiff = getPlayerX()-Xpos;
        Zdiff = getPlayerZ()-Zpos;
        setVelX(getPlayerEnt(), Xdiff);
        setVelZ(getPlayerEnt(), Zdiff);
        Xdiff=0;
        Zdiff=0;
		}
		if(s!=1) {
			s = s + 1;
		}
	}
	if(highjumps) {
		if(Entity.getVelY(getPlayerEnt())< -0.1) {
			setVelY(getPlayerEnt(),-0.5);
		}
		if(Entity.getVelY(getPlayerEnt())< 0.35 && Entity.getVelY(getPlayerEnt())> 0.2 && can==1 && canGetHP==1) {
			setVelY(getPlayerEnt(), 0.6);
			can = 2;
			HP = Entity.getHealth(getPlayerEnt());
			canGetHP = 0;
		}
		if(Entity.getVelY(getPlayerEnt())>gravity && can==2) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 0;
		}
		if(Entity.getVelY(getPlayerEnt())==gravity && can==0) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 1;
		}
	}
	if(coords) {
		ModPE.showTipMessage("\n\n\n\n" + "X:" + parseInt(getPlayerX()) + split + "Y:" + parseInt(getPlayerY()) + split + "Z:" + parseInt(getPlayerZ()));
	}
	if(derps) {
		var player = getPlayerEnt();
		var y = Math.floor(Entity.getYaw(player));
		var p = Math.floor(Entity.getPitch(player));
		Entity.setRot(player, y+3, p);
	}
	if(killaura) {
		var mobs = Entity.getAll();
		for(var i=0; i<mobs.length; i++)
		{
			var x = Entity.getX(mobs[i])-getPlayerX();
			var y = Entity.getY(mobs[i])-getPlayerY();
			var z = Entity.getZ(mobs[i])-getPlayerZ();
			if(x*x+y*y+z*z<=4*4 && mobs[i]!==getPlayerEnt()) {
				Entity.setHealth(mobs[i], 0);
			}
		}
	}
	if(waterwalk) {
		if(Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==8 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==9 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==10 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==11) {
			setVelY(getPlayerEnt(), 0);
		}
	}
	if(nowalls) {
		Entity.setCollisionSize(getPlayerEnt(),0,0);
		if(Level.getTile(Player.getX(),Player.getY(), Player.getZ())!=0 && Level.getTile(Player.getX(),Player.getY()-1, Player.getZ())!=0) {
			setVelY(getPlayerEnt(), 0.01);
		}
	}
	if(effects) {
		Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, 1*20, 4, false, true);
		Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 1*20, 4, false, true);
		Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 1*20, 4, false, true);
		Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 1*20, 4, false, true);
	}
}

function toDirectionalVector(vector, yaw, pitch) {
	//http://stackoverflow.com/questions/1568568/how-to-convert-euler-angles-to-directional-vector
	vector[0] = Math.cos(yaw) * Math.cos(pitch);
	vector[1] = Math.sin(pitch);
	vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function attackHook(attacker, victim) {
	if(instakilled) {
		Entity.setHealth(victim, 1);
	}
	if(saddle) {
		rideAnimal(getPlayerEnt(), victim);
	}
	if(knockbacks) {
		var XVel;
		var ZVel;
		var x;
		var z;
		if(getYaw() < 0){
			var hit = getYaw()+90;
			for(var go=0; hit<0; go++)
			{
				hit+= 360;
			}
			x = Math.cos(hit*(Math.PI/180));
			z = Math.sin(hit*(Math.PI/180));
			setVelX(victim, x*3);
			setVelY(victim, 1);
			setVelZ(victim, z*3);
		}
		else if(getYaw() > 0 && getYaw() < 360)
		{
			var hit = getYaw()+90;
			XVel = Math.cos(hit*(Math.PI/180));
			ZVel= Math.sin(hit*(Math.PI/180));
			setVelX(victim, XVel*3);
			setVelY(victim, 1);
			setVelZ(victim, ZVel*3);
		}
		else if(getYaw() >= 360)
		{
			var hit = getYaw()+90;
			for(go=0; hit>=360; go++)
			{
				hit -= 360;
			}
			XVel = Math.cos(hit*(Math.PI/180));
			ZVel = Math.sin(hit*(Math.PI/180));
			setVelX(victim, XVel*3);
			setVelY(victim, 1);
			setVelZ(victim, ZVel*3);
        }
	}
}

function useItem(x, y, z, itemId, blockId, side) {
	if(spammer) {
		clientMessage("SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!!");
		if(Server.getAddress() != null && Server.getPort() != null) {
			Server.sendChat("SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!!");
		}
	}
	if(nukers) {
		Level.setTile(x,y,z,0);
		Level.setTile(x,y-1,z,0);
		Level.setTile(x,y+1,z,0);
		Level.setTile(x+1,y,z,0);
		Level.setTile(x-1,y,z,0);
		Level.setTile(x,y,z+1,0);
		Level.setTile(x,y,z-1,0);
	}
	if(cbuilder) {
		Level.setTile(x,y,z,46);
		Level.setTile(x,y-1,z,46);
		Level.setTile(x,y+1,z,46);
		Level.setTile(x+1,y,z,46);
		Level.setTile(x-1,y,z,46);
		Level.setTile(x,y,z+1,46);
		Level.setTile(x,y,z-1,46);
	}
}

function destroyBlock(x, y, z, side){
    var data = Level.getData(x, y, z);
    var tile = Level.getTile(x, y, z);
    if(stacked){
        if(tile==1 && getCarriedItem()==270 || tile==1 && getCarriedItem()==257 || tile==1 && getCarriedItem()==274 || tile==1 && getCarriedItem()==278 || tile==1 && getCarriedItem()==285 || tile==4 && getCarriedItem()==270 || tile==4 && getCarriedItem()==257 || tile==4 && getCarriedItem()==274 || tile==4 && getCarriedItem()==278 || tile==4 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,4,63);
        }
        else if(tile==1 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285 || tile==4 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,4,64);
        }
        if(tile==2 || tile==3){
            Level.dropItem(x,y,z,0.5,3,63);
        }
        if(tile==5 || tile==6 || tile==12 || tile==13){
            Level.dropItem(x,y,z,0.5,tile,63,data);
        }
        if(tile==14 && getCarriedItem()==257 || tile==14 && getCarriedItem()==278 || tile==14 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,14,63);
        }
        else if(tile==14 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,14,64);
        }
        if(tile==15 && getCarriedItem()==257 || tile==15 && getCarriedItem()==274 || tile==15 && getCarriedItem()==278 || tile==15 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,15,63);
        }
        else if(tile==15 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,15,64);
        }
        if(tile==16 && getCarriedItem()==270 || tile==16 && getCarriedItem()==257 || tile==16 && getCarriedItem()==274 || tile==16 && getCarriedItem()==278 || tile==16 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,263,63);
        }
        else if(tile==16 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,263,64);
        }
        if(tile==17){
            Level.dropItem(x,y,z,0.5,17,63,data);
        }
        if(tile==18 && getCarriedItem()==359){
            Level.dropItem(x,y,z,0.5,18,63);
        }
        else if(tile==18 && getCarriedItem()!=359){
            Level.dropItem(x,y,z,0.5,18,64);
        }
        if(tile==19 || tile==20){
            Level.dropItem(x,y,z,0.5,tile,63,data);
        }
        if(tile==21 && getCarriedItem()==257 || tile==21 && getCarriedItem()==274 || tile==21 && getCarriedItem()==278 || tile==21 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,21,63);
        }
        else if(tile==21 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,21,64);
        }
        if(tile==22 && getCarriedItem()==257 || tile==22 && getCarriedItem()==274 || tile==22 && getCarriedItem()==278 || tile==22 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,22,63);
        }
        else if(tile==22 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,22,64);
        }
        if(tile==24 && getCarriedItem()==270 || tile==24 && getCarriedItem()==257 || tile==24 && getCarriedItem()==274 || tile==24 && getCarriedItem()==278 || tile==24 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,24,63);
        }
        else if(tile==24 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,24,64);
        }
        if(tile==26){
            Level.dropItem(x,y,z,0.5,26,63,data);
        }
        if(tile==27 && getCarriedItem()==270 || tile==27 && getCarriedItem()==257 || tile==27 && getCarriedItem()==274 || tile==27 && getCarriedItem()==278 || tile==27 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,27,63);
        }
        else if(tile==27 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,27,64);
        }
        if(tile==30 && getCarriedItem()==359){
            Level.dropItem(x,y,z,0.5,287,63);
        }
        else if(tile==30 && getCarriedItem()!=359){
            Level.dropItem(x,y,z,0.5,287,64);
        }
        if(tile==31 && getCarriedItem()==359 || tile==32 & getCarriedItem()==359){
            Level.dropItem(x,y,z,0.5,tile,63,data);
        }
        else if(tile==31 && getCarriedItem()!=359 || tile==32 && getCarriedItem()!=359){
            Level.dropItem(x,y,z,0.5,tile,64,data);
        }
        if(tile==37 || tile==38 || tile==39 || tile==40){
            Level.dropItem(x,y,z,0.5,tile,63);
        }
        if(tile==41 && getCarriedItem()==257 || tile==41 && getCarriedItem()==278 || tile==41 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,41,63);
        }
        else if(tile==41 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,41,64);
        }
        if(tile==42 && getCarriedItem()==257 || tile==42 && getCarriedItem()==274 || tile==42 && getCarriedItem()==278 || tile==42 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,42,63);
        }
        else if(tile==42 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,42,64);
        }
        if(tile==44 && getCarriedItem()==257 || tile==44 && getCarriedItem()==270 || tile==44 && getCarriedItem()==274 || tile==44 && getCarriedItem()==278 || tile==44 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,44,63);
        }
        else if(tile==44 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,44,64);
        }
        if(tile==45 && getCarriedItem()==270 || tile==45 && getCarriedItem()==257 || tile==45 && getCarriedItem()==274 || tile==45 && getCarriedItem()==278 || tile==45 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,45,63);
        }
        else if(tile==45 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,45,64);
        }
        if(tile==47){
            Level.dropItem(x,y,z,0.5,340,61);
        }
        if(tile==48 && getCarriedItem()==270 || tile==48 && getCarriedItem()==257 || tile==48 && getCarriedItem()==274 || tile==48 && getCarriedItem()==278 || tile==48 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,48,63);
        }
        else if(tile==48 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,48,64);
        }
        if(tile==49 && getCarriedItem()==278 || tile==246 && getCarriedItem()==278){
            Level.dropItem(x,y,z,0.5,49,63);
        }
        else if(tile==49 && getCarriedItem()!=278 || tile==246 && getCarriedItem()!=278){
            Level.dropItem(x,y,z,0.5,49,64);
        }
        if(tile==50 || tile==53 || tile==54){
            Level.dropItem(x,y,z,0.5,tile,63);
        }
        if(tile==56 && getCarriedItem()==257 || tile==57 && getCarriedItem()==257 || tile==56 && getCarriedItem()==278 || tile==57 && getCarriedItem()==278 || tile==56 && getCarriedItem()==285 || tile==57 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,tile,63);
        }
        else if(tile==56 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285 || tile==57 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,tile,64);
        }
        if(tile==61 && getCarriedItem()==270 || tile==61 && getCarriedItem()==257 || tile==61 && getCarriedItem()==274 || tile==61 && getCarriedItem()==278 || tile==61 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,61,63);
        }
        else if(tile==61 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,61,64);
        }
        if(tile==63 || tile==64 || tile==65 || tile==66){
            Level.dropItem(x,y,z,0.5,tile,63);
        }
        if(tile==67 && getCarriedItem()==270 || tile==67 && getCarriedItem()==257 || tile==67 && getCarriedItem()==274 || tile==67 && getCarriedItem()==278 || tile==67 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,67,63);
        }
        else if(tile==67 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,67,64);
        }
        if(tile==73 && getCarriedItem()==257 || tile==73 && getCarriedItem()==278 || tile==73 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,331,63);
        }
        else if(tile==73 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,331,64);
        }
        if(tile==78 && getCarriedItem()==256 || tile==78 && getCarriedItem()==269 || tile==78 && getCarriedItem()==273 || tile==78 && getCarriedItem()==277 || tile==78 && getCarriedItem()==284){
            Level.dropItem(x,y,z,0.5,332,63);
        }
        else if(tile==78 && getCarriedItem()!=256 && getCarriedItem()!=269 && getCarriedItem()!=273 && getCarriedItem()!=277 && getCarriedItem()!=284){
            Level.dropItem(x,y,z,0.5,332,64);
        }
        if(tile==80 && getCarriedItem()==256 || tile==80 && getCarriedItem()==269 || tile==80 && getCarriedItem()==273 || tile==80 && getCarriedItem()==277 || tile==80 && getCarriedItem()==284){
            Level.dropItem(x,y,z,0.5,332,60);
        }
        else if(tile==80 && getCarriedItem()!=256 && getCarriedItem()!=269 && getCarriedItem()!=273 && getCarriedItem()!=277 && getCarriedItem()!=284){
            Level.dropItem(x,y,z,0.5,332,64);
        }
        if(tile==81 || tile==82 || tile==83 || tile==85 || tile==86 || tile==89 || tile==91 || tile==96 || tile==102 || tile==107){
            Level.dropItem(x,y,z,0.5,tile,63);
        }
        if(tile==87 && getCarriedItem()==257 || tile==87 && getCarriedItem()==270 || tile==87 && getCarriedItem()==274 || tile==87 && getCarriedItem()==278 || tile==87 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,87,63);
        }
        else if(tile==87 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,87,64);
        }
        if(tile==98 && getCarriedItem()==257 || tile==98 && getCarriedItem()==270 || tile==98 && getCarriedItem()==274 || tile==98 && getCarriedItem()==278 || tile==98 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,98,63);
        }
        else if(tile==98 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,98,64);
        }
        if(tile==101 && getCarriedItem()==257 || tile==101 && getCarriedItem()==270 || tile==101 && getCarriedItem()==274 || tile==101 && getCarriedItem()==278 || tile==101 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,101,63);
        }
        else if(tile==101 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,101,64);
        }
        if(tile==103){
            Level.dropItem(x,y,z,0.5,360,57);
        }
        if(tile==108 && getCarriedItem()==257 || tile==108 && getCarriedItem()==270 || tile==108 && getCarriedItem()==274 || tile==108 && getCarriedItem()==278 || tile==108 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,108,63);
        }
        else if(tile==108 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,108,64);
        }
        if(tile==109 && getCarriedItem()==257 || tile==109 && getCarriedItem()==270 || tile==109 && getCarriedItem()==274 || tile==109 && getCarriedItem()==278 || tile==109 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,109,63);
        }
        else if(tile==109 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,109,64);
        }
        if(tile==112 && getCarriedItem()==257 || tile==112 && getCarriedItem()==270 || tile==112 && getCarriedItem()==274 || tile==112 && getCarriedItem()==278 || tile==112 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,112,63);
        }
        else if(tile==112 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,112,64);
        }
        if(tile==114 && getCarriedItem()==257 || tile==114 && getCarriedItem()==270 || tile==114 && getCarriedItem()==274 || tile==114 && getCarriedItem()==278 || tile==114 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,114,63);
        }
        else if(tile==114 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,114,64);
        }
        if(tile==128 && getCarriedItem()==257 || tile==128 && getCarriedItem()==270 || tile==128 && getCarriedItem()==274 || tile==128 && getCarriedItem()==278 || tile==128 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,128,63);
        }
        else if(tile==128 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,128,64);
        }
        if(tile==134 || tile==135 || tile==136 || tile==158 || tile==170 || tile==171 || tile==245 || tile==247){
            Level.dropItem(x,y,z,0.5,tile,63,data);
        }
        if(tile==139 && getCarriedItem()==257 || tile==139 && getCarriedItem()==270 || tile==139 && getCarriedItem()==274 || tile==139 && getCarriedItem()==278 || tile==139 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,139,63);
        }
        else if(tile==139 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,139,64);
        }
        if(tile==155 && getCarriedItem()==257 || tile==155 && getCarriedItem()==270 || tile==155 && getCarriedItem()==274 || tile==155 && getCarriedItem()==278 || tile==155 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,155,63);
        }
        else if(tile==155 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,155,64);
        }
        if(tile==156 && getCarriedItem()==257 || tile==156 && getCarriedItem()==270 || tile==156 && getCarriedItem()==274 || tile==156 && getCarriedItem()==278 || tile==156 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,156,63);
        }
        else if(tile==156 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,156,64);
        }
        if(tile==173 && getCarriedItem()==257 || tile==173 && getCarriedItem()==270 || tile==173 && getCarriedItem()==274 || tile==173 && getCarriedItem()==278 || tile==173 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,173,63);
        }
        else if(tile==173 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,173,64);
        }
        if(tile==244 && getCarriedItem()==257 || tile==244 && getCarriedItem()==270 || tile==244 && getCarriedItem()==274 || tile==244 && getCarriedItem()==278 || tile==244 && getCarriedItem()==285){
            Level.dropItem(x,y,z,0.5,457,63);
        }
        else if(tile==244 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
            Level.dropItem(x,y,z,0.5,457,64);
        }
        if(tile==250){
            Level.dropItem(x,y,z,0,247,64);
        }
    }
}

// Globals
var menuFixed = false;
var menuItems = ["menu_item_abhi", "menu_item_break", "menu_item_about", "menu_item_featured", "menu_item_work", "menu_item_blog", "menu_item_contact"];
var menuItemsLength = menuItems.length;

// Set methods
document.onscroll = checkMenu;
window.onresize = checkMenu;

// Check Menu
function checkMenu() {
	if (window.innerWidth <= 720 || screen.width <= 1024) {
		hideMenu();
	} else {
		unhideMenu();
	}

	var offset = document.body.scrollTop;
	if (offset >= 75) {
		if (!menuFixed) {
			fixMenu();
		}
	} else {
		if (menuFixed) {
			unfixMenu();
		}
	}
}

// Menu 
function hideMenu() {
	var menu = document.getElementById("menu");
	if (menu.style.display != "none") {
		menu.style.display = "none";
	}
}

function unhideMenu() {
	var menu = document.getElementById("menu");
	if (menu.style.display == "none") {
		menu.style.display = "inline";
	}
}

// Fixation
function fixMenu() {
	var menu = document.getElementById("menu");
	menu.style.position = "fixed";
	menu.style.background = "#FFF";
	menu.style.opacity = "0.95";
	menu.style.borderBottom = "thin solid #EEE";
	menu.style.height = 60;

	for (var menuIndex = 0; menuIndex < menuItemsLength; menuIndex++) {
		var item = menuItems[menuIndex];
		if ((item === "menu_item_abhi") || (item === "menu_item_break")) {
			document.getElementById(item).style.display = "inline-block";
		}
		document.getElementById(item).style.marginTop = 23;
		document.getElementById(item).style.color = "#000";
	}

	fadeIn(menu, 0.95);

	menuFixed = true;
}

function unfixMenu() {
	var menu = document.getElementById("menu");

	fadeOut(menu);

	menu.style.position = "absolute";
	menu.style.background = "transparent";
	menu.style.borderBottom = "none";
	menu.style.height = 75;

	for (var menuIndex = 0; menuIndex < menuItemsLength; menuIndex++) {
		var item = menuItems[menuIndex];
		if ((item === "menu_item_abhi") || (item === "menu_item_break")) {
			document.getElementById(item).style.display = "none";
		}
		document.getElementById(item).style.marginTop = 30;
		document.getElementById(item).style.color = "#FFF";
	}

	fadeIn(menu, 1);

	menuFixed = false;
}

// Animations
function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      //el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, opacity, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  var finalOpacity = opacity || 1;

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if ((val += 0.05) <= finalOpacity) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
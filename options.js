var data = {
	1 : {
		image : "",
		desc : "You wake up on a bed in a dim, cold prison cell. You have no recollection of how you got here, but you feel sunk and confused, and need to get out of here. ",
		options: [
			{
				dest : 2,
				desc : "Get up"
			}
		]
	},
    2 : {
		image : "",
		desc : "There is a window on one wall, barred. On another wall, a toilet, and prison bars leading to a hallway. There's a light with some kind of object inside the shield, and a loose stone in the wall. What do you investigate?",
		options: [
			{
				dest : 3,
				desc : "window "
			},
			{
				dest : 8,
				desc : "bed "
			},
			{
				dest : 18,
				desc : "toliet "
			},
			{
				dest : 11,
				desc : "bars "
			},
			{
				dest : 21,
				desc : "light "
			},
			{
				dest : 23,
				desc : "loose tile"
			}
		]
	},
    3 : {
        image : "",
        desc : "Outside the window, you see children playing in a park not too far away (why did they put a park so close to a prison?? you think to yourself.) They look dirty and hungry. A broom is leaning against the wall.",
        options : [
            {
                dest : 4,
                desc : "talk to kids "
            },
            {
                dest : 7,
                desc : "use nail file "
            },
            {
                dest : 2,
                desc : "back to room "
            }
        ]
    },
    4 : {
        image : "",
        desc : "You ask the children to give you the broom. They will not help you unless you offer them something.",
        options : [
            {
                dest : 5,
                desc : "give soap "
            },
            {
                dest : 6,
                desc : "give food "
            },
            {
                dest : 2,
                desc : "back to room "
            }
        ]
    },
    5 : {
        image : "",
        desc : "you got the broom!",
        options : [
            {
                dest : 2,
                desc : "back to room "
            }
        ]
    },
    6 : {
        image : "",
        desc : "you got the broom!",
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    },
    7 : {
        image : "",
        desc : "you file the bars away, and attempt to jump out of the window, but you fall and break your legs!",
        youLose : true,
        options : [
            {
                dest : 1,
                desc : "back to start"
            }
        ]
    }, 
    8 : {
        image : "",
        desc : "On the bed, there is a pillow and a blanket",
        youLose : false,
        options : [
            {
                dest : 9,
                desc : "look in the blanket "
            },
            {
                dest : 10,
                desc : "take pillow "
            },
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    9 : {
        image : "",
        desc : "You found a bottle of pills!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    10 : {
        image : "",
        desc : "You now have the pillow!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    11 : {
        image : "",
        desc : "There's a plate of food on the floor in front of the cell door, and a guard dog outside the cell, with a key around its neck.",
        youLose : false,
        options : [
            {
                dest : 12,
                desc : "take food "
            },
            {
                dest : 13,
                desc : "call dog "
            },
            {
                dest : 17,
                desc : "use key"
            }
        ]
    }, 
    12 : {
        image : "",
        desc : "You now have a chicken leg!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    },
    13 : {
        image : "",
        desc : "the dog looks at you and tilts its head; you'll need to give it something to get the key",
        youLose : false,
        options : [
            {
                dest : 14,
                desc : "give food "
            },
            {
                dest : 15,
                desc : "give pills "
            },
            {
                dest : 16,
                desc : "reach for key "
            },
            {
                dest : 2,
                desc : "back to room "
            }
        ]
    }, 
    17 : {
        image : "",
        desc : "Oh no! the key didn't work on the door; try something else!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    14 : {
        image : "",
        desc : "you fed the dog, and you now have the key!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    15 : {
        image : "",
        desc : "you poisoned the dog, and now you have the key!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    16 : {
        image : "",
        desc : "Oh no! the dog bit off your hand!",
        youLose : true,
        options : [
            {
                dest : 1,
                desc : "back to start"
            }
        ]
    }, 
    18: {
        image : "",
        desc : "There's a bar of soap on top of the toilet tank, and checking inside the tank you see a nail file. Maybe if you clogged the toilet, you could get it!",
        youLose : false,
        options : [
            {
                dest : 19,
                desc : "take soap "
            },
            {
                dest : 20,
                desc : "use pillow "
            },
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    19: {
        image : "",
        desc : "you now have the soap!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    20 : {
        image : "",
        desc : "you clogged the toilet with the pillow, and now you have the nailfile!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    21 : {
        image : "",
        desc : "there seems to be a long object in the ceiling tile, if you had a long rod, you could probably knock it out",
        youLose : false,
        options : [
            {
                dest : 22,
                desc : "use broom "
            },
            {
                dest : 2,
                desc : "back to room "
            }
        ]
    }, 
    22 : {
        image : "",
        desc : "you now have a crowbar!",
        youLose : false,
        options : [
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    },
    23 : {
        image : "",
        desc : "the tile on the floor is loose, but you can't get it off on your own; you're going to need a tool",
        youLose : false,
        options : [
            {
                dest : 24,
                desc : "use crowbar "
            },
            {
                dest : 2,
                desc : "back to room"
            }
        ]
    }, 
    24 : {
        image : "",
        desc : "There's a tunnel under this stone! but, there's a burst pipe with water rushing out of it. What are you going to use to plug it?",
        youLose : false,
        options : [
            {
                dest : 25,
                desc : "the pill bottle "
            },
            {
                dest : 26,
                desc : "the soap"
            }
        ]
    }, 
    25 : {
        image : "",
        desc : "oh no! the pill bottle is too big to fit in the crack of the pipe! the water fills the tunnel and you drown",
        youLose : true,
        options : [
            {
                dest : 1,
                desc : "back to start"
            }
        ]
    },
    26 : {
        image : "",
        desc : "the soap was able to plug the pipe! you escape out of the tunnel to freedom!",
        youWin : true,
        options : [
            {
                dest : 1,
                desc : "back to start"
            }
        ]
    }, 
}

var imgOption = document.getElementById("image-option");
var pDesc = document.getElementById("option-desc");

function renderPage(optionElem) {
	var optionId = optionElem.getAttribute("data-option-id");
	renderById(optionId);
}

function renderById(optionId) {
	var option = data[optionId];

	imgOption.src = option.image;
	pDesc.innerText = option.desc;

	var element = document.getElementsByTagName("a");

	for (var i = element.length - 1; i >= 0; i--) {
	    element[i].parentNode.removeChild(element[i]);
	}
    
    var h1Elements = document.getElementsByTagName("h1");

	for (var i = h1Elements.length - 1; i >= 0; i--) {
	    h1Elements[i].parentNode.removeChild(h1Elements[i]);
	}
    
    if (option.youLose === true) {
        var loseH = document.createElement("h1");
        loseH.innerText = "You lose!";
        document.getElementsByTagName("body")[0].appendChild(loseH);
    }
    
    if (option.youWin === true) {
        var winH = document.createElement("h1");
        winH.innerText = "You win!";
        document.getElementsByTagName("body")[0].appendChild(winH);
    }

	for (var curOption of option.options) {
		console.log(curOption);
		var addedOption = document.createElement("a");
		addedOption.href = "#";
		addedOption.setAttribute("data-option-id", curOption.dest);
		addedOption.innerText = curOption.desc;
		addedOption.setAttribute("onclick", "renderPage(this)");
		console.log(addedOption);
		document.getElementsByTagName("body")[0].appendChild(addedOption);
	}
}

renderById(1);
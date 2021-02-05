
// Tests for a valid HTML element
function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;  
}

// Testes for a valid instance of El()
function isEl(element) {
    return element instanceof El;
}

//Shortcut to create a new instance of El()
function el(id) {
    return new El(id);
}

//Shortcut to create a new instance of an El element contaning a hyperlink 
function a(func) { 
    var a=el('a').href('#go');
    if(func!==undefined)
    {
        a.click(func);
    }
    return a;
}

/*
Creates a new instance of El(), you can pass an existing element or create a new HTML element
Examples:
let elem1 = new El('div');
let elem2 = new El(ele('idOfExistingElement'));  -- If the element is already rendered to the web page
*/
function El(type) {
    if(isElement(type)) {
        this.el=type;
    } else {
        this.el=document.createElement(type);
    }
    return this;
}

//Appends txt to innerHTML
El.prototype.html=function(txt) {
    this.el.insertAdjacentHTML('beforeend', txt);
    return this;
};

//Clears the innerHTML
El.prototype.clear=function() {
    this.el.innerHTML='';
    return this;
};

//Sets the title of the DOM node
El.prototype.title=function(txt) {
    this.el.title=txt;
    return this;
};

//Appends another El instance to the current El instance 
El.prototype.app=function(el) {
    if(isEl(el)) {
        this.el.appendChild(el.get());
    } else {
        this.el.appendChild(el);
    }
    
    return this;
};

//Gets the wrapped HTML element
El.prototype.get=function() {
    return this.el;
};

//Sets the id of a HTML element
El.prototype.id=function(id) {
    this.el.id=id;
    return this;
};

//Sets the css class of the HTML element
El.prototype.css=function(css) {
    this.el.className=css;
    return this;
};

//Sets the css padding left top right bottom
El.prototype.pad=function(l,t,r,b) {
    if(l){this.el.style.paddingLeft=l+'px';}
    if(t){this.el.style.paddingTop=t+'px';}
    if(r){this.el.style.paddingRight=r+'px';}
    if(b){this.el.style.paddingBottom=b+'px';}
    return this;
};

//Appends raw text to innerHTML
El.prototype.text=function(txt) {
    this.el.appendChild(document.createTextNode(txt));
    return this;
};

//For images only, sets the image url
El.prototype.src=function(src) {
    this.el.src=src;
    return this;
};

//For <a> hyperlinks only, sets the href property
El.prototype.href=function(src) {
    this.el.href=src;
    return this;
};

//For Images only, sets the Node alt property
El.prototype.alt=function(txt) {
    this.el.alt=txt;
    return this;
};

//Creates a click event listener which calls the action
El.prototype.click=function(action) {
    this.el.addEventListener("click",action);
    return this;
};

//Creates an event listener of type which calls the action
El.prototype.event=function(type,action) {
    this.el.addEventListener(type,action);
    return this;
};

//Sets any css styling
El.prototype.style=function(txt) {
    this.el.style=txt;
    return this;
};

//Sets the data property of name to value
El.prototype.dataset=function(name,value) {
    this.el.dataset[name]=value;
    return this;
};

//Form elements only, sets the value property
El.prototype.value=function(value) {
    this.el.value=value;
    return this;
};

//Clones the El
El.prototype.clone=function() {
    return new El(this.el.cloneNode(true));
};

//Gets the data property of (name)
El.prototype.getDataset=function(name) {
    return this.el.dataset[name];
};

//Sets the placeholder property of the HTML element
El.prototype.placeholder=function(text) {
    this.el.placeholder=text;
    return this;
};

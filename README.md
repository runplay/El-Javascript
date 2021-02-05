# run El-Javascript
![alt tag](http://www.runplay.com/rp/logo/logo-el_196x196.png "run El Logo")
  
<b>El</b><br/>
Element wrapper<br/>

<br/><br/>
El is a HTML Node wrapper for rendering client side HTML, it servers as a wrapper class which enables chaining development for rapid development of a web page.


<br/><br/>
<h2>Features</h2>

✅ Fast coding of HTML web pages<br/>
✅ Chaining<br/>
✅ Enables dynamic web page development<br/> 

<br/><br/>

<h2>How to Use</h2>
Appendix:<br/>
1 - Creating a new El()<br/>
2 - Methods<br/>

<br/>

<h3>1 - Creating a new El()</h3>
<br/>to create:<br/>

```

Creates a new instance of El(), you can pass an existing element or create a new HTML element
Examples:
let elem1 = new El('div');
let elem2 = new El(ele('idOfExistingElement'));  -- If the element is already rendered to the web page

```

<h3>2 - Methods</h3>
<br/>Applying Element details:<br/>

```

elem.html('<div>Valid html text</div>');  --  appends innerHTML

elem.clear();  --  Clears the innerHTML

elem.title('Text for the title attribute');

elem.app(elem1);  --  Appends another El instance to the current El instance

elem.get(elem1);  --  Gets the wrapped HTML element

elem.css('css class name');  --  Sets the CSS class of the HTML element

elem.pad(50, 50, 50, 50);  --  Sets the CSS padding of elem to 50px left, 50px top, 50px right, 50px bottom

elem.text('raw text to append to inner HTML');  

elem.src('http://www.runplay.com/rp/logo/logo-el_196x196.png');  --  Image elements only 

elem.href('http://www.runplay.com');  --  For hyperlinks only

elem.alt('alt text for image');  --  For image only, puts the alt atterbute with the passed text

elem.click(function(){});  --  Appends the passed function to the click event of the element 

elem.event('change', function(){});  --  Creates any valid event and calls the function

elem.style('width: 50px; height: 50px');  --  Applies any valid CSS styles to the element 

elem.dataset('id', 'data');  --  Sets the dataset of the element

elem.value('value of input element');  --  Input elements only

elem.clone();  --  clones the element 

elem.getDataset('id');  --  gets the dataset of the passed id 

elem.placeholder('text of the placeholder');  --  Text/textarea input elements only


```

<br/><br/>

<br/>
<h2>Updates</h2>
v1.1 - First open release <br/>

<br/><br/>













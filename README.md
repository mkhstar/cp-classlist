# Cross Platform ClassList (cp-classlist)

Cross Platform ClassList is a cross platform library (IE8+) used for manipulating the classlist of a DOM element.

## Installation

### First Option
Use the package manager [npm] to install cp-classlist.


```bash
npm install cp-classlist
```

### Second Option
You can download the javascript file from dist/main.js of this repository. Then above the closing body tag import it like
```html
<script src="./main.js"> </script> <!-- If it is in this directory -->

```


## Usage


```javascript

var cpClassList = require('cp-classlist');  // If it was installed via npm else skip this line

var element = document.getElementById('id'); // Or you can use querySelector

var list = cpClassList(element);

//Methods 

//GET CLASS LISTS

list.getList(); // returns an array of class names of the element.

//ADD CLASS LISTS
list.add(class1, class2, class3, ...); //Adds classes passed and returns the object.

//REMOVE CLASS LISTS
list.remove(class1, class2, class3, ...); //Removes classes passed and returns the object.

//TOGGLE CLASS LISTS
list.toggle(className); // Toggles between the class name passed and returns the object.

//ITEM IN CLASS LIST
list.item(number); // Returns the className of the index passed else false; Note: It throws error when number is not passed

//CONTAINS
list.contains(className); // Returns true if the className is found else false


//REPLACE CLASSNAME
list.replace(oldClassName, newClassName); // If old className is found it replaces it with the new className and returns the object else it returns false



//Methods that can be chained

add(), remove(), toggle()

//EXAMPLE

list.add('foo', 'another-class').remove('prev-class').toggle('a-class-name')

//NOTE THAT WHEN replace() 's oldClassName is found and gets Replaced it returns an object which can be chained with other methods



```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)

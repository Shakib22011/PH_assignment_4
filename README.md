1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: The main difference among them is:

i.getElementById returns one element by unique id\
ii. getElementsByClassName returns HTMLCollection (multiple elements)\
iii. querySelector returns only the first matching element\
iv. querySelectorAll returns all matching elements\


2. How do you create and insert a new element into the DOM?

Answer: 

i.creating element:
	const element = document.createElement('p');

ii.add content:
	p.innerText="hello world";

iii. adding to the parent or body:
	document.body.appendchild(element);

3.What is Event Bubbling? And how does it work?

Answer:

Event Bubbling is a DOM event propagation mechanism where an event starts from the target element and then moves upward to the parent.

How it works:
	i. Event happens on a child element.
	ii. Then it “bubbles up” to parent elements one by one.
	iii. Stops when it reaches the parent or if stopPropagation() is used.

4.What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation is a technique where a single event listener is added to the parent element instead of adding listeners to multiple child elements.

why its useful:
	It is useful because it improves performance as it use fewer eventListener , further it works for dynamically added elements.


5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:

The main difference is :

i. preventDefault() : It stops the browser's default behaviour like: form submission.\
ii. stopPropagation(): It stops the event from bubbling up to parent.

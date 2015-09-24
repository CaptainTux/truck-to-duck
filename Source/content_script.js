walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/Truck/gi, "Duck");
	v = v.replace(/Trucks/gi, "Ducks");
	v = v.replace(/Trucker/gi, "Ducker");
	// Proper handling of fire engines.
	v = v.replace(/Fire Engine/gi, "Fire Duck");

	// Currency handling. Yes, I know this is not trucks. 
	v = v.replace(/bucks/gi, "ducks");
	v = v.replace(/dollars/gi, "Ducks");
	v = v.replace(/dollar/gi, "Duck");

	// This is an easter egg.
	v = v.replace(/pants/gi, '¡pantalones!');







	
	textNode.nodeValue = v;
}



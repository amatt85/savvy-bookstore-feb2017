// Put all of your jQuery and JavaScript in this document.
var book1 = {
    "id": 1,
    "name": "The Communist Manifesto",
    "author": "Karl Marx",
    "picture_url": "images/the-communist-manifesto.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var book2 = {
    "id": 2,
    "name": "The Communist Manifesto",
    "author": "Karl Marx",
    "picture_url": "images/the-communist-manifesto.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var book3 = {
    "id": 3,
    "name": "The Communist Manifesto",
    "author": "Karl Marx",
    "picture_url": "images/the-communist-manifesto.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var book4 = {
    "id": 4,
    "name": "The Communist Manifesto",
    "author": "Karl Marx",
    "picture_url": "images/the-communist-manifesto.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ip`sum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

$( "#book1 h1" ).text( book1.name );
$( "#book1 h2" ).text( book1.author );
$( "#book1 img" ).attr( "src", book1.picture_url );
$( "book1 h3" ).text( book1.price );
$( "book1 ul" ).text( book1.selling_points );
$( "book1 span" ).text( book1.id );

$( "#book2 h1" ).text( book2.name );
$( "#book2 h2" ).text( book2.author );
$( "#book2 img" ).attr( "src", book2.picture_url );
$( "book2 h3" ).text( book2.price );
$( "book2 ul" ).text( book2.selling_points );
$( "book2 span" ).text( book2.id );

$( "#book3 h1" ).text( book3.name );
$( "#book3 h2" ).text( book3.author );
$( "#book3 img" ).attr( "src", book3.picture_url );
$( "book3 h3" ).text( book3.price );
$( "book3 ul" ).text( book3.selling_points );
$( "book3 span" ).text( book3.id );

$( "#book4 h1" ).text( book4.name );
$( "#book4 h2" ).text( book4.author );
$( "#book4 img" ).attr( "src", book4.picture_url );
$( "book4 h3" ).text( book4.price );
$( "book4 ul" ).text( book4.selling_points );
$( "book4 span" ).text( book4.id );

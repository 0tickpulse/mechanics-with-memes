var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-motion-in-one-direction",
  "level": "1",
  "url": "sec-motion-in-one-direction.html",
  "type": "Section",
  "number": "1.1",
  "title": "Motion in One Direction",
  "body": " Motion in One Direction   Our universe has three spatial dimensions. At least, that's what sane people think; don't ask the string theorists. But for now, let's just consider motion in one dimension. This is a good starting point, and it will allow us to build up our understanding of calculus without dealing with pesky little vectors.    Position  You are riding in a car along a flat, straight road. You are moving in one dimension. I can't tell you why you're in this situation, but I can tell you that your motion is one-dimensional. You could be moving forward, backward, or not at all, but you can't magically jump off the road or fly into the air.  In one dimension, we essentially treat space as a number line (the real numbers ). The coordinate along this line is a single letter, typically , and it can be positive, negative, or zero. The point at zero is the origin . The choice of origin, as well as which direction is positive, is arbitrary.  But this won't suffice, for there is another parameter that we need to consider: time. We treat time as another number line, with its own coordinate, typically . We usually choose the origin of time to be the moment we start observing the system, so is when we start watching the car. Time only moves forward, so we only consider non-negative values of .  To describe the motion of the car, we need to know its position at each moment in time. We can represent this as a function , which gives the position of the car at time . This function is called the displacement .   Position as a function of time, graphed as a two-dimensional plot.      Velocity  We shall begin with a simple question: how fast is the car moving? Suppose your friend is on the sidewalk, and he takes two pictures of your car, ten seconds apart. Perhaps he's trying to capture your sweet ride, or maybe he's just trying to embarrass you. After looking at the pictures, he tells you that in the first picture, your car is 0 meters from a certain lamppost, and in the second picture, your car is 100 meters from the same lamppost.  Let's now ask the question: if we knew all of this, how much would the car move after twenty seconds?  Of course, the first thing to do is transform this information into a mathematical function. Let's denote the time of the first picture as seconds, and the time of the second picture as seconds. The average velocity between these two times can be calculated as the change in position divided by the change in time.    The average velocity of an object moving in one dimension between times and is given by the formula:     Ooo scary... \"Definition 1.1.1\" --- doesn't that sound fancy? Well, in this book (or course? Website? Set of notes by someone unqualified to speak on the topic? I don't know what to call it), we will be using a lot of definitions, theorems, and proofs.  Anyways, let's apply this definition to our problem. We have seconds, seconds, meters, and meters. Plugging these values into the formula, we get .   By the way, this is a good time to mention that in physics, things have units. In this case, the position is measured in meters (m), time is measured in seconds (s), and velocity is measured in meters per second (m\/s). There is actually a ton of things you can do by just analyzing the units of a problem. I'll include an appendix on dimensional analysis in the near future.   So, the average velocity of the car between the two pictures is 10 m\/s. This means that, on average, the car is moving at a speed of 10 meters per second in the positive direction. However, this doesn't necessarily mean that the car is always moving at 10 m\/s; it could be accelerating or decelerating.  Now, let's go back to our original question: how much would the car move after twenty seconds? If we assume that the car continues to move at the same average velocity of 10 m\/s, then we can calculate the position of the car at seconds using the formula , which gives us .  On the German autobahn, there are no speed limits. Indeed, you can drive as fast as you want. How fast you drive depends on how much you value your life.   "
},
{
  "id": "subsec-position-3",
  "level": "2",
  "url": "sec-motion-in-one-direction.html#subsec-position-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "origin "
},
{
  "id": "subsec-position-5",
  "level": "2",
  "url": "sec-motion-in-one-direction.html#subsec-position-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "displacement "
},
{
  "id": "xt-function",
  "level": "2",
  "url": "sec-motion-in-one-direction.html#xt-function",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Position as a function of time, graphed as a two-dimensional plot.   "
},
{
  "id": "subsec-velocity-4",
  "level": "2",
  "url": "sec-motion-in-one-direction.html#subsec-velocity-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average velocity "
},
{
  "id": "def-average-velocity-1d",
  "level": "2",
  "url": "sec-motion-in-one-direction.html#def-average-velocity-1d",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  The average velocity of an object moving in one dimension between times and is given by the formula:    "
},
{
  "id": "subsec-velocity-8",
  "level": "2",
  "url": "sec-motion-in-one-direction.html#subsec-velocity-8",
  "type": "Remark",
  "number": "1.1.3",
  "title": "",
  "body": " By the way, this is a good time to mention that in physics, things have units. In this case, the position is measured in meters (m), time is measured in seconds (s), and velocity is measured in meters per second (m\/s). There is actually a ton of things you can do by just analyzing the units of a problem. I'll include an appendix on dimensional analysis in the near future.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

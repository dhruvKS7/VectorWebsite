/*
 * Dhruv K. Saligram
 * 12/1/18
 * This program finds the solutions to vector equations using a website setup
 * This class deals with solving the equations and changing elements on the page as the user interacts with the website
 */

/*Declarations below:*/
var threedCrossProductTester = false;
var twodDotProductTester = false;
var threedDotProductTester = false;
var threedAngleBetweenTester = false;
var threedMagnitudeTester = false;
var twodAngleBetweenTester = false;
var twodMagnitudeTester = false;
var z1Tester = true;
var x2Tester = true;
var y2Tester = true;
var z2Tester = true;
var z1ExtraSpace = false;
var x2ExtraSpace = false;
var y2ExtraSpace = false;
var z2ExtraSpace = false;
var breakLineTester = false;
var spaces;
var finalX1;
var finalX2;
var finalY1;
var finalY2;
var finalZ1;
var finalZ2;

/*Creating function to run as soon as website loads below:*/
function openSesame() {
    /*Setting every element with one of the following IDs to be invisible when the webpage loads below:*/
    document.getElementById("x1").style.visibility = "hidden";
    document.getElementById("x1Text").style.visibility = "hidden";
    document.getElementById("y1").style.visibility = "hidden";
    document.getElementById("y1Text").style.visibility = "hidden";
    document.getElementById("z1").style.visibility = "hidden";
    document.getElementById("z1Text").style.visibility = "hidden";
    document.getElementById("x2").style.visibility = "hidden";
    document.getElementById("x2Text").style.visibility = "hidden";
    document.getElementById("y2").style.visibility = "hidden";
    document.getElementById("y2Text").style.visibility = "hidden";
    document.getElementById("z2").style.visibility = "hidden";
    document.getElementById("z2Text").style.visibility = "hidden";
    document.getElementById("submitButton").style.visibility = "hidden";
    document.getElementById("lineBreak1").style.visibility = "hidden";
    document.getElementById("lineBreak2").style.visibility = "hidden";
    document.getElementById("lineBreak3").style.visibility = "hidden";
    document.getElementById("magnitudeThree").style.visibility = "hidden";
    document.getElementById("magnitudeTwo").style.visibility = "hidden";
    document.getElementById("angleBetween").style.visibility = "hidden";
    document.getElementById("crossProductThree").style.visibility = "hidden";
    document.getElementById("dotProductThree").style.visibility = "hidden";
    document.getElementById("dotProductTwo").style.visibility = "hidden";
    document.getElementById("downArrowPic").style.visibility = "hidden";
    document.getElementById("answerText").style.visibility = "hidden";
    document.getElementById("entries").style.visibility = "hidden";
    spaces = 0;
}
/*Creating a function to recognize when the user has clicked the 2D Angle Between button below:*/
function twodAngleBetween() {
    /*Making some elements appear and others disappear to fit the page's needs below:*/
    /*document.getElementById("lineBreak1").style.visibility = "visible";*/
    document.getElementById("lineBreak2").style.visibility = "visible";
    document.getElementById("lineBreak3").style.visibility = "visible";
    document.getElementById("submitButton").style.visibility = "visible";
    document.getElementById("magnitudeThree").style.visibility = "hidden";
    document.getElementById("magnitudeTwo").style.visibility = "hidden";
    document.getElementById("angleBetween").style.visibility = "visible";
    document.getElementById("crossProductThree").style.visibility = "hidden";
    document.getElementById("dotProductThree").style.visibility = "hidden";
    document.getElementById("dotProductTwo").style.visibility = "hidden";
    document.getElementById("downArrowPic").style.visibility = "hidden";
    document.getElementById("answerText").style.visibility = "hidden";
    document.getElementById("entries").style.visibility = "visible";
    threedCrossProductTester = false;
    twodDotProductTester = false;
    threedDotProductTester = false;
    threedAngleBetweenTester = false;
    threedMagnitudeTester = false;
    twodAngleBetweenTester = true;
    twodMagnitudeTester = false;
    document.getElementById("answer").innerHTML = "";
    
    /*Creating a certain amount of spaces between the page's image and the first line to make the page look better below:*/
    /*
    if (spaces === 0) {
        Creating spaces a certain number of times below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    } else {
        Deleting every instance of the spaces below:
        var elem = document.getElementsByClassName("breakers");
        while (elem.length > 0) {
            elem[0].parentNode.removeChild(elem[0]);
        }
        spaces = 0;
        Recreating each space to fit the specific page below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    }
    */
    
    
    /*Removing all major elements from the page below:*/
    var x1TextElem = document.getElementById("x1Text");
    x1TextElem.parentNode.removeChild(x1TextElem);
    var y1TextElem = document.getElementById("y1Text");
    y1TextElem.parentNode.removeChild(y1TextElem);
    var x1Elem = document.getElementById("x1");
    x1Elem.parentNode.removeChild(x1Elem);
    var y1Elem = document.getElementById("y1");
    y1Elem.parentNode.removeChild(y1Elem);

    var z1TextElem;
    var z1Elem;
    var x2TextElem;
    var x2Elem;
    var y2TextElem;
    var y2Elem;
    var z2TextElem;
    var z2Elem;

    /*Testing to see which elements are already on the page in order to delete on the ones that exist below:*/
    if (z1Tester === true) {
        z1TextElem = document.getElementById("z1Text");
        z1TextElem.parentNode.removeChild(z1TextElem);
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1Tester = false;
    }

    if (x2Tester === true) {
        x2TextElem = document.getElementById("x2Text");
        x2TextElem.parentNode.removeChild(x2TextElem);
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2Tester = false;
    }

    if (y2Tester === true) {
        y2TextElem = document.getElementById("y2Text");
        y2TextElem.parentNode.removeChild(y2TextElem);
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2Tester = false;
    }

    if (z2Tester === true) {
        z2TextElem = document.getElementById("z2Text");
        z2TextElem.parentNode.removeChild(z2TextElem);
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2Tester = false;
    }

    if (z1ExtraSpace === true) {
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1ExtraSpace = false;
    }

    if (x2ExtraSpace === true) {
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2ExtraSpace = false;
    }

    if (y2ExtraSpace === true) {
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2ExtraSpace = false;
    }

    if (z2ExtraSpace === true) {
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2ExtraSpace = false;
    }

    var breakLineElem;
    if (breakLineTester === true) {
        breakLineElem = document.getElementsByClassName("breakLines");
        while (breakLineElem.length > 0) {
            breakLineElem[0].parentNode.removeChild(breakLineElem[0]);
        }
        breakLineTester = false;
    }

    var firstEntryDivision = document.getElementById("firstEntry");
    var secondEntryDivision = document.getElementById("secondEntry");

    /*Readding all necessary elements to the page below:*/
    var x1TextCreation = document.createElement("span");
    var x1Text = document.createTextNode("-     X1: ");
    x1TextCreation.appendChild(x1Text);
    x1TextCreation.setAttribute("id", "x1Text");
    firstEntryDivision.appendChild(x1TextCreation);
    var x1EntryCreation = document.createElement("input");
    x1EntryCreation.setAttribute("type", "text");
    x1EntryCreation.setAttribute("id", "x1");
    x1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(x1EntryCreation);

    var breakx1 = document.createElement("br");
    breakx1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breakx1);

    var y1TextCreation = document.createElement("span");
    var y1Text = document.createTextNode("-     Y1: ");
    y1TextCreation.appendChild(y1Text);
    y1TextCreation.setAttribute("id", "y1Text");
    firstEntryDivision.appendChild(y1TextCreation);
    var y1EntryCreation = document.createElement("input");
    y1EntryCreation.setAttribute("type", "text");
    y1EntryCreation.setAttribute("id", "y1");
    y1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(y1EntryCreation);

    var x2TextCreation = document.createElement("span");
    var x2Text = document.createTextNode("-     X2: ");
    x2TextCreation.appendChild(x2Text);
    x2TextCreation.setAttribute("id", "x2Text");
    secondEntryDivision.appendChild(x2TextCreation);
    var x2EntryCreation = document.createElement("input");
    x2EntryCreation.setAttribute("type", "text");
    x2EntryCreation.setAttribute("id", "x2");
    x2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(x2EntryCreation);

    x2Tester = true;

    var breakx2 = document.createElement("br");
    breakx2.setAttribute("class", "breakLines");
    breakLineTester = true;
    secondEntryDivision.appendChild(breakx2);

    var y2TextCreation = document.createElement("span");
    var y2Text = document.createTextNode("-     Y2: ");
    y2TextCreation.appendChild(y2Text);
    y2TextCreation.setAttribute("id", "y2Text");
    secondEntryDivision.appendChild(y2TextCreation);
    var y2EntryCreation = document.createElement("input");
    y2EntryCreation.setAttribute("type", "text");
    y2EntryCreation.setAttribute("id", "y2");
    y2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(y2EntryCreation);

    y2Tester = true;

    /*Creating dummy elements to allow the program to pass some values for the unneeded variables when calculating below:*/
    var extraStorageSpace = document.getElementById("extraStorage");

    var z1EntryCreation = document.createElement("input");
    z1EntryCreation.setAttribute("type", "text");
    z1EntryCreation.setAttribute("id", "z1");
    z1EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(z1EntryCreation);
    document.getElementById("z1").style.visibility = "hidden";
    z1ExtraSpace = true;

    var z2EntryCreation = document.createElement("input");
    z2EntryCreation.setAttribute("type", "text");
    z2EntryCreation.setAttribute("id", "z2");
    z2EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(z2EntryCreation);
    document.getElementById("z2").style.visibility = "hidden";
    z2ExtraSpace = true;
}
/*Creating a function to recognize when the user has clicked the 2D Magnitude button below:*/
function twodMagnitude() {
    /*Making some elements appear and others disappear to fit the page's needs below:*/
    /*document.getElementById("lineBreak1").style.visibility = "visible";*/
    document.getElementById("lineBreak2").style.visibility = "hidden";
    document.getElementById("lineBreak3").style.visibility = "visible";
    document.getElementById("submitButton").style.visibility = "visible";
    document.getElementById("magnitudeThree").style.visibility = "hidden";
    document.getElementById("magnitudeTwo").style.visibility = "visible";
    document.getElementById("angleBetween").style.visibility = "hidden";
    document.getElementById("crossProductThree").style.visibility = "hidden";
    document.getElementById("dotProductThree").style.visibility = "hidden";
    document.getElementById("dotProductTwo").style.visibility = "hidden";
    document.getElementById("downArrowPic").style.visibility = "hidden";
    document.getElementById("answerText").style.visibility = "hidden";
    document.getElementById("entries").style.visibility = "visible";
    threedCrossProductTester = false;
    twodDotProductTester = false;
    threedDotProductTester = false;
    threedAngleBetweenTester = false;
    threedMagnitudeTester = false;
    twodAngleBetweenTester = false;
    twodMagnitudeTester = true;
    document.getElementById("answer").innerHTML = "";
    /*Creating a certain amount of spaces between the page's image and the first line to make the page look better below:*/
    /*
    if (spaces === 0) {
        Creating spaces a certain number of times below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    } else {
        Deleting every instance of the spaces below:
        var elem = document.getElementsByClassName("breakers");
        while (elem.length > 0) {
            elem[0].parentNode.removeChild(elem[0]);
        }
        spaces = 0;
        Recreating each space to fit the specific page below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    }
    */

    /*Removing all major elements from the page below:*/
    var x1TextElem = document.getElementById("x1Text");
    x1TextElem.parentNode.removeChild(x1TextElem);
    var y1TextElem = document.getElementById("y1Text");
    y1TextElem.parentNode.removeChild(y1TextElem);
    var x1Elem = document.getElementById("x1");
    x1Elem.parentNode.removeChild(x1Elem);
    var y1Elem = document.getElementById("y1");
    y1Elem.parentNode.removeChild(y1Elem);

    var z1TextElem;
    var z1Elem;
    var x2TextElem;
    var x2Elem;
    var y2TextElem;
    var y2Elem;
    var z2TextElem;
    var z2Elem;

    /*Testing to see which elements are already on the page in order to delete on the ones that exist below:*/
    if (z1Tester === true) {
        z1TextElem = document.getElementById("z1Text");
        z1TextElem.parentNode.removeChild(z1TextElem);
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1Tester = false;
    }

    if (x2Tester === true) {
        x2TextElem = document.getElementById("x2Text");
        x2TextElem.parentNode.removeChild(x2TextElem);
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2Tester = false;
    }

    if (y2Tester === true) {
        y2TextElem = document.getElementById("y2Text");
        y2TextElem.parentNode.removeChild(y2TextElem);
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2Tester = false;
    }

    if (z2Tester === true) {
        z2TextElem = document.getElementById("z2Text");
        z2TextElem.parentNode.removeChild(z2TextElem);
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2Tester = false;
    }

    if (z1ExtraSpace === true) {
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1ExtraSpace = false;
    }

    if (x2ExtraSpace === true) {
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2ExtraSpace = false;
    }

    if (y2ExtraSpace === true) {
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2ExtraSpace = false;
    }

    if (z2ExtraSpace === true) {
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2ExtraSpace = false;
    }

    var breakLineElem;
    if (breakLineTester === true) {
        breakLineElem = document.getElementsByClassName("breakLines");
        while (breakLineElem.length > 0) {
            breakLineElem[0].parentNode.removeChild(breakLineElem[0]);
        }
        breakLineTester = false;
    }

    var firstEntryDivision = document.getElementById("firstEntry");

    /*Readding all necessary elements to the page below:*/
    var x1TextCreation = document.createElement("span");
    var x1Text = document.createTextNode("-     X1: ");
    x1TextCreation.appendChild(x1Text);
    x1TextCreation.setAttribute("id", "x1Text");
    firstEntryDivision.appendChild(x1TextCreation);
    var x1EntryCreation = document.createElement("input");
    x1EntryCreation.setAttribute("type", "text");
    x1EntryCreation.setAttribute("id", "x1");
    x1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(x1EntryCreation);

    var breakx1 = document.createElement("br");
    breakx1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breakx1);

    var y1TextCreation = document.createElement("span");
    var y1Text = document.createTextNode("-     Y1: ");
    y1TextCreation.appendChild(y1Text);
    y1TextCreation.setAttribute("id", "y1Text");
    firstEntryDivision.appendChild(y1TextCreation);
    var y1EntryCreation = document.createElement("input");
    y1EntryCreation.setAttribute("type", "text");
    y1EntryCreation.setAttribute("id", "y1");
    y1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(y1EntryCreation);

    /*Creating dummy elements to allow the program to pass some values for the unneeded variables when calculating below:*/
    var extraStorageSpace = document.getElementById("extraStorage");

    var z1EntryCreation = document.createElement("input");
    z1EntryCreation.setAttribute("type", "text");
    z1EntryCreation.setAttribute("id", "z1");
    z1EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(z1EntryCreation);
    document.getElementById("z1").style.visibility = "hidden";
    z1ExtraSpace = true;

    var x2EntryCreation = document.createElement("input");
    x2EntryCreation.setAttribute("type", "text");
    x2EntryCreation.setAttribute("id", "x2");
    x2EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(x2EntryCreation);
    document.getElementById("x2").style.visibility = "hidden";
    x2ExtraSpace = true;

    var y2EntryCreation = document.createElement("input");
    y2EntryCreation.setAttribute("type", "text");
    y2EntryCreation.setAttribute("id", "y2");
    y2EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(y2EntryCreation);
    document.getElementById("y2").style.visibility = "hidden";
    y2ExtraSpace = true;

    var z2EntryCreation = document.createElement("input");
    z2EntryCreation.setAttribute("type", "text");
    z2EntryCreation.setAttribute("id", "z2");
    z2EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(z2EntryCreation);
    document.getElementById("z2").style.visibility = "hidden";
    z2ExtraSpace = true;
}
/*Creating a function to recognize when the user has clicked the 3D Angle Between button below:*/
function threedAngleBetween() {
    /*Making some elements appear and others disappear to fit the page's needs below:*/
    /*document.getElementById("lineBreak1").style.visibility = "visible";*/
    document.getElementById("lineBreak2").style.visibility = "visible";
    document.getElementById("lineBreak3").style.visibility = "visible";
    document.getElementById("submitButton").style.visibility = "visible";
    document.getElementById("magnitudeThree").style.visibility = "hidden";
    document.getElementById("magnitudeTwo").style.visibility = "hidden";
    document.getElementById("angleBetween").style.visibility = "visible";
    document.getElementById("crossProductThree").style.visibility = "hidden";
    document.getElementById("dotProductThree").style.visibility = "hidden";
    document.getElementById("dotProductTwo").style.visibility = "hidden";
    document.getElementById("downArrowPic").style.visibility = "hidden";
    document.getElementById("answerText").style.visibility = "hidden";
    document.getElementById("entries").style.visibility = "visible";
    threedCrossProductTester = false;
    twodDotProductTester = false;
    threedDotProductTester = false;
    threedAngleBetweenTester = true;
    threedMagnitudeTester = false;
    twodAngleBetweenTester = false;
    twodMagnitudeTester = false;
    document.getElementById("answer").innerHTML = "";
    /*Creating a certain amount of spaces between the page's image and the first line to make the page look better below:*/
    /*
    if (spaces === 0) {
        Creating spaces a certain number of times below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    } else {
        Deleting every instance of the spaces below:
        var elem = document.getElementsByClassName("breakers");
        while (elem.length > 0) {
            elem[0].parentNode.removeChild(elem[0]);
        }
        spaces = 0;
        Recreating each space to fit the specific page below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    }
    */

    /*Removing all major elements from the page below:*/
    var x1TextElem = document.getElementById("x1Text");
    x1TextElem.parentNode.removeChild(x1TextElem);
    var y1TextElem = document.getElementById("y1Text");
    y1TextElem.parentNode.removeChild(y1TextElem);
    var x1Elem = document.getElementById("x1");
    x1Elem.parentNode.removeChild(x1Elem);
    var y1Elem = document.getElementById("y1");
    y1Elem.parentNode.removeChild(y1Elem);

    var z1TextElem;
    var z1Elem;
    var x2TextElem;
    var x2Elem;
    var y2TextElem;
    var y2Elem;
    var z2TextElem;
    var z2Elem;

    /*Testing to see which elements are already on the page in order to delete on the ones that exist below:*/
    if (z1Tester === true) {
        z1TextElem = document.getElementById("z1Text");
        z1TextElem.parentNode.removeChild(z1TextElem);
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1Tester = false;
    }

    if (x2Tester === true) {
        x2TextElem = document.getElementById("x2Text");
        x2TextElem.parentNode.removeChild(x2TextElem);
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2Tester = false;
    }

    if (y2Tester === true) {
        y2TextElem = document.getElementById("y2Text");
        y2TextElem.parentNode.removeChild(y2TextElem);
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2Tester = false;
    }

    if (z2Tester === true) {
        z2TextElem = document.getElementById("z2Text");
        z2TextElem.parentNode.removeChild(z2TextElem);
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2Tester = false;
    }

    if (z1ExtraSpace === true) {
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1ExtraSpace = false;
    }

    if (x2ExtraSpace === true) {
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2ExtraSpace = false;
    }

    if (y2ExtraSpace === true) {
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2ExtraSpace = false;
    }

    if (z2ExtraSpace === true) {
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2ExtraSpace = false;
    }

    var breakLineElem;
    if (breakLineTester === true) {
        breakLineElem = document.getElementsByClassName("breakLines");
        while (breakLineElem.length > 0) {
            breakLineElem[0].parentNode.removeChild(breakLineElem[0]);
        }
        breakLineTester = false;
    }

    var firstEntryDivision = document.getElementById("firstEntry");
    var secondEntryDivision = document.getElementById("secondEntry");

    /*Readding all necessary elements to the page below:*/
    var x1TextCreation = document.createElement("span");
    var x1Text = document.createTextNode("-     X1: ");
    x1TextCreation.appendChild(x1Text);
    x1TextCreation.setAttribute("id", "x1Text");
    firstEntryDivision.appendChild(x1TextCreation);
    var x1EntryCreation = document.createElement("input");
    x1EntryCreation.setAttribute("type", "text");
    x1EntryCreation.setAttribute("id", "x1");
    x1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(x1EntryCreation);

    var breakx1 = document.createElement("br");
    breakx1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breakx1);

    var y1TextCreation = document.createElement("span");
    var y1Text = document.createTextNode("-     Y1: ");
    y1TextCreation.appendChild(y1Text);
    y1TextCreation.setAttribute("id", "y1Text");
    firstEntryDivision.appendChild(y1TextCreation);
    var y1EntryCreation = document.createElement("input");
    y1EntryCreation.setAttribute("type", "text");
    y1EntryCreation.setAttribute("id", "y1");
    y1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(y1EntryCreation);

    var breaky1 = document.createElement("br");
    breaky1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breaky1);

    var z1TextCreation = document.createElement("span");
    var z1Text = document.createTextNode("-     Z1: ");
    z1TextCreation.appendChild(z1Text);
    z1TextCreation.setAttribute("id", "z1Text");
    firstEntryDivision.appendChild(z1TextCreation);
    var z1EntryCreation = document.createElement("input");
    z1EntryCreation.setAttribute("type", "text");
    z1EntryCreation.setAttribute("id", "z1");
    z1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(z1EntryCreation);

    z1Tester = true;

    var x2TextCreation = document.createElement("span");
    var x2Text = document.createTextNode("-     X2: ");
    x2TextCreation.appendChild(x2Text);
    x2TextCreation.setAttribute("id", "x2Text");
    secondEntryDivision.appendChild(x2TextCreation);
    var x2EntryCreation = document.createElement("input");
    x2EntryCreation.setAttribute("type", "text");
    x2EntryCreation.setAttribute("id", "x2");
    x2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(x2EntryCreation);

    x2Tester = true;

    var breakx2 = document.createElement("br");
    breakx2.setAttribute("class", "breakLines");
    breakLineTester = true;
    secondEntryDivision.appendChild(breakx2);

    var y2TextCreation = document.createElement("span");
    var y2Text = document.createTextNode("-     Y2: ");
    y2TextCreation.appendChild(y2Text);
    y2TextCreation.setAttribute("id", "y2Text");
    secondEntryDivision.appendChild(y2TextCreation);
    var y2EntryCreation = document.createElement("input");
    y2EntryCreation.setAttribute("type", "text");
    y2EntryCreation.setAttribute("id", "y2");
    y2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(y2EntryCreation);

    y2Tester = true;

    var breaky2 = document.createElement("br");
    breaky2.setAttribute("class", "breakLines");
    breakLineTester = true;
    secondEntryDivision.appendChild(breaky2);

    var z2TextCreation = document.createElement("span");
    var z2Text = document.createTextNode("-     Z2: ");
    z2TextCreation.appendChild(z2Text);
    z2TextCreation.setAttribute("id", "z2Text");
    secondEntryDivision.appendChild(z2TextCreation);
    var z2EntryCreation = document.createElement("input");
    z2EntryCreation.setAttribute("type", "text");
    z2EntryCreation.setAttribute("id", "z2");
    z2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(z2EntryCreation);

    z2Tester = true;
}
/*Creating a function to recognize when the user has clicked the 3D Magnitude button below:*/
function threedMagnitude() {
    /*Making some elements appear and others disappear to fit the page's needs below:*/
    /*document.getElementById("lineBreak1").style.visibility = "visible";*/
    document.getElementById("lineBreak2").style.visibility = "hidden";
    document.getElementById("lineBreak3").style.visibility = "visible";
    document.getElementById("submitButton").style.visibility = "visible";
    document.getElementById("magnitudeThree").style.visibility = "visible";
    document.getElementById("magnitudeTwo").style.visibility = "hidden";
    document.getElementById("angleBetween").style.visibility = "hidden";
    document.getElementById("crossProductThree").style.visibility = "hidden";
    document.getElementById("dotProductThree").style.visibility = "hidden";
    document.getElementById("dotProductTwo").style.visibility = "hidden";
    document.getElementById("downArrowPic").style.visibility = "hidden";
    document.getElementById("answerText").style.visibility = "hidden";
    document.getElementById("entries").style.visibility = "visible";
    threedCrossProductTester = false;
    twodDotProductTester = false;
    threedDotProductTester = false;
    threedAngleBetweenTester = false;
    threedMagnitudeTester = true;
    twodAngleBetweenTester = false;
    twodMagnitudeTester = false;
    document.getElementById("answer").innerHTML = "";
    /*Creating a certain amount of spaces between the page's image and the first line to make the page look better below:*/
   /*
    if (spaces === 0) {
        Creating spaces a certain number of times below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    } else {
        Deleting every instance of the spaces below:
        var elem = document.getElementsByClassName("breakers");
        while (elem.length > 0) {
            elem[0].parentNode.removeChild(elem[0]);
        }
        spaces = 0;
        Recreating each space to fit the specific page below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    }
    */

    /*Removing all major elements from the page below:*/
    var x1TextElem = document.getElementById("x1Text");
    x1TextElem.parentNode.removeChild(x1TextElem);
    var y1TextElem = document.getElementById("y1Text");
    y1TextElem.parentNode.removeChild(y1TextElem);
    var x1Elem = document.getElementById("x1");
    x1Elem.parentNode.removeChild(x1Elem);
    var y1Elem = document.getElementById("y1");
    y1Elem.parentNode.removeChild(y1Elem);

    var z1TextElem;
    var z1Elem;
    var x2TextElem;
    var x2Elem;
    var y2TextElem;
    var y2Elem;
    var z2TextElem;
    var z2Elem;

    /*Testing to see which elements are already on the page in order to delete on the ones that exist below:*/
    if (z1Tester === true) {
        z1TextElem = document.getElementById("z1Text");
        z1TextElem.parentNode.removeChild(z1TextElem);
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1Tester = false;
    }

    if (x2Tester === true) {
        x2TextElem = document.getElementById("x2Text");
        x2TextElem.parentNode.removeChild(x2TextElem);
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2Tester = false;
    }

    if (y2Tester === true) {
        y2TextElem = document.getElementById("y2Text");
        y2TextElem.parentNode.removeChild(y2TextElem);
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2Tester = false;
    }

    if (z2Tester === true) {
        z2TextElem = document.getElementById("z2Text");
        z2TextElem.parentNode.removeChild(z2TextElem);
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2Tester = false;
    }

    if (z1ExtraSpace === true) {
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1ExtraSpace = false;
    }

    if (x2ExtraSpace === true) {
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2ExtraSpace = false;
    }

    if (y2ExtraSpace === true) {
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2ExtraSpace = false;
    }

    if (z2ExtraSpace === true) {
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2ExtraSpace = false;
    }

    var breakLineElem;
    if (breakLineTester === true) {
        breakLineElem = document.getElementsByClassName("breakLines");
        while (breakLineElem.length > 0) {
            breakLineElem[0].parentNode.removeChild(breakLineElem[0]);
        }
        breakLineTester = false;
    }

    var firstEntryDivision = document.getElementById("firstEntry");

    /*Readding all necessary elements to the page below:*/
    var x1TextCreation = document.createElement("span");
    var x1Text = document.createTextNode("-     X1: ");
    x1TextCreation.appendChild(x1Text);
    x1TextCreation.setAttribute("id", "x1Text");
    firstEntryDivision.appendChild(x1TextCreation);
    var x1EntryCreation = document.createElement("input");
    x1EntryCreation.setAttribute("type", "text");
    x1EntryCreation.setAttribute("id", "x1");
    x1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(x1EntryCreation);

    var breakx1 = document.createElement("br");
    breakx1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breakx1);

    var y1TextCreation = document.createElement("span");
    var y1Text = document.createTextNode("-     Y1: ");
    y1TextCreation.appendChild(y1Text);
    y1TextCreation.setAttribute("id", "y1Text");
    firstEntryDivision.appendChild(y1TextCreation);
    var y1EntryCreation = document.createElement("input");
    y1EntryCreation.setAttribute("type", "text");
    y1EntryCreation.setAttribute("id", "y1");
    y1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(y1EntryCreation);

    var breaky1 = document.createElement("br");
    breaky1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breaky1);

    var z1TextCreation = document.createElement("span");
    var z1Text = document.createTextNode("-     Z1: ");
    z1TextCreation.appendChild(z1Text);
    z1TextCreation.setAttribute("id", "z1Text");
    firstEntryDivision.appendChild(z1TextCreation);
    var z1EntryCreation = document.createElement("input");
    z1EntryCreation.setAttribute("type", "text");
    z1EntryCreation.setAttribute("id", "z1");
    z1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(z1EntryCreation);

    z1Tester = true;

    var extraStorageSpace = document.getElementById("extraStorage");

    var x2EntryCreation = document.createElement("input");
    x2EntryCreation.setAttribute("type", "text");
    x2EntryCreation.setAttribute("id", "x2");
    x2EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(x2EntryCreation);
    document.getElementById("x2").style.visibility = "hidden";
    x2ExtraSpace = true;

    var y2EntryCreation = document.createElement("input");
    y2EntryCreation.setAttribute("type", "text");
    y2EntryCreation.setAttribute("id", "y2");
    y2EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(y2EntryCreation);
    document.getElementById("y2").style.visibility = "hidden";
    y2ExtraSpace = true;

    var z2EntryCreation = document.createElement("input");
    z2EntryCreation.setAttribute("type", "text");
    z2EntryCreation.setAttribute("id", "z2");
    z2EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(z2EntryCreation);
    document.getElementById("z2").style.visibility = "hidden";
    z2ExtraSpace = true;
}
/*Creating a function to recognize when the user has clicked the 2D Dot Product button below:*/
function twodDotProduct() {
    /*Making some elements appear and others disappear to fit the page's needs below:*/
    /*document.getElementById("lineBreak1").style.visibility = "visible";*/
    document.getElementById("lineBreak2").style.visibility = "visible";
    document.getElementById("lineBreak3").style.visibility = "visible";
    document.getElementById("submitButton").style.visibility = "visible";
    document.getElementById("magnitudeThree").style.visibility = "hidden";
    document.getElementById("magnitudeTwo").style.visibility = "hidden";
    document.getElementById("angleBetween").style.visibility = "hidden";
    document.getElementById("crossProductThree").style.visibility = "hidden";
    document.getElementById("dotProductThree").style.visibility = "hidden";
    document.getElementById("dotProductTwo").style.visibility = "visible";
    document.getElementById("downArrowPic").style.visibility = "hidden";
    document.getElementById("answerText").style.visibility = "hidden";
    document.getElementById("entries").style.visibility = "visible";
    threedCrossProductTester = false;
    twodDotProductTester = true;
    threedDotProductTester = false;
    threedAngleBetweenTester = false;
    threedMagnitudeTester = false;
    twodAngleBetweenTester = false;
    twodMagnitudeTester = false;
    document.getElementById("answer").innerHTML = "";
    /*Creating a certain amount of spaces between the page's image and the first line to make the page look better below:*/
    /*
    if (spaces === 0) {
        Creating spaces a certain number of times below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    } else {
        Deleting every instance of the spaces below:
        var elem = document.getElementsByClassName("breakers");
        while (elem.length > 0) {
            elem[0].parentNode.removeChild(elem[0]);
        }
        spaces = 0;
        Recreating each space to fit the specific page below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    }
    */

    /*Removing all major elements from the page below:*/
    var x1TextElem = document.getElementById("x1Text");
    x1TextElem.parentNode.removeChild(x1TextElem);
    var y1TextElem = document.getElementById("y1Text");
    y1TextElem.parentNode.removeChild(y1TextElem);
    var x1Elem = document.getElementById("x1");
    x1Elem.parentNode.removeChild(x1Elem);
    var y1Elem = document.getElementById("y1");
    y1Elem.parentNode.removeChild(y1Elem);

    var z1TextElem;
    var z1Elem;
    var x2TextElem;
    var x2Elem;
    var y2TextElem;
    var y2Elem;
    var z2TextElem;
    var z2Elem;

    /*Testing to see which elements are already on the page in order to delete on the ones that exist below:*/
    if (z1Tester === true) {
        z1TextElem = document.getElementById("z1Text");
        z1TextElem.parentNode.removeChild(z1TextElem);
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1Tester = false;
    }

    if (x2Tester === true) {
        x2TextElem = document.getElementById("x2Text");
        x2TextElem.parentNode.removeChild(x2TextElem);
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2Tester = false;
    }

    if (y2Tester === true) {
        y2TextElem = document.getElementById("y2Text");
        y2TextElem.parentNode.removeChild(y2TextElem);
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2Tester = false;
    }

    if (z2Tester === true) {
        z2TextElem = document.getElementById("z2Text");
        z2TextElem.parentNode.removeChild(z2TextElem);
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2Tester = false;
    }

    if (z1ExtraSpace === true) {
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1ExtraSpace = false;
    }

    if (x2ExtraSpace === true) {
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2ExtraSpace = false;
    }

    if (y2ExtraSpace === true) {
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2ExtraSpace = false;
    }

    if (z2ExtraSpace === true) {
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2ExtraSpace = false;
    }

    var breakLineElem;
    if (breakLineTester === true) {
        breakLineElem = document.getElementsByClassName("breakLines");
        while (breakLineElem.length > 0) {
            breakLineElem[0].parentNode.removeChild(breakLineElem[0]);
        }
        breakLineTester = false;
    }

    var firstEntryDivision = document.getElementById("firstEntry");
    var secondEntryDivision = document.getElementById("secondEntry");

    /*Readding all necessary elements to the page below:*/
    var x1TextCreation = document.createElement("span");
    var x1Text = document.createTextNode("-     X1: ");
    x1TextCreation.appendChild(x1Text);
    x1TextCreation.setAttribute("id", "x1Text");
    firstEntryDivision.appendChild(x1TextCreation);
    var x1EntryCreation = document.createElement("input");
    x1EntryCreation.setAttribute("type", "text");
    x1EntryCreation.setAttribute("id", "x1");
    x1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(x1EntryCreation);

    var breakx1 = document.createElement("br");
    breakx1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breakx1);

    var y1TextCreation = document.createElement("span");
    var y1Text = document.createTextNode("-     Y1: ");
    y1TextCreation.appendChild(y1Text);
    y1TextCreation.setAttribute("id", "y1Text");
    firstEntryDivision.appendChild(y1TextCreation);
    var y1EntryCreation = document.createElement("input");
    y1EntryCreation.setAttribute("type", "text");
    y1EntryCreation.setAttribute("id", "y1");
    y1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(y1EntryCreation);

    var x2TextCreation = document.createElement("span");
    var x2Text = document.createTextNode("-     X2: ");
    x2TextCreation.appendChild(x2Text);
    x2TextCreation.setAttribute("id", "x2Text");
    secondEntryDivision.appendChild(x2TextCreation);
    var x2EntryCreation = document.createElement("input");
    x2EntryCreation.setAttribute("type", "text");
    x2EntryCreation.setAttribute("id", "x2");
    x2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(x2EntryCreation);

    x2Tester = true;

    var breakx2 = document.createElement("br");
    breakx2.setAttribute("class", "breakLines");
    breakLineTester = true;
    secondEntryDivision.appendChild(breakx2);

    var y2TextCreation = document.createElement("span");
    var y2Text = document.createTextNode("-     Y2: ");
    y2TextCreation.appendChild(y2Text);
    y2TextCreation.setAttribute("id", "y2Text");
    secondEntryDivision.appendChild(y2TextCreation);
    var y2EntryCreation = document.createElement("input");
    y2EntryCreation.setAttribute("type", "text");
    y2EntryCreation.setAttribute("id", "y2");
    y2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(y2EntryCreation);

    y2Tester = true;

    /*Creating dummy elements to allow the program to pass some values for the unneeded variables when calculating below:*/
    var extraStorageSpace = document.getElementById("extraStorage");

    var z1EntryCreation = document.createElement("input");
    z1EntryCreation.setAttribute("type", "text");
    z1EntryCreation.setAttribute("id", "z1");
    z1EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(z1EntryCreation);
    document.getElementById("z1").style.visibility = "hidden";
    z1ExtraSpace = true;

    var z2EntryCreation = document.createElement("input");
    z2EntryCreation.setAttribute("type", "text");
    z2EntryCreation.setAttribute("id", "z2");
    z2EntryCreation.setAttribute("class", "inputText");
    extraStorageSpace.appendChild(z2EntryCreation);
    document.getElementById("z2").style.visibility = "hidden";
    z2ExtraSpace = true;
}
/*Creating a function to recognize when the user has clicked the 3D Cross Product button below:*/
function threedCrossProduct() {
    /*Making some elements appear and others disappear to fit the page's needs below:*/
    /*document.getElementById("lineBreak1").style.visibility = "visible";*/
    document.getElementById("lineBreak2").style.visibility = "visible";
    document.getElementById("lineBreak3").style.visibility = "visible";
    document.getElementById("submitButton").style.visibility = "visible";
    document.getElementById("magnitudeThree").style.visibility = "hidden";
    document.getElementById("magnitudeTwo").style.visibility = "hidden";
    document.getElementById("angleBetween").style.visibility = "hidden";
    document.getElementById("crossProductThree").style.visibility = "visible";
    document.getElementById("dotProductThree").style.visibility = "hidden";
    document.getElementById("dotProductTwo").style.visibility = "hidden";
    document.getElementById("downArrowPic").style.visibility = "hidden";
    document.getElementById("answerText").style.visibility = "hidden";
    document.getElementById("entries").style.visibility = "visible";
    threedCrossProductTester = true;
    twodDotProductTester = false;
    threedDotProductTester = false;
    threedAngleBetweenTester = false;
    threedMagnitudeTester = false;
    twodAngleBetweenTester = false;
    twodMagnitudeTester = false;
    document.getElementById("answer").innerHTML = "";
    /*Creating a certain amount of spaces between the page's image and the first line to make the page look better below:*/
    /*
    if (spaces === 0) {
        Creating spaces a certain number of times below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    } else {
        Deleting every instance of the spaces below:
        var elem = document.getElementsByClassName("breakers");
        while (elem.length > 0) {
            elem[0].parentNode.removeChild(elem[0]);
        }
        spaces = 0;
        Recreating each space to fit the specific page below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    }
    */

    /*Removing all major elements from the page below:*/
    var x1TextElem = document.getElementById("x1Text");
    x1TextElem.parentNode.removeChild(x1TextElem);
    var y1TextElem = document.getElementById("y1Text");
    y1TextElem.parentNode.removeChild(y1TextElem);
    var x1Elem = document.getElementById("x1");
    x1Elem.parentNode.removeChild(x1Elem);
    var y1Elem = document.getElementById("y1");
    y1Elem.parentNode.removeChild(y1Elem);

    var z1TextElem;
    var z1Elem;
    var x2TextElem;
    var x2Elem;
    var y2TextElem;
    var y2Elem;
    var z2TextElem;
    var z2Elem;

    /*Testing to see which elements are already on the page in order to delete on the ones that exist below:*/
    if (z1Tester === true) {
        z1TextElem = document.getElementById("z1Text");
        z1TextElem.parentNode.removeChild(z1TextElem);
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1Tester = false;
    }

    if (x2Tester === true) {
        x2TextElem = document.getElementById("x2Text");
        x2TextElem.parentNode.removeChild(x2TextElem);
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2Tester = false;
    }

    if (y2Tester === true) {
        y2TextElem = document.getElementById("y2Text");
        y2TextElem.parentNode.removeChild(y2TextElem);
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2Tester = false;
    }

    if (z2Tester === true) {
        z2TextElem = document.getElementById("z2Text");
        z2TextElem.parentNode.removeChild(z2TextElem);
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2Tester = false;
    }

    if (z1ExtraSpace === true) {
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1ExtraSpace = false;
    }

    if (x2ExtraSpace === true) {
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2ExtraSpace = false;
    }

    if (y2ExtraSpace === true) {
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2ExtraSpace = false;
    }

    if (z2ExtraSpace === true) {
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2ExtraSpace = false;
    }

    var breakLineElem;
    if (breakLineTester === true) {
        breakLineElem = document.getElementsByClassName("breakLines");
        while (breakLineElem.length > 0) {
            breakLineElem[0].parentNode.removeChild(breakLineElem[0]);
        }
        breakLineTester = false;
    }

    var firstEntryDivision = document.getElementById("firstEntry");
    var secondEntryDivision = document.getElementById("secondEntry");

    /*Readding all necessary elements to the page below:*/
    var x1TextCreation = document.createElement("span");
    var x1Text = document.createTextNode("-     X1: ");
    x1TextCreation.appendChild(x1Text);
    x1TextCreation.setAttribute("id", "x1Text");
    firstEntryDivision.appendChild(x1TextCreation);
    var x1EntryCreation = document.createElement("input");
    x1EntryCreation.setAttribute("type", "text");
    x1EntryCreation.setAttribute("id", "x1");
    x1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(x1EntryCreation);

    var breakx1 = document.createElement("br");
    breakx1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breakx1);

    var y1TextCreation = document.createElement("span");
    var y1Text = document.createTextNode("-     Y1: ");
    y1TextCreation.appendChild(y1Text);
    y1TextCreation.setAttribute("id", "y1Text");
    firstEntryDivision.appendChild(y1TextCreation);
    var y1EntryCreation = document.createElement("input");
    y1EntryCreation.setAttribute("type", "text");
    y1EntryCreation.setAttribute("id", "y1");
    y1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(y1EntryCreation);

    var breaky1 = document.createElement("br");
    breaky1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breaky1);

    var z1TextCreation = document.createElement("span");
    var z1Text = document.createTextNode("-     Z1: ");
    z1TextCreation.appendChild(z1Text);
    z1TextCreation.setAttribute("id", "z1Text");
    firstEntryDivision.appendChild(z1TextCreation);
    var z1EntryCreation = document.createElement("input");
    z1EntryCreation.setAttribute("type", "text");
    z1EntryCreation.setAttribute("id", "z1");
    z1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(z1EntryCreation);

    z1Tester = true;

    var x2TextCreation = document.createElement("span");
    var x2Text = document.createTextNode("-     X2: ");
    x2TextCreation.appendChild(x2Text);
    x2TextCreation.setAttribute("id", "x2Text");
    secondEntryDivision.appendChild(x2TextCreation);
    var x2EntryCreation = document.createElement("input");
    x2EntryCreation.setAttribute("type", "text");
    x2EntryCreation.setAttribute("id", "x2");
    x2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(x2EntryCreation);

    x2Tester = true;

    var breakx2 = document.createElement("br");
    breakx2.setAttribute("class", "breakLines");
    breakLineTester = true;
    secondEntryDivision.appendChild(breakx2);

    var y2TextCreation = document.createElement("span");
    var y2Text = document.createTextNode("-     Y2: ");
    y2TextCreation.appendChild(y2Text);
    y2TextCreation.setAttribute("id", "y2Text");
    secondEntryDivision.appendChild(y2TextCreation);
    var y2EntryCreation = document.createElement("input");
    y2EntryCreation.setAttribute("type", "text");
    y2EntryCreation.setAttribute("id", "y2");
    y2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(y2EntryCreation);

    y2Tester = true;

    var breaky2 = document.createElement("br");
    breaky2.setAttribute("class", "breakLines");
    breakLineTester = true;
    secondEntryDivision.appendChild(breaky2);

    var z2TextCreation = document.createElement("span");
    var z2Text = document.createTextNode("-     Z2: ");
    z2TextCreation.appendChild(z2Text);
    z2TextCreation.setAttribute("id", "z2Text");
    secondEntryDivision.appendChild(z2TextCreation);
    var z2EntryCreation = document.createElement("input");
    z2EntryCreation.setAttribute("type", "text");
    z2EntryCreation.setAttribute("id", "z2");
    z2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(z2EntryCreation);

    z2Tester = true;
}
/*Creating a function to recognize when the user has clicked the 3D Dot Product button below:*/
function threedDotProduct() {
    /*Making some elements appear and others disappear to fit the page's needs below:*/
    /*document.getElementById("lineBreak1").style.visibility = "visible";*/
    document.getElementById("lineBreak2").style.visibility = "visible";
    document.getElementById("lineBreak3").style.visibility = "visible";
    document.getElementById("submitButton").style.visibility = "visible";
    document.getElementById("magnitudeThree").style.visibility = "hidden";
    document.getElementById("magnitudeTwo").style.visibility = "hidden";
    document.getElementById("angleBetween").style.visibility = "hidden";
    document.getElementById("crossProductThree").style.visibility = "hidden";
    document.getElementById("dotProductThree").style.visibility = "visible";
    document.getElementById("dotProductTwo").style.visibility = "hidden";
    document.getElementById("downArrowPic").style.visibility = "hidden";
    document.getElementById("answerText").style.visibility = "hidden";
    document.getElementById("entries").style.visibility = "visible";
    threedCrossProductTester = false;
    twodDotProductTester = false;
    threedDotProductTester = true;
    threedAngleBetweenTester = false;
    threedMagnitudeTester = false;
    twodAngleBetweenTester = false;
    twodMagnitudeTester = false;
    document.getElementById("answer").innerHTML = "";
    /*Creating a certain amount of spaces between the page's image and the first line to make the page look better below:*/
    /*
    if (spaces === 0) {
        Creating spaces a certain number of times below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    } else {
        Deleting every instance of the spaces below:
        var elem = document.getElementsByClassName("breakers");
        while (elem.length > 0) {
            elem[0].parentNode.removeChild(elem[0]);
        }
        spaces = 0;
        Recreating each space to fit the specific page below:
        for (i = 0; i < 17; i++) {
            var para = document.createElement("br");
            para.setAttribute("class", "breakers");
            var element = document.getElementById("breakLines");
            element.appendChild(para);
            spaces++;
        }
    }
    */

    /*Removing all major elements from the page below:*/
    var x1TextElem = document.getElementById("x1Text");
    x1TextElem.parentNode.removeChild(x1TextElem);
    var y1TextElem = document.getElementById("y1Text");
    y1TextElem.parentNode.removeChild(y1TextElem);
    var x1Elem = document.getElementById("x1");
    x1Elem.parentNode.removeChild(x1Elem);
    var y1Elem = document.getElementById("y1");
    y1Elem.parentNode.removeChild(y1Elem);

    var z1TextElem;
    var z1Elem;
    var x2TextElem;
    var x2Elem;
    var y2TextElem;
    var y2Elem;
    var z2TextElem;
    var z2Elem;

    /*Testing to see which elements are already on the page in order to delete on the ones that exist below:*/
    if (z1Tester === true) {
        z1TextElem = document.getElementById("z1Text");
        z1TextElem.parentNode.removeChild(z1TextElem);
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1Tester = false;
    }

    if (x2Tester === true) {
        x2TextElem = document.getElementById("x2Text");
        x2TextElem.parentNode.removeChild(x2TextElem);
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2Tester = false;
    }

    if (y2Tester === true) {
        y2TextElem = document.getElementById("y2Text");
        y2TextElem.parentNode.removeChild(y2TextElem);
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2Tester = false;
    }

    if (z2Tester === true) {
        z2TextElem = document.getElementById("z2Text");
        z2TextElem.parentNode.removeChild(z2TextElem);
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2Tester = false;
    }

    if (z1ExtraSpace === true) {
        z1Elem = document.getElementById("z1");
        z1Elem.parentNode.removeChild(z1Elem);
        z1ExtraSpace = false;
    }

    if (x2ExtraSpace === true) {
        x2Elem = document.getElementById("x2");
        x2Elem.parentNode.removeChild(x2Elem);
        x2ExtraSpace = false;
    }

    if (y2ExtraSpace === true) {
        y2Elem = document.getElementById("y2");
        y2Elem.parentNode.removeChild(y2Elem);
        y2ExtraSpace = false;
    }

    if (z2ExtraSpace === true) {
        z2Elem = document.getElementById("z2");
        z2Elem.parentNode.removeChild(z2Elem);
        z2ExtraSpace = false;
    }

    var breakLineElem;
    if (breakLineTester === true) {
        breakLineElem = document.getElementsByClassName("breakLines");
        while (breakLineElem.length > 0) {
            breakLineElem[0].parentNode.removeChild(breakLineElem[0]);
        }
        breakLineTester = false;
    }

    var firstEntryDivision = document.getElementById("firstEntry");
    var secondEntryDivision = document.getElementById("secondEntry");

    /*Readding all necessary elements to the page below:*/
    var x1TextCreation = document.createElement("span");
    var x1Text = document.createTextNode("-     X1: ");
    x1TextCreation.appendChild(x1Text);
    x1TextCreation.setAttribute("id", "x1Text");
    firstEntryDivision.appendChild(x1TextCreation);
    var x1EntryCreation = document.createElement("input");
    x1EntryCreation.setAttribute("type", "text");
    x1EntryCreation.setAttribute("id", "x1");
    x1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(x1EntryCreation);

    var breakx1 = document.createElement("br");
    breakx1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breakx1);

    var y1TextCreation = document.createElement("span");
    var y1Text = document.createTextNode("-     Y1: ");
    y1TextCreation.appendChild(y1Text);
    y1TextCreation.setAttribute("id", "y1Text");
    firstEntryDivision.appendChild(y1TextCreation);
    var y1EntryCreation = document.createElement("input");
    y1EntryCreation.setAttribute("type", "text");
    y1EntryCreation.setAttribute("id", "y1");
    y1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(y1EntryCreation);

    var breaky1 = document.createElement("br");
    breaky1.setAttribute("class", "breakLines");
    breakLineTester = true;
    firstEntryDivision.appendChild(breaky1);

    var z1TextCreation = document.createElement("span");
    var z1Text = document.createTextNode("-     Z1: ");
    z1TextCreation.appendChild(z1Text);
    z1TextCreation.setAttribute("id", "z1Text");
    firstEntryDivision.appendChild(z1TextCreation);
    var z1EntryCreation = document.createElement("input");
    z1EntryCreation.setAttribute("type", "text");
    z1EntryCreation.setAttribute("id", "z1");
    z1EntryCreation.setAttribute("class", "inputText");
    firstEntryDivision.appendChild(z1EntryCreation);

    z1Tester = true;

    var x2TextCreation = document.createElement("span");
    var x2Text = document.createTextNode("-     X2: ");
    x2TextCreation.appendChild(x2Text);
    x2TextCreation.setAttribute("id", "x2Text");
    secondEntryDivision.appendChild(x2TextCreation);
    var x2EntryCreation = document.createElement("input");
    x2EntryCreation.setAttribute("type", "text");
    x2EntryCreation.setAttribute("id", "x2");
    x2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(x2EntryCreation);

    x2Tester = true;

    var breakx2 = document.createElement("br");
    breakx2.setAttribute("class", "breakLines");
    breakLineTester = true;
    secondEntryDivision.appendChild(breakx2);

    var y2TextCreation = document.createElement("span");
    var y2Text = document.createTextNode("-     Y2: ");
    y2TextCreation.appendChild(y2Text);
    y2TextCreation.setAttribute("id", "y2Text");
    secondEntryDivision.appendChild(y2TextCreation);
    var y2EntryCreation = document.createElement("input");
    y2EntryCreation.setAttribute("type", "text");
    y2EntryCreation.setAttribute("id", "y2");
    y2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(y2EntryCreation);

    y2Tester = true;

    var breaky2 = document.createElement("br");
    breaky2.setAttribute("class", "breakLines");
    breakLineTester = true;
    secondEntryDivision.appendChild(breaky2);

    var z2TextCreation = document.createElement("span");
    var z2Text = document.createTextNode("-     Z2: ");
    z2TextCreation.appendChild(z2Text);
    z2TextCreation.setAttribute("id", "z2Text");
    secondEntryDivision.appendChild(z2TextCreation);
    var z2EntryCreation = document.createElement("input");
    z2EntryCreation.setAttribute("type", "text");
    z2EntryCreation.setAttribute("id", "z2");
    z2EntryCreation.setAttribute("class", "inputText");
    secondEntryDivision.appendChild(z2EntryCreation);

    z2Tester = true;
}
/*Creating a function to recognize which variables to pass in order to solve below:*/
function calculate(x1, y1, z1, x2, y2, z2) {
    document.getElementById("downArrowPic").style.visibility = "hidden";
    if (twodDotProductTester === true) {
        twodDotProductCalculation(x1, x2, y1, y2);
    } else if (threedCrossProductTester === true) {
        threedCrossProductCalculation(x1, x2, y1, y2, z1, z2);
    } else if (threedDotProductTester === true) {
        threedDotProductCalculation(x1, x2, y1, y2, z1, z2);
    } else if (threedMagnitudeTester === true) {
        threedMagnitudeCalculation(x1, y1, z1);
    } else if (twodMagnitudeTester === true) {
        twodMagnitudeCalculation(x1, y1);
    } else if (threedAngleBetweenTester === true) {
        threedAngleBetweenCalculation(x1, x2, y1, y2, z1, z2);
    } else if (twodAngleBetweenTester === true) {
        twodAngleBetweenCalculation(x1, x2, y1, y2);
    }
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("z1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("z2").value = "";
    document.getElementById("answerText").style.visibility = "visible";
}
/*Creating a function to solve using 2D Dot Product equation below:*/
function twodDotProductCalculation(x1, x2, y1, y2) {
    var xAnswer;
    var yAnswer;
    var finalAnswer;
    finalX1 = parseInt(x1);
    finalX2 = parseInt(x2);
    finalY1 = parseInt(y1);
    finalY2 = parseInt(y2);
    xAnswer = finalX1 * finalX2;
    yAnswer = finalY1 * finalY2;
    finalAnswer = xAnswer + yAnswer;
    document.getElementById("answer").innerHTML = finalAnswer;
}
/*Creating a function to solve using 3D Dot Product equation below:*/
function threedDotProductCalculation(x1, x2, y1, y2, z1, z2) {
    var xAnswer;
    var yAnswer;
    var zAnswer;
    var finalAnswer;
    finalX1 = parseInt(x1);
    finalY1 = parseInt(y1);
    finalZ1 = parseInt(z1);
    finalX2 = parseInt(x2);
    finalY2 = parseInt(y2);
    finalZ2 = parseInt(z2);
    xAnswer = finalX1 * finalX2;
    yAnswer = finalY1 * finalY2;
    zAnswer = finalZ1 * finalZ2;
    finalAnswer = xAnswer + yAnswer + zAnswer;
    document.getElementById("answer").innerHTML = finalAnswer;
}
/*Creating a function to solve using 3D Cross Product equation below:*/
function threedCrossProductCalculation(x1, x2, y1, y2, z1, z2) {
    var xAnswer;
    var yAnswer;
    var zAnswer;
    var finalAnswer;
    finalX1 = parseInt(x1);
    finalY1 = parseInt(y1);
    finalZ1 = parseInt(z1);
    finalX2 = parseInt(x2);
    finalY2 = parseInt(y2);
    finalZ2 = parseInt(z2);
    xAnswer = finalY1 * finalZ2 - finalZ1 * finalY2;
    yAnswer = finalZ1 * finalX2 - finalX1 * finalZ2;
    zAnswer = finalX1 * finalY2 - finalY1 * finalX2;
    finalAnswer = xAnswer + ", " + yAnswer + ", " + zAnswer;
    document.getElementById("answer").innerHTML = finalAnswer;
}
/*Creating a function to solve using 3D Magnitude equation below:*/
function threedMagnitudeCalculation(x1, y1, z1) {
    var xAnswer;
    var yAnswer;
    var zAnswer;
    var finalAnswer;
    finalX1 = parseInt(x1);
    finalY1 = parseInt(y1);
    finalZ1 = parseInt(z1);
    xAnswer = Math.pow(finalX1, 2);
    yAnswer = Math.pow(finalY1, 2);
    zAnswer = Math.pow(finalZ1, 2);
    finalAnswer = xAnswer + yAnswer + zAnswer;
    finalAnswer = Math.pow(finalAnswer, 0.5);
    document.getElementById("answer").innerHTML = finalAnswer + " units";
}
/*Creating a function to solve using 2D Magnitude equation below:*/
function twodMagnitudeCalculation(x1, y1) {
    var xAnswer;
    var yAnswer;
    var finalAnswer;
    finalX1 = parseInt(x1);
    finalY1 = parseInt(y1);
    xAnswer = Math.pow(finalX1, 2);
    yAnswer = Math.pow(finalY1, 2);
    finalAnswer = xAnswer + yAnswer;
    finalAnswer = Math.pow(finalAnswer, 0.5);
    document.getElementById("answer").innerHTML = finalAnswer + " units";
}
/*Creating a function to solve using 3D Angle Between equation below:*/
function threedAngleBetweenCalculation(x1, x2, y1, y2, z1, z2) {
    var xDotProduct;
    var yDotProduct;
    var zDotProduct;
    var finalDotProduct;
    var x1Magnitude;
    var y1Magnitude;
    var z1Magnitude;
    var x2Magnitude;
    var y2Magnitude;
    var z2Magnitude;
    var firstFinalMagnitude;
    var secondFinalMagnitude;
    var finalMagnitude;
    var finalAnswer;
    finalX1 = parseInt(x1);
    finalY1 = parseInt(y1);
    finalZ1 = parseInt(z1);
    finalX2 = parseInt(x2);
    finalY2 = parseInt(y2);
    finalZ2 = parseInt(z2);
    xDotProduct = finalX1 * finalX2;
    yDotProduct = finalY1 * finalY2;
    zDotProduct = finalZ1 * finalZ2;
    finalDotProduct = xDotProduct + yDotProduct + zDotProduct;
    x1Magnitude = finalX1;
    x1Magnitude = Math.pow(x1Magnitude, 2);
    y1Magnitude = finalY1;
    y1Magnitude = Math.pow(y1Magnitude, 2);
    z1Magnitude = finalZ1;
    z1Magnitude = Math.pow(z1Magnitude, 2);
    x2Magnitude = finalX2;
    x2Magnitude = Math.pow(x2Magnitude, 2);
    y2Magnitude = finalY2;
    y2Magnitude = Math.pow(y2Magnitude, 2);
    z2Magnitude = finalZ2;
    z2Magnitude = Math.pow(z2Magnitude, 2);
    firstFinalMagnitude = x1Magnitude + y1Magnitude + z1Magnitude;
    firstFinalMagnitude = Math.pow(firstFinalMagnitude, 0.5);
    secondFinalMagnitude = x2Magnitude + y2Magnitude + z2Magnitude;
    secondFinalMagnitude = Math.pow(secondFinalMagnitude, 0.5);
    finalMagnitude = firstFinalMagnitude * secondFinalMagnitude;
    finalAnswer = finalDotProduct / finalMagnitude;
    finalAnswer = Math.acos(finalAnswer);
    finalAnswer = finalAnswer * 180 / Math.PI;
    finalAnswer = Math.floor(finalAnswer * 1000)/1000;
    document.getElementById("answer").innerHTML = finalAnswer + "°";
}
/*Creating a function to solve using 2D Angle Between equation below:*/
function twodAngleBetweenCalculation(x1, x2, y1, y2) {
    var xDotProduct;
    var yDotProduct;
    var finalDotProduct;
    var x1Magnitude;
    var y1Magnitude;
    var x2Magnitude;
    var y2Magnitude;
    var firstFinalMagnitude;
    var secondFinalMagnitude;
    var finalMagnitude;
    var finalAnswer;
    finalX1 = parseInt(x1);
    finalY1 = parseInt(y1);
    finalX2 = parseInt(x2);
    finalY2 = parseInt(y2);
    xDotProduct = finalX1 * finalX2;
    yDotProduct = finalY1 * finalY2;
    finalDotProduct = xDotProduct + yDotProduct;
    x1Magnitude = finalX1;
    x1Magnitude = Math.pow(x1Magnitude, 2);
    y1Magnitude = finalY1;
    y1Magnitude = Math.pow(y1Magnitude, 2);
    x2Magnitude = finalX2;
    x2Magnitude = Math.pow(x2Magnitude, 2);
    y2Magnitude = finalY2;
    y2Magnitude = Math.pow(y2Magnitude, 2);
    firstFinalMagnitude = x1Magnitude + y1Magnitude;
    firstFinalMagnitude = Math.pow(firstFinalMagnitude, 0.5);
    secondFinalMagnitude = x2Magnitude + y2Magnitude;
    secondFinalMagnitude = Math.pow(secondFinalMagnitude, 0.5);
    finalMagnitude = firstFinalMagnitude * secondFinalMagnitude;
    finalAnswer = finalDotProduct / finalMagnitude;
    finalAnswer = Math.acos(finalAnswer);
    finalAnswer = finalAnswer * 180 / Math.PI;
    finalAnswer = Math.floor(finalAnswer * 1000)/1000;
    document.getElementById("answer").innerHTML = finalAnswer + "°";
}
/*Creating a function to change the setup of the help page based on the user's interaction with the page below:*/
function changeText() {
    document.getElementById("helpText").innerHTML = "STILL HAVE TO JUST FIGURE IT OUT";
    document.getElementById("helpButtons").style.visibility = "hidden";
    document.getElementById("helpPicDivision").style.visibility = "visible";
}
/*Setting the openSesame function to run as soon as the window launches below:*/
window.onload = openSesame;
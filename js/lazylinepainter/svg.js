/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj = {
    "wiggle": {
        "strokepath": [
            {
                "path": "M 185.2 457.9 L 878 457.9",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 1000,
            "height": 1000
        }
    }
};


/*
 Setup and Paint your lazyline!
 */

 $(document).ready(function(){
 $('#wiggle').lazylinepainter(
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint');
 });

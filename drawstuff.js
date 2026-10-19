    /* classes */ 

    // Color constructor
    class Color {
        constructor(r,g,b,a) {
            try {
                if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                    throw "color component not a number";
                else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                    throw "color component less than 0";
                else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                    throw "color component bigger than 255";
                else {
                    this.r = r; this.g = g; this.b = b; this.a = a; 
                }
            } // end try
            
            catch (e) {
                console.log(e);
            }
        } // end Color constructor

            // Color change method
        change(r,g,b,a) {
            try {
                if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                    throw "color component not a number";
                else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                    throw "color component less than 0";
                else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                    throw "color component bigger than 255";
                else {
                    this.r = r; this.g = g; this.b = b; this.a = a; 
                }
            } // end throw
            
            catch (e) {
                console.log(e);
            }
        } // end Color change method
    } // end color class

    let secretScene = false;

    let secretEllipsoids = [
        { // ground
            x: 0.5,
            y: -2.43,
            z: 0.5,
            a: 3.0,
            b: 2.5,
            c: 3.0,
            ambient: [0.1, 0.1, 0.05],
            diffuse: [0.9, 0.85, 0.6],   
            specular: [0.1, 0.1, 0.1],
            n: 5
        },
        { // crab body
            x: 0.5,
            y: 0.14,
            z: 0.3,

            a: 0.2,
            b: 0.07,
            c: 0.1,

            ambient:  [0.12, 0.03, 0.01],
            diffuse:  [0.75, 0.22, 0.10],
            specular: [0.35, 0.25, 0.20],
            n: 20
        },
        { // crab eyes left
            x: 0.43,
            y: 0.21,
            z: 0.25,

            a: 0.03,
            b: 0.05,
            c: 0.02,

            ambient:  [0.20, 0.20, 0.20],
            diffuse:  [0.90, 0.90, 0.90],
            specular: [0.60, 0.60, 0.60],
            n: 30
        },
        { // crab eyes left pupil
            x: 0.43,
            y: 0.217,
            z: 0.238,

            a: 0.018,
            b: 0.037,
            c: 0.01,

            ambient:  [0.02, 0.02, 0.02],
            diffuse:  [0.05, 0.05, 0.05],
            specular: [0.20, 0.20, 0.20],
            n: 20
        },
        { // crab eyes right
            x: 0.57,
            y: 0.21,
            z: 0.25,

            a: 0.03,
            b: 0.05,
            c: 0.02,

            ambient:  [0.20, 0.20, 0.20],
            diffuse:  [0.90, 0.90, 0.90],
            specular: [0.60, 0.60, 0.60],
            n: 30
        },
        { // crab eyes right pupil
            x: 0.57,
            y: 0.217,
            z: 0.238,

            a: 0.018,
            b: 0.037,
            c: 0.01,

            ambient:  [0.02, 0.02, 0.02],
            diffuse:  [0.05, 0.05, 0.05],
            specular: [0.20, 0.20, 0.20],
            n: 20
        },
        { // crab left leg
            x: 0.38,
            y: 0.1,
            z: 0.26,

            a: 0.02,
            b: 0.045,
            c: 0.02,

            ambient:  [0.1, 0.01, 0.005],
            diffuse:  [0.75, 0.22, 0.10],
            specular: [0.35, 0.25, 0.20],
            n: 20
        },
        { // crab right leg
            x: 0.62,
            y: 0.1,
            z: 0.26,

            a: 0.02,
            b: 0.045,
            c: 0.02,

            ambient:  [0.1, 0.01, 0.005],
            diffuse:  [0.75, 0.22, 0.10],
            specular: [0.35, 0.25, 0.20],
            n: 20
        },
        { // crab left claw top
            x: 0.34,
            y: 0.2,
            z: 0.26,

            a: 0.025,
            b: 0.07,
            c: 0.02,

            ambient:  [0.1, 0.01, 0.005],
            diffuse:  [0.75, 0.22, 0.10],
            specular: [0.35, 0.25, 0.20],
            n: 20
        },
        { // crab left claw bottom
            x: 0.3,
            y: 0.17,
            z: 0.26,

            a: 0.08,
            b: 0.04,
            c: 0.02,

            ambient:  [0.1, 0.01, 0.005],
            diffuse:  [0.75, 0.22, 0.10],
            specular: [0.35, 0.25, 0.20],
            n: 20
        },
        { // crab right claw top
            x: 0.66,
            y: 0.2,
            z: 0.26,

            a: 0.025,
            b: 0.07,
            c: 0.02,

            ambient:  [0.1, 0.01, 0.005],
            diffuse:  [0.75, 0.22, 0.10],
            specular: [0.35, 0.25, 0.20],
            n: 20
        },
        { // crab right claw bottom
            x: 0.7,
            y: 0.17,
            z: 0.26,

            a: 0.08,
            b: 0.04,
            c: 0.02,

            ambient:  [0.1, 0.01, 0.005],
            diffuse:  [0.75, 0.22, 0.10],
            specular: [0.35, 0.25, 0.20],
            n: 20
        }

        
    ];

    let secretTriangles = [
        {
            vertices: [
                [-10, -2, 0.9],
                [0.5, 10, 0.9],
                [10, -2, 0.9]
            ],
            triangles: [
                [0, 1, 2]
            ],
            material: {
                ambient:  [0.03, 0.2, 0.02],
                diffuse:  [0.25, 0.50, 0.20],
                specular: [0.10, 0.10, 0.10],
                n: 5
            }
        }
    ]

    const path = [
        [0.6, 0.14, 0.3],
        [0.5, 0.25, 0.3],
        [0.4, 0.14, 0.3],
        [0.5, 0.25, 0.3]
    ];

    let pathIndex = 0;
    let pathT = 0;

    // Original center of the crab
    const originalCrabCenter = [
        0.5,
        0.14,
        0.3
    ];

    // Save original positions of every crab part.
    // slice(1) skips the ground.
    const originalCrabPositions =
        secretEllipsoids.slice(1).map(function(part) {
            return [part.x, part.y, part.z];
        });

    /* utility functions */

    // draw a pixel at x,y using color
    function drawPixel(imagedata,x,y,color) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number"))
                throw "drawpixel location not a number";
            else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
                throw "drawpixel location outside of image";
            else if (color instanceof Color) {
                var pixelindex = (y*imagedata.width + x) * 4;
                imagedata.data[pixelindex] = color.r;
                imagedata.data[pixelindex+1] = color.g;
                imagedata.data[pixelindex+2] = color.b;
                imagedata.data[pixelindex+3] = color.a;
            } else 
                throw "drawpixel color is not a Color";
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end drawPixel
        
    // draw random pixels
    function drawRandPixels(context) {
        var c = new Color(0,0,0,0); // the color at the pixel: black
        var w = context.canvas.width;
        var h = context.canvas.height;
        var imagedata = context.createImageData(w,h);
        const PIXEL_DENSITY = 0.01;
        var numPixels = (w*h)*PIXEL_DENSITY; 
        
        // Loop over 1% of the pixels in the image
        for (var x=0; x<numPixels; x++) {
            c.change(Math.random()*255,Math.random()*255,
                Math.random()*255,255); // rand color
            drawPixel(imagedata,
                Math.floor(Math.random()*w),
                Math.floor(Math.random()*h),
                    c);
        } // end for x
        context.putImageData(imagedata, 0, 0);
    } // end draw random pixels

    // get the input ellipsoids from the standard class URL
    function getInputEllipsoids() {
        const INPUT_ELLIPSOIDS_URL = 
            "https://ncsucgclass.github.io/prog1/ellipsoids.json";
            
        // load the ellipsoids file
        var httpReq = new XMLHttpRequest(); // a new http request
        httpReq.open("GET",INPUT_ELLIPSOIDS_URL,false); // init the request
        httpReq.send(null); // send the request
        var startTime = Date.now();
        while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
            if ((Date.now()-startTime) > 3000)
                break;
        } // until its loaded or we time out after three seconds
        if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
            console.log("Unable to open input ellipses file!");
            return String.null;
        } else
            return JSON.parse(httpReq.response); 
    } // end get input ellipsoids

    // get the input lights from the standard class URL
    function getInputLights() {
        const INPUT_LIGHTS_URL =
            "https://ncsucgclass.github.io/prog1/lights.json";

        var httpReq = new XMLHttpRequest();

        httpReq.open("GET", INPUT_LIGHTS_URL, false);
        httpReq.send(null);

        var startTime = Date.now();

        while (
            (httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
            if ((Date.now() - startTime) > 3000)
                break;
        }

        if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
            console.log("Unable to open input lights file!");
            return String.null;
        } else {
            return JSON.parse(httpReq.response);
        }
    }

    //get the input triangles from the standard class URL
    function getInputTriangles() {
        const INPUT_TRIANGLES_URL = 
            "https://ncsucgclass.github.io/prog1/triangles.json";
            
        // load the triangles file
        var httpReq = new XMLHttpRequest(); // a new http request
        httpReq.open("GET",INPUT_TRIANGLES_URL,false); // init the request
        httpReq.send(null); // send the request
        var startTime = Date.now();
        while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
            if ((Date.now()-startTime) > 3000)
                break;
        } // until its loaded or we time out after three seconds
        if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
            console.log*("Unable to open input triangles file!");
            return String.null;
        } else
            return JSON.parse(httpReq.response); 
    } // end get input triangles

    //get the input boxex from the standard class URL
    function getInputBoxes() {
        const INPUT_BOXES_URL = 
            "https://ncsucgclass.github.io/prog1/boxes.json";
            
        // load the boxes file
        var httpReq = new XMLHttpRequest(); // a new http request
        httpReq.open("GET",INPUT_BOXES_URL,false); // init the request
        httpReq.send(null); // send the request
        var startTime = Date.now();
        while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
            if ((Date.now()-startTime) > 3000)
                break;
        } // until its loaded or we time out after three seconds
        if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
            console.log*("Unable to open input boxes file!");
            return String.null;
        } else
            return JSON.parse(httpReq.response); 
    } // end get input boxes

    // put random points in the ellipsoids from the class github
    function drawRandPixelsInInputEllipsoids(context) {
        var inputEllipsoids = getInputEllipsoids();
        var w = context.canvas.width;
        var h = context.canvas.height;
        var imagedata = context.createImageData(w,h);
        const PIXEL_DENSITY = 0.1;
        var numCanvasPixels = (w*h)*PIXEL_DENSITY; 
        
        if (inputEllipsoids != String.null) { 
            var x = 0; var y = 0; // pixel coord init
            var cx = 0; var cy = 0; // init center x and y coord
            var ellipsoidXRadius = 0; // init ellipsoid x radius
            var ellipsoidYRadius = 0; // init ellipsoid y radius
            var numEllipsoidPixels = 0; // init num pixels in ellipsoid
            var c = new Color(0,0,0,0); // init the ellipsoid color
            var n = inputEllipsoids.length; // the number of input ellipsoids
            //console.log("number of ellipses: " + n);

            // Loop over the ellipsoids, draw rand pixels in each
            for (var e=0; e<n; e++) {
                cx = w*inputEllipsoids[e].x; // ellipsoid center x
                cy = h*inputEllipsoids[e].y; // ellipsoid center y
                ellipsoidXRadius = Math.round(w*inputEllipsoids[e].a); // x radius
                ellipsoidYRadius = Math.round(h*inputEllipsoids[e].b); // y radius
                numEllipsoidPixels = ellipsoidXRadius*ellipsoidYRadius*Math.PI; // projected ellipsoid area
                numEllipsoidPixels *= PIXEL_DENSITY; // percentage of ellipsoid area to render to pixels
                numEllipsoidPixels = Math.round(numEllipsoidPixels);
                //console.log("ellipsoid x radius: "+ellipsoidXRadius);
                //console.log("ellipsoid y radius: "+ellipsoidYRadius);
                //console.log("num ellipsoid pixels: "+numEllipsoidPixels);
                c.change(
                    inputEllipsoids[e].diffuse[0]*255,
                    inputEllipsoids[e].diffuse[1]*255,
                    inputEllipsoids[e].diffuse[2]*255,
                    255); // ellipsoid diffuse color
                for (var p=0; p<numEllipsoidPixels; p++) {
                    do {
                        x = Math.random()*2 - 1; // in unit square 
                        y = Math.random()*2 - 1; // in unit square
                    } while (Math.sqrt(x*x + y*y) > 1) // a circle is also an ellipse
                    drawPixel(imagedata,
                        cx+Math.round(x*ellipsoidXRadius),
                        cy+Math.round(y*ellipsoidYRadius),c);
                    //console.log("color: ("+c.r+","+c.g+","+c.b+")");
                    //console.log("x: "+Math.round(w*inputEllipsoids[e].x));
                    //console.log("y: "+Math.round(h*inputEllipsoids[e].y));
                } // end for pixels in ellipsoid
            } // end for ellipsoids
            context.putImageData(imagedata, 0, 0);
        } // end if ellipsoids found
    } // end draw rand pixels in input ellipsoids

    // draw 2d projections read from the JSON file at class github
    function drawInputEllipsoidsUsingArcs(context) {
        var inputEllipsoids = getInputEllipsoids();
        
        
        if (inputEllipsoids != String.null) { 
            var c = new Color(0,0,0,0); // the color at the pixel: black
            var w = context.canvas.width;
            var h = context.canvas.height;
            var n = inputEllipsoids.length; 
            //console.log("number of ellipsoids: " + n);

            // Loop over the ellipsoids, draw each in 2d
            for (var e=0; e<n; e++) {
                context.fillStyle = 
                    "rgb(" + Math.floor(inputEllipsoids[e].diffuse[0]*255)
                    +","+ Math.floor(inputEllipsoids[e].diffuse[1]*255)
                    +","+ Math.floor(inputEllipsoids[e].diffuse[2]*255) +")"; // diffuse color
                context.save(); // remember previous (non-) scale
                context.scale(1, inputEllipsoids[e].b/inputEllipsoids[e].a); // scale by ellipsoid ratio 
                context.beginPath();
                context.arc(
                    Math.round(w*inputEllipsoids[e].x),
                    Math.round(h*inputEllipsoids[e].y),
                    Math.round(w*inputEllipsoids[e].a),
                    0,2*Math.PI);
                context.restore(); // undo scale before fill so stroke width unscaled
                context.fill();
                //console.log(context.fillStyle);
                //console.log("x: "+Math.round(w*inputEllipsoids[e].x));
                //console.log("y: "+Math.round(h*inputEllipsoids[e].y));
                //console.log("a: "+Math.round(w*inputEllipsoids[e].a));
                //console.log("b: "+Math.round(h*inputEllipsoids[e].b));
            } // end for ellipsoids
        } // end if ellipsoids found
    } // end draw input ellipsoids

    //put random points in the triangles from the class github
    function drawRandPixelsInInputTriangles(context) {
        var inputTriangles = getInputTriangles();
        var w = context.canvas.width;
        var h = context.canvas.height;
        var imagedata = context.createImageData(w,h);
        const PIXEL_DENSITY = 0.1;
        var numCanvasPixels = (w*h)*PIXEL_DENSITY; 
        
        if (inputTriangles != String.null) { 
            var x = 0; var y = 0; // pixel coord init
            var cx = 0; var cy = 0; // init center x and y coord
            var numTrianglePixels = 0; // init num pixels in triangle
            var c = new Color(0,0,0,0); // init the triangle color
            var n = inputTriangles.length; // the number of input files
            //console.log("number of files: " + n);

            // Loop over the triangles, draw rand pixels in each
            for (var f=0; f<n; f++) {
                var tn = inputTriangles[f].triangles.length;
                //console.log("number of triangles in this files: " + tn);
                
                // Loop over the triangles, draw each in 2d
                for(var t=0; t<tn; t++){
                    var vertex1 = inputTriangles[f].triangles[t][0];
                    var vertex2 = inputTriangles[f].triangles[t][1];
                    var vertex3 = inputTriangles[f].triangles[t][2];

                    var vertexPos1 = inputTriangles[f].vertices[vertex1];
                    var vertexPos2 = inputTriangles[f].vertices[vertex2];
                    var vertexPos3 = inputTriangles[f].vertices[vertex3];
                    //console.log("vertexPos1 " + vertexPos1);
                    //console.log("vertexPos2 " + vertexPos2);
                    //console.log("vertexPos3 " + vertexPos3);
                    
                    // triangle position on canvas
                    
                    var v1 = [w*vertexPos1[0], h*vertexPos1[1]];
                    var v2 = [w*vertexPos2[0], h*vertexPos2[1]];
                    var v3 = [w*vertexPos3[0], h*vertexPos3[1]];
                    
                    // calculate triangle area on canvas (shoelace formula)
                    var triangleArea = 0.5*Math.abs(v1[0]*v2[1]+v2[0]*v3[1]+v3[0]*v1[1]-v2[0]*v1[1]-v3[0]*v2[1]-v1[0]*v3[1]);
                    var numTrianglePixels = triangleArea; // init num pixels in triangle
                    //console.log("triangle area " + triangleArea);
                    numTrianglePixels *= PIXEL_DENSITY; // percentage of triangle area to render to pixels
                    numTrianglePixels = Math.round(numTrianglePixels);
                    // console.log("numTrianglePixels " + numTrianglePixels);
                    c.change(
                        inputTriangles[f].material.diffuse[0]*255,
                        inputTriangles[f].material.diffuse[1]*255,
                        inputTriangles[f].material.diffuse[2]*255,
                        255); // triangle diffuse color
                    for (var p=0; p<numTrianglePixels; p++) {
                        var point; // on canvas plane
                        var triangleTest = 0;
                        while (triangleTest == 0 ){ //if the pixel outside the triangle
                    
                            point = [Math.floor(Math.random()*w), Math.floor(Math.random()*h)];
                            // plane checking
                            
                            var t1 = ((point[0]-v2[0]) * (v1[1] - v2[1]) - (v1[0] - v2[0]) * (point[1] - v2[1])) < 0.0;
                            var t2 = ((point[0]-v3[0]) * (v2[1] - v3[1]) - (v2[0] - v3[0]) * (point[1] - v3[1])) < 0.0;
                            var t3 = ((point[0]-v1[0]) * (v3[1] - v1[1]) - (v3[0] - v1[0]) * (point[1] - v1[1])) < 0.0;
                            
                            if((t1==t2)&&(t2==t3)) // draw the pixel if inside the triangle
                                triangleTest = 1;
                        }
                        drawPixel(imagedata,point[0],point[1],c);
                        //console.log("color: ("+c.r+","+c.g+","+c.b+")");
                        //console.log("x: "+ x);
                        //console.log("y: "+ y);
                    } // end for pixels in triangle
                } // end for triangles
            } // end for files
            context.putImageData(imagedata, 0, 0);
        } // end if triangle file found
    } // end draw rand pixels in input triangles

    //draw 2d projections traingle from the JSON file at class github
    function drawInputTrainglesUsingPaths(context) {
        var inputTriangles = getInputTriangles();
        
        if (inputTriangles != String.null) { 
            var c = new Color(0,0,0,0); // the color at the pixel: black
            var w = context.canvas.width;
            var h = context.canvas.height;
            var n = inputTriangles.length; 
            //console.log("number of files: " + n);

            // Loop over the input files
            for (var f=0; f<n; f++) {
                var tn = inputTriangles[f].triangles.length;
                //console.log("number of triangles in this files: " + tn);
                
                // Loop over the triangles, draw each in 2d
                for(var t=0; t<tn; t++){
                    var vertex1 = inputTriangles[f].triangles[t][0];
                    var vertex2 = inputTriangles[f].triangles[t][1];
                    var vertex3 = inputTriangles[f].triangles[t][2];

                    var vertexPos1 = inputTriangles[f].vertices[vertex1];
                    var vertexPos2 = inputTriangles[f].vertices[vertex2];
                    var vertexPos3 = inputTriangles[f].vertices[vertex3];
                    //console.log("vertexPos1 " + vertexPos1);
                    //console.log("vertexPos2 " + vertexPos2);
                    //console.log("vertexPos3 " + vertexPos3);
                    
                    context.fillStyle = 
                        "rgb(" + Math.floor(inputTriangles[f].material.diffuse[0]*255)
                        +","+ Math.floor(inputTriangles[f].material.diffuse[1]*255)
                        +","+ Math.floor(inputTriangles[f].material.diffuse[2]*255) +")"; // diffuse color
                
                    var path=new Path2D();
                    path.moveTo(w*vertexPos1[0],h*vertexPos1[1]);
                    path.lineTo(w*vertexPos2[0],h*vertexPos2[1]);
                    path.lineTo(w*vertexPos3[0],h*vertexPos3[1]);
                    path.closePath();
                    context.fill(path);

                } // end for triangles
            } // end for files
        } // end if triangle files found
    } // end draw input triangles

    // put random points in the boxes from the class github
    function drawRandPixelsInInputBoxes(context) {
        var inputBoxes = getInputBoxes();
        var w = context.canvas.width;
        var h = context.canvas.height;
        var imagedata = context.createImageData(w,h);
        const PIXEL_DENSITY = 0.1;
        var numCanvasPixels = (w*h)*PIXEL_DENSITY; 
        
        if (inputBoxes != String.null) { 
            var x  = 0; var y  = 0; // pixel coord init
            var lx = 0; var rx = 0; // input lx, rx from boxes.json
            var by = 0; var ty = 0; // input by, ty from boxes.json
            var fz = 0; var rz = 0; // input fz, rz from boxes.json
            var numBoxPixels = 0; // init num pixels in boxes
            var c = new Color(0,0,0,0); // init the box color
            var n = inputBoxes.length; // the number of input boxes
            //console.log("number of ellipses: " + n);

            // Loop over the ellipsoids, draw rand pixels in each
            for (var b=0; b<n; b++) {
                // input lx,rx,by,ty on canvas
                lx = w*inputBoxes[b].lx;
                rx = w*inputBoxes[b].rx;
                by = h*inputBoxes[b].by;
                ty = h*inputBoxes[b].ty;           
                
                numBoxesPixels  = (rx-lx)*(ty-by); // projected box area 
                numBoxesPixels *= PIXEL_DENSITY;  // percentage of box area to render to pixels
                numBoxesPixels  = Math.round(numBoxesPixels);
            
                //console.log("num box pixels: "+numBoxesPixels);
                
                c.change(
                    inputBoxes[b].diffuse[0]*255,
                    inputBoxes[b].diffuse[1]*255,
                    inputBoxes[b].diffuse[2]*255,
                    255); // box diffuse color
                for (var p=0; p<numBoxesPixels; p++) {
                    do {
                        x = Math.floor(Math.random()*w); 
                        y = Math.floor(Math.random()*h); 
                    } while ( x<lx || x>rx || y>ty || y<by ) // inside the projection
                    drawPixel(imagedata,x,y,c);
                    //console.log("color: ("+c.r+","+c.g+","+c.b+")");
                    //console.log("x: " + x);
                    //console.log("y: " + y);
                } // end for pixels in box
            } // end for boxes
            context.putImageData(imagedata, 0, 0);
        } // end if boxes found
    } // end draw rand pixels in input boxes

    //draw 2d projections boxes from the JSON file at class github
    function drawInputBoxesUsingPaths(context) {
        var inputBoxes = getInputBoxes();
        var n = inputBoxes.length; // the number of input boxes
        
        if (inputBoxes != String.null) { 
            var w = context.canvas.width;
            var h = context.canvas.height;
            var c = new Color(0,0,0,0); // the color at the pixel: black
            var x  = 0; var y  = 0; // pixel coord init
            var lx = 0; var rx = 0; // input lx, rx from boxes.json
            var by = 0; var ty = 0; // input by, ty from boxes.json
            var fz = 0; var rz = 0; // input fz, rz from boxes.json
            //console.log("number of files: " + n);

            // Loop over the input files
            for (var b=0; b<n; b++) {
                    
                // input lx,rx,by,ty on canvas
                lx = w*inputBoxes[b].lx;
                rx = w*inputBoxes[b].rx;
                by = h*inputBoxes[b].by;
                ty = h*inputBoxes[b].ty; 
                    
                context.fillStyle = 
                    "rgb(" + Math.floor(inputBoxes[b].diffuse[0]*255)
                    +","+ Math.floor(inputBoxes[b].diffuse[1]*255)
                    +","+ Math.floor(inputBoxes[b].diffuse[2]*255) +")"; // diffuse color
                
                var path=new Path2D();
                path.moveTo(lx,ty);
                path.lineTo(lx,by);
                path.lineTo(rx,by);
                path.lineTo(rx,ty);
                path.closePath();
                context.fill(path);

            } // end for files
        } // end if box files found
    } // end draw input boxes

    // vector math functions
    function subtract(a, b) {
        return [
            a[0] - b[0],
            a[1] - b[1],
            a[2] - b[2]
        ];
    }

    function add(a, b) {
        return [
            a[0] + b[0],
            a[1] + b[1],
            a[2] + b[2]
        ];
    }

    function multiply(v, scalar) {
        return [
            v[0] * scalar,
            v[1] * scalar,
            v[2] * scalar
        ];
    }

    function dot(a, b) {
        return a[0] * b[0]
            + a[1] * b[1]
            + a[2] * b[2];
    }

    function cross(a, b) {
        return [
            a[1] * b[2] - a[2] * b[1],
            a[2] * b[0] - a[0] * b[2],
            a[0] * b[1] - a[1] * b[0]
        ];
    }

    function normalize(v) {
        const length = Math.sqrt(dot(v, v));

        if (length === 0) {
            return [0, 0, 0];
        }

        return [
            v[0] / length,
            v[1] / length,
            v[2] / length
        ];
    }

    // Ray-ellipsoid intersection function
    function intersectEllipsoid(eye, direction, ellipsoid) {

        const dx = direction[0];
        const dy = direction[1];
        const dz = direction[2];

        const ex = eye[0] - ellipsoid.x;
        const ey = eye[1] - ellipsoid.y;
        const ez = eye[2] - ellipsoid.z;

        const a2 = ellipsoid.a * ellipsoid.a;
        const b2 = ellipsoid.b * ellipsoid.b;
        const c2 = ellipsoid.c * ellipsoid.c;

        const A =
            (dx * dx) / a2 +
            (dy * dy) / b2 +
            (dz * dz) / c2;

        const B = 2 * (
            (ex * dx) / a2 +
            (ey * dy) / b2 +
            (ez * dz) / c2
        );

        const C =
            (ex * ex) / a2 +
            (ey * ey) / b2 +
            (ez * ez) / c2 - 1;

        const discriminant = B * B - 4 * A * C;

        if (discriminant < 0) {
            return null;
        }

        const sqrtD = Math.sqrt(discriminant);

        const t1 = (-B - sqrtD) / (2 * A);
        const t2 = (-B + sqrtD) / (2 * A);

        if (t1 > 0) {
            return t1;
        }

        if (t2 > 0) {
            return t2;
        }

        return null;
    }

    // Ray-triangle intersection function
    function intersectTriangle(origin, direction, v0, v1, v2) {

        const EPSILON = 0.000001;

        // Two triangle edges
        const edge1 = subtract(v1, v0);
        const edge2 = subtract(v2, v0);

        const h = cross(direction, edge2);
        const a = dot(edge1, h);

        // Ray is parallel to triangle
        if (Math.abs(a) < EPSILON) {
            return null;
        }

        const f = 1.0 / a;
        const s = subtract(origin, v0);

        const u = f * dot(s, h);

        // Intersection is outside triangle
        if (u < 0 || u > 1) {
            return null;
        }

        const q = cross(s, edge1);

        const v = f * dot(direction, q);

        // Intersection is outside triangle
        if (v < 0 || u + v > 1) {
            return null;
        }

        const t = f * dot(edge2, q);

        // Intersection must be in front of ray
        if (t > EPSILON) {
            return t;
        }

        return null;
    }

    // Normal vector on ellipsoid
    function ellipsoidNormal(point, ellipsoid) {

        const nx =
            (point[0] - ellipsoid.x) /
            (ellipsoid.a * ellipsoid.a);

        const ny =
            (point[1] - ellipsoid.y) /
            (ellipsoid.b * ellipsoid.b);

        const nz =
            (point[2] - ellipsoid.z) /
            (ellipsoid.c * ellipsoid.c);

        return normalize([nx, ny, nz]);
    }

    // Normal vector on triangle
    function triangleNormal(v0, v1, v2) {

        const edge1 = subtract(v1, v0);
        const edge2 = subtract(v2, v0);

        return normalize(
            cross(edge1, edge2)
        );
    }

    // Lighting calculation function
    function calculateLighting(point, material, normal, eye, lights, ellipsoids, triangles) {

        const result = [0, 0, 0];

        // Surface normal.
        const N = normal;

        // Direction from the surface toward the eye.
        const V = normalize(
            subtract(eye, point)
        );

        for (let l = 0; l < lights.length; l++) {

            const light = lights[l];

            // Direction from the surface toward the light.
            const L = normalize(
                subtract([light.x, light.y, light.z], point)
            );

            // Blinn-Phong halfway vector.
            const H = normalize(add(L, V));

            // Diffuse contribution.
            const NdotL = Math.max(0, dot(N, L));

            // Specular contribution.
            let specularFactor = 0;

            if (NdotL > 0) {
                specularFactor = Math.pow(
                    Math.max(0, dot(N, H)),
                    material.n
                );
            }


            // Calculate red, green, and blue separately.
            for (let i = 0; i < 3; i++) {

                const ambient =
                    material.ambient[i] * light.ambient[i];

                // check if the point is in shadow
                if (isInShadow(point, N, light, ellipsoids, triangles)) {
                    result[i] += ambient;
                    result[i] = Math.max(0, Math.min(1, result[i]));
                    continue;
                }

                const diffuse =
                    material.diffuse[i] *
                    light.diffuse[i] *
                    NdotL;

                const specular =
                    material.specular[i] *
                    light.specular[i] *
                    specularFactor;

                // Add the lighting components.
                result[i] += ambient + diffuse + specular;

                // Keep the color in the valid [0, 1] range.
                result[i] = Math.max(0, Math.min(1, result[i]));
            }
            
        }
        return result;
    }

    // Shadow check function
    function isInShadow(point, normal, light, ellipsoids, triangles) {

        const EPSILON = 0.0001;

        // Move the starting point slightly off the surface
        // so the ellipsoid doesn't immediately intersect itself.
        const shadowOrigin = add(
            point,
            multiply(normal, EPSILON)
        );

        const lightPosition = [
            light.x,
            light.y,
            light.z
        ];

        // Vector from surface point to light
        const toLight = subtract(
            lightPosition,
            shadowOrigin
        );

        // Actual distance from point to light
        const lightDistance = Math.sqrt(
            dot(toLight, toLight)
        );

        // Direction of shadow ray
        const shadowDirection =
            normalize(toLight);

        // Check every ellipsoid
        for (let e = 0; e < ellipsoids.length; e++) {

            const t = intersectEllipsoid(
                shadowOrigin,
                shadowDirection,
                ellipsoids[e]
            );

            // Something was hit before reaching the light
            if (t !== null && t < lightDistance) {
                return true;
            }
        }

        // Check every triangle
        for (let f = 0; f < triangles.length; f++) {

        const triangleSet = triangles[f];

            for (let i = 0;
                i < triangleSet.triangles.length;
                i++) {

                const triangle =
                    triangleSet.triangles[i];

                const v0 =
                    triangleSet.vertices[triangle[0]];

                const v1 =
                    triangleSet.vertices[triangle[1]];

                const v2 =
                    triangleSet.vertices[triangle[2]];

                const t = intersectTriangle(
                    shadowOrigin,
                    shadowDirection,
                    v0,
                    v1,
                    v2
                );

                if (
                    t !== null &&
                    t < lightDistance
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function easeInOut(t) {
        return t * t * (3 - 2 * t);
    }

    function getCrabPosition() {

        const start = path[pathIndex];

        const end =
            path[(pathIndex + 1) % path.length];

        const easedT = easeInOut(pathT);


        const position = [
            lerp(start[0], end[0], easedT),
            lerp(start[1], end[1], easedT),
            lerp(start[2], end[2], easedT)
        ];

        pathT += 0.3;

        if (pathT >= 1) {

            pathT = 0;

            pathIndex =
                (pathIndex + 1) % path.length;
        }

        return position;
    }

    function updateCrab() {

        const crabPosition = getCrabPosition();

        // How far the crab moved from its original position
        const dx =
            crabPosition[0] - originalCrabCenter[0];

        const dy =
            crabPosition[1] - originalCrabCenter[1];

        const dz =
            crabPosition[2] - originalCrabCenter[2];

        // Move every crab part.
        // Start at 1 because index 0 is the ground.
        for (let i = 1; i < secretEllipsoids.length; i++) {

            const original =
                originalCrabPositions[i - 1];

            secretEllipsoids[i].x =
                original[0] + dx;

            secretEllipsoids[i].y =
                original[1] + dy;

            secretEllipsoids[i].z =
                original[2] + dz;
        }
    }

    function animateSecretScene(context) {

        updateCrab();

        rayCast(context);

        requestAnimationFrame(function() {
            animateSecretScene(context);
        });
    }


    function rayCast(context) {
        let ellipsoids;
        let lights;
        let triangles;

        if (secretScene) {
            ellipsoids = secretEllipsoids;
            lights = getInputLights();
            triangles = secretTriangles;
        } else {
            ellipsoids = getInputEllipsoids();
            lights = getInputLights();
            triangles = getInputTriangles();
        }

        const width = context.canvas.width;
        const height = context.canvas.height;

        const imageData = context.createImageData(
            width,
            height
        );

        //const eye = [0.5, 0.5, -0.5];
        const eye = [
            parseFloat(document.getElementById("eyeX").value),
            parseFloat(document.getElementById("eyeY").value),
            parseFloat(document.getElementById("eyeZ").value)
        ];
        const lookAt = [
            parseFloat(document.getElementById("lookX").value),
            parseFloat(document.getElementById("lookY").value),
            parseFloat(document.getElementById("lookZ").value)
        ];
        const viewUp = [
            parseFloat(document.getElementById("viewUpX").value),
            parseFloat(document.getElementById("viewUpY").value),
            parseFloat(document.getElementById("viewUpZ").value)
        ];

        const forward = normalize(lookAt);

        const cameraRight = normalize(
            cross(viewUp, forward)
        );

        const cameraUp = normalize(
            cross(forward, cameraRight)
        );

        const windowDistance = 0.5;

        const left = parseFloat(document.getElementById("left").value);
        const right = parseFloat(document.getElementById("right").value);
        const bottom = parseFloat(document.getElementById("bottom").value);
        const top = parseFloat(document.getElementById("top").value);

        const windowCenter = add(
            eye,
            multiply(forward, windowDistance)
        );

        const LIGHTING_ENABLED = true;

        // Loop through every pixel
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {

                const windowX = (x + 0.5) / width;
                const windowY = 1 - (y + 0.5) / height;

                const u =
                    left +
                    (right - left) *
                    ((x + 0.5) / width);

                const v =
                    top -
                    (top - bottom) *
                    ((y + 0.5) / height);


                let windowPoint = windowCenter;

                windowPoint = add(
                    windowPoint,
                    multiply(cameraRight, u)
                );

                windowPoint = add(
                    windowPoint,
                    multiply(cameraUp, v)
                );

                
                const direction = normalize(
                    subtract(windowPoint, eye)
                );

                let closestT = Infinity;
                let closestHit = null;

                // Test every ellipsoid
                for (let e = 0; e < ellipsoids.length; e++) {

                    const ellipsoid = ellipsoids[e];

                    const t = intersectEllipsoid(
                        eye,
                        direction,
                        ellipsoid
                    );

                    if (t !== null && t < closestT) {
                        closestT = t;
                        closestHit = {
                            type: "ellipsoid",
                            object: ellipsoid,
                            material: ellipsoid
                        };
                    }
                }

                // Test every triangle
                for (let f = 0; f < triangles.length; f++) {

                    const triangleSet = triangles[f];

                    const vertices = triangleSet.vertices;

                    for (let tIndex = 0;
                        tIndex < triangleSet.triangles.length;
                        tIndex++) {

                        const triangle =
                            triangleSet.triangles[tIndex];

                        // Get vertex indices
                        const i0 = triangle[0];
                        const i1 = triangle[1];
                        const i2 = triangle[2];

                        // Get actual 3D vertex positions
                        const v0 = vertices[i0];
                        const v1 = vertices[i1];
                        const v2 = vertices[i2];

                        const t = intersectTriangle(
                            eye,
                            direction,
                            v0,
                            v1,
                            v2
                        );

                        if (t !== null && t < closestT) {

                            closestT = t;

                            closestHit = {
                                type: "triangle",
                                v0: v0,
                                v1: v1,
                                v2: v2,
                                material: triangleSet.material
                            };
                        }
                    }
                }

                // Set the pixel color based on the closest hit
                let pixelColor = new Color(
                    0,
                    0,
                    0,
                    255
                );

                if (closestHit !== null) {

                    let rgb;

                    if (LIGHTING_ENABLED) {

                        const intersectionPoint = add(
                            eye,
                            multiply(direction, closestT)
                        );

                        let normal;

                        if (closestHit.type === "ellipsoid") {

                            normal = ellipsoidNormal(
                                intersectionPoint,
                                closestHit.object
                            );

                        } else if (closestHit.type === "triangle") {

                            normal = triangleNormal(
                                closestHit.v0,
                                closestHit.v1,
                                closestHit.v2
                            );
                        }

                        rgb = calculateLighting(
                            intersectionPoint,
                            closestHit.material,
                            normal,
                            eye,
                            lights,
                            ellipsoids,
                            triangles
                        );

                    } else {
                        rgb = closestHit.material.diffuse;
                    }

                    pixelColor = new Color(
                        Math.round(rgb[0] * 255),
                        Math.round(rgb[1] * 255),
                        Math.round(rgb[2] * 255),
                        255
                    );
                }

                drawPixel(
                    imageData,
                    x,
                    y,
                    pixelColor
                );
            }
        }

        context.putImageData(
            imageData,
            0,
            0
        );
    }


    /* main -- here is where execution begins after window load */
    function main() {

        // Get the canvas and context
        var canvas = document.getElementById("viewport"); 

        canvas.width = parseInt(document.getElementById("canvasWidth").value);

        canvas.height =
            parseInt(document.getElementById("canvasHeight").value);

        var context = canvas.getContext("2d");

        rayCast(context);
        
        document.addEventListener("keydown", function(event) {

            if (event.code === "Space") {

                event.preventDefault();

                secretScene = true;

                context.clearRect(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

                animateSecretScene(context);
            }
        });
        // Create the image
        //drawRandPixels(context);
        // shows how to draw pixels
        
        //drawRandPixelsInInputEllipsoids(context);
        // shows how to draw pixels and read input file
        
        //drawInputEllipsoidsUsingArcs(context);
        // shows how to read input file, but not how to draw pixels
        
        //drawRandPixelsInInputTriangles(context);
        // shows how to draw pixels and read input file
        
        //drawInputTrainglesUsingPaths(context);
        // shows how to read input file, but not how to draw pixels
        
        //drawRandPixelsInInputBoxes(context);
        // shows how to draw pixels and read input file
        
        //drawInputBoxesUsingPaths(context);
        // shows how to read input file, but not how to draw pixels
    }

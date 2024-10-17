# Image Viewer
A basic image viewer component for the web.  

# How to use
1.  Add `imgViewer.css` and `imgViewer.js` to your html file.
2.  Using your html element of choice, create the thumbnail(s) and add the three required attributes, as shown below.

~~~
<span data-imgviewer-thumbnail data-img-loc="img-path/relative-to/html-file" data-img-title="any string of text"></span>
~~~

Here's a demo:
https://omeedentezari.github.io/imgViewer/
 
# Notes
- The JS file creates an image viewer component - to style it, you can change the properties in the imgViewer.css file.  The properties shown in that file are an exhaustive list of the custom attributes used for styling, which include:

| Attribute | Description |
| -------- | -------- |
| data-imgviewer-thumbnail | Set by the person implementing this component on elements that act as thumbnails |
| data-imgviewer-boundbox | Set by the JS script on a single element that acts as the bounding box for the image viewer |
| data-imgviewer-img | Set by the JS script on a single element that acts as the image holder (uses div tag with a background image) |
| data-imgviewer-close | Set by the JS script on a single element that acts as the close button | 


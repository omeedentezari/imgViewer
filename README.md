# Image Viewer
A basic image viewer component for the web.  

# How to use
1.  Add `imgViewer.css` and `imgViewer.js` to your html file.
2.  Create thumbnail tags by adding the `data-imgviewer-thumbnail` to any html tag that should be an image.
3.  For each thumbnail tag, add a `data-img-loc` attribute that equals the path to the image relative to the html file.
4.  (Optional) For each thumbnail tag, add a `data-img-title` that equals the value of the hover text shown.

# Notes
- The JS file creates an image viewer component - to style it, you can change the properties in the imgViewer.css file.  The properties shown in that file are an exhaustive list of the custom attributes used for styling, which include:

| Attribute | Description |
| -------- | -------- |
| data-imgviewer-thumbnail | Set by user on elements that act as thumbnails |
| data-imgviewer-boundbox | Set by JS script on a single element that acts as the bounding box for the image viewer |
| data-imgviewer-img | Set by the JS script on a single element that acts as the image holder (uses div tag with a background image) |
| data-imgviewer-close | Set by the JS script on a single element that acts as the close button | 


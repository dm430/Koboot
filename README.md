# Koboot
Koboot is a library of components for Knockout.js, styled using Twitter Bootstrap. 

# Building Koboot
If you would like to build Kobot from source clone the repository and run the following commands in your command line.

```
npm install
gulp
```

If you would like Koboot to rebuild as soon as you save any file under the `src` directory, you can run `gulp watch`.

# Using Koboot 

In order to start using Koboot you will have to add it and the following dependencies added to your webpage.
* Bootstrap
* Knockout.js
* Knockout.js mapping

#### Here is an example:

``` html
<!-- Koboot dependencies -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout.mapping/2.4.1/knockout.mapping.js"></script>

<!-- Koboot build -->
<script type="text/javascript" src="./pathToKoboot/Koboot.js"></script>
```




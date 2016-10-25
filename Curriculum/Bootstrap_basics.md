# Bootstrap Basics

When we build our websites from scratch, we have to go through the process of setting CSS standards for font, page structure, content structure, etc. If you put the time into developing a foundation that can be copied and pasted into each new project, you can save a lot of development time. Or you can use CSS frameworks developed by others to build your websites on. A CSS framework is essentially a standardized set of styles and behaviors for all the fundamental HTML elements, plus some extra custom ones, which you can add your customization on top of. There are a few popular frameworks out there, [Bootstrap](https://getbootstrap.com/), [Foundation](http://foundation.zurb.com/), [Semantic UI](http://semantic-ui.com/), just to name a few. Feel free to try out all of them, but we will be going through the Bootstrap framework only.

## 1. Installation

There are a few ways to install the Bootstrap framework. You can either download the files and link them to your HTML, or you can use a Content Delivery Network (CDN). When you download the files and store them locally on your server, it will be available to the user as long as your server is running properly. If you use CDN, the availability is dependent on the CDN provider. If the CDN provider goes down, your website won't be displayed correctly. When developing locally, and you happen to not have access to the Internet, using a CDN would be impossible.

Bootstrap is usually used in a minified format. Minifying is the process of removing spaces therefore decreasing file size. For this tutorial, we will be using the CDN provider maxcdn that is hosting Bootstrap. Go to Bootstrap's website to get the latest version. This should be placed inside the `<head></head>` element like below.

```
<head>
  <!-- Your other settings here -->
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>
```

Bootstrap is all about mobile first, meaning it is built with mobile viewing in mind. To ensure proper rendering on mobile, add the viewport meta tag into the `<head>` element.

```
<head>
  ...
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

To disable zooming on mobile devices, add the `user-scalable=no` to the content attribute. Users are only able to scroll, resulting in a site that feels more like a native application.

```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

Remember the CSS reset we introduced in CSS Part 1, Bootstrap uses the Normalize.css for a soft reset.

## 2. Grid System

Probably the most useful feature of Bootstrap is its grid system. It is a mobile first fluid grid system with 12 columns. You can use it to define the width of your content based on different screen sizes, so your website is responsive. The grid starts with a container, you can either choose `.container` (fixed-width) or `.container-fluid` (full-width).

```
<div class="container">
  <!-- The container will have a max width for different screen sizes -->
  ...
</div>
<!--    or    -->
<div class="container-fluid">
  <!-- The container will be as wide as your screen goes. -->
  ...
</div>
```

Then you can layout the page with a series of rows and columns. First you place a div with a `.row` class inside the container. Rows must be placed within a container for proper alignment and padding.

```
<div class="container">
  <div class="row">
    (columns)
  </div>
  <div class="row">
    (columns)
  </div>
</div>
```

Inside `.row`, you can add your columns of content. Columns are defined with the `.col-*` class. There can only be max of 12 columns in each row. For example if you want to have 3 equal columns in a row you can use 3 `.col-xs-4`. Each column will span 4 columns wide. Note: Columns line up from the left.

```
<div class="container">
  <div class="row">
    <div class="col-xs-4">1st column, starts on the left</div>
    <div class="col-xs-4">2nd column</div>
    <div class="col-xs-4">3rd column</div>
  </div>
</div>
```

<p data-height="182" data-theme-id="22009" data-slug-hash="adQPyb" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/adQPyb/'>3 equal columns</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

If you want 4 equal columns, you can use 4 `.col-xs-3`.

```
<div class="container">
  <div class="row">
    <div class="col-xs-3"></div>
    <div class="col-xs-3"></div>
    <div class="col-xs-3"></div>
    <div class="col-xs-3"></div>
  </div>
</div>
```

<p data-height="100" data-theme-id="22009" data-slug-hash="adQPGO" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/adQPGO/'>4 equal columns</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

If the total columns are bigger than 12, the last column will begin on a new line.

```
<div class="row">
  <div class="col-xs-3"></div>
  <div class="col-xs-3"></div>
  <div class="col-xs-3"></div>
  <!-- This last column will move down to a new line because it won't fit in the same row as the columns above -->
  <div class="col-xs-4"></div>
</div>
```

<p data-height="150" data-theme-id="22009" data-slug-hash="gPQZKX" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/gPQZKX/'>more than 12 columns</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

There are four different screen widths of breakpoints in Bootstrap, extra small (xs), small (sm), medium (md), and large (lg). These breakpoints specify the screen sizes that your grid settings will take place. What this does is it allows you to design a different layout for different screen sizes. For example if you use `col-xs-*` You are specifying the layout form extra small devices with a screen size less than 768 pixels. The table below list out the break points for each size.

- xs - Extra small devices, phones (<768px)
- sm - Small devices, tablets (&#8805;768px)
- md - Medium devices, Desktops (&#8805;992px)
- lg - Large devices, Desktops (&#8805;1200px)

Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g. applying any `.col-md-*` class to an element will not only affect its styling on medium devices but also on large devices if a `.col-lg-*` class is not present. It is recommended to always style with `.col-xs-*` first. So if you want a content to be 4 columns wide across all screen sizes, a `col-xs-4` will suffice. You can experience the change of layout through breakpoints in the example below. Each div will span 12 columns for extra small devices (xs) and small devices (sm). For medium devices (md), each div will span 4 columns.

```
<div class="row">
  <div class="col-xs-12 col-md-4"></div>
  <div class="col-xs-12 col-md-4"></div>
  <div class="col-xs-12 col-md-4"></div>
</div>
```

Click on edit on the top right corner to go to CodePen, then adjust the width of your browser to see the columns change between `col-xs-12` and `col-md-4`.

<p data-height="270" data-theme-id="22009" data-slug-hash="YwRdMx" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/YwRdMx/'>3 times xs-12 and md-4</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You can specify a different width for each screen size.

```
<!-- Columns start at 50% wide on mobile, bump up to 33.3% wide on tablets, 25% wide on small desktops, and 16.6% on large desktops -->
<div class="row">
  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2"></div>
  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2"></div>
  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2"></div>
</div>
```

At certain breakpoints, the columns might not clear fully as one column is taller than the other. To fix that, add a div with the class `.clear-fix and a responsive utility class. Responsive utility classes are used to specify whether an element will hide or show for different screen sizes.

```
<div class="row">
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <!-- Add the extra clearfix for only xs devices -->
  <div class="clearfix visible-xs-block"></div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
</div>
```

Click on edit to see it in action.

<p data-height="181" data-theme-id="22009" data-slug-hash="yeQZgy" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/yeQZgy/'>using clearfix</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Sometimes, you want to leave a gap between your columns, or offset a column to the right of its default position. Like a column that spans 6 columns wide sitting in the middle. To do that you would want to offset it by 3 columns, so you have 3 columns spacing on both left and right. Use `.col-xs-offset-*` classes to achieve the offset. These classes increase the left margin by `*` columns. To specify the offset for different screen sizes, replace `xs` with the screen size you need.

```
<div class="row">
  <div class="col-xs-6 col-xs-offset-3"></div>
  <div class="col-xs-3 col-md-6 col-md-offset-6"></div>
</div>
```

Click on edit to see it in action.

<p data-height="158" data-theme-id="22009" data-slug-hash="adPbvY" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/adPbvY/'>offsets</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You can also easily change the order of our built-in grid columns with `.col-xs-push-*` and `.col-xs-pull-*` modifier classes. Again, replace the `xs` with the screen size you need. The following example consists of a `.col-md-9` that we are pushing after the `.col-md-3`. We need to pull the `.col-md-3` by 9 columns for it to appear correctly.

```
<div class="row">
  <div class="col-xs-9 col-xs-push-3"></div>
  <div class="col-xs-3 col-xs-pull-9"></div>
</div>
```

<p data-height="99" data-theme-id="22009" data-slug-hash="eJbYdG" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/eJbYdG/'>push and pull columns</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You can also nest columns within columns. Just add a div with a class `.row` inside a column and add the nested column in `.row`.

```
<div class="row">
  <div class="col-xs-9">
    Level 1: .col-xs-9
    <div class="row">
      <div class="col-xs-8 col-sm-6">
        Level 2: .col-xs-8 .col-sm-6
      </div>
      <div class="col-xs-4 col-sm-6">
        Level 2: .col-xs-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
```

<p data-height="182" data-theme-id="22009" data-slug-hash="LGMYbg" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/LGMYbg/'>nested columns</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 3. Typography

Bootstrap has a standardized set of styles for typography. We will go through the common ones.

**Headings**, just use `<h1>` to `<h6>` tags like you normally would.

```
<h1>h1. Bootstrap heading <small>Secondary text</small></h1>
<h2>h2. Bootstrap heading <small>Secondary text</small></h2>
<h3>h3. Bootstrap heading <small>Secondary text</small></h3>
<h4>h4. Bootstrap heading <small>Secondary text</small></h4>
<h5>h5. Bootstrap heading <small>Secondary text</small></h5>
<h6>h6. Bootstrap heading <small>Secondary text</small></h6>
```

<p data-height="280" data-theme-id="22009" data-slug-hash="zryYWL" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/zryYWL/'>headings</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Inline text**, use marked, underlined, bold like how you would normally use them.

<!-- remember to add .table and .table-bordered dynamically to tables -->

| HTML Tag | Text Effect |  Example |
|---|---|---|
| `<mark>` | Marked | For highlighting a run of text due to its relevance in another context  |
| `<del>`  | Deleted | For indicating blocks of text that have been deleted |
| `<s>`    | Strikethrough | For indicating blocks of text that are no longer relevant |
| `<ins>`  | Inserted | For indicating additions to the document |
| `<u>`    | Underlined | For indicating an importance in a part of a phrase
| `<small>`| Small | For de-emphasizing inline or blocks of text, use the `<small>` tag to set text at 85% the size of the parent. Heading elements receive their own font-size for nested `<small>` elements. You may alternatively use an inline element with .small in place of any `<small>`.
| `<strong>` | Bold | For emphasizing a snippet of text with a heavier font-weight |
| `<em>` | Italics | For emphasizing a snippet of text with italics.|

<p data-height="281" data-theme-id="22009" data-slug-hash="xZmxzQ" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/xZmxzQ/'>inline text</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Text alignment**, Bootstrap has some nice classes to help you set alignment of text in HTML rather then CSS.

```
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
```

<p data-height="196" data-theme-id="22009" data-slug-hash="gPZOQP" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/gPZOQP/'>text alignment</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Text transformation**, classes to help you add text transformation such as lowercase, uppercase.

```
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
```

<p data-height="130" data-theme-id="22009" data-slug-hash="EPGxOO" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/EPGxOO/'>text transformation</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Addresses**, present contact information for the nearest ancestor or the entire body of work. Preserve formatting by ending all lines with `<br>`.

```
<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market Street, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>
```

<p data-height="191" data-theme-id="22009" data-slug-hash="RrEwOW" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/RrEwOW/'>addresses</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Blockquotes**, for quoting blocks of content from another source. Add a `<footer>` for identifying the source. Wrap the name of the source work in `<cite>`

```
<blockquote>
  <p>Bootstrap is a pretty neat CSS framework.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```

<p data-height="123" data-theme-id="22009" data-slug-hash="pgqoma" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/pgqoma/'>blockquote</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 4. List

**Lists**, the basic unordered(ul), ordered(ol). You can easily make an unstyled unordered list with the `.list-unstyled` class. Make an inline list with the `.list-inline` class. And create a description list using the `<dl>` element.

```
<!-- unordered list -->
<ul>
  <li>...</li>
</ul>
<!-- ordered list -->
<ol>
  <li>...</li>
</ol>
<!-- unstyled list, applies to immediate children only -->
<ul class="list-unstyled">
  <li>...</li>
</ul>
<!-- inline list -->
<ul class="list-inline">
  <li>...</li>
</ul>
<!-- discription list -->
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
<!-- horizontal description list -->
<dl class="dl-horizontal">
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

<p data-height="398" data-theme-id="22009" data-slug-hash="VeqYKe" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/VeqYKe/'>lists</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 5. Table

**Tables**, there is a set of classes to help give tables a quick and easy styling. The most basic is the `.table` class. It adds light padding and only horizontal dividers.

```
<table class="table">
  ...
</table>
```

<p data-height="194" data-theme-id="22009" data-slug-hash="mVayLw" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/mVayLw/'>.table</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You can add zebra striping to your table with `.table-striped`.

```
<table class="table table-striped">
  ...
</table>
```

<p data-height="190" data-theme-id="22009" data-slug-hash="EPGaea" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/EPGaea/'>.table-striped</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Add border to all your table rows with the `.table-bordered` class.

```
<table class="table table-bordered">
  ...
</table>
```

<p data-height="201" data-theme-id="22009" data-slug-hash="YwdPOZ" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/YwdPOZ/'>.table-bordered</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

To give a hover state to your rows, add `.table-hover`

```
<table class="table table-hover">
  ...
</table>
```

<p data-height="189" data-theme-id="22009" data-slug-hash="gPZbBX" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/gPZbBX/'>.table-hover</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

For a more compact table by cutting cell padding in half, use `.table-condensed`.

```
<table class="table table-condensed">
  ...
</table>
```

Bootstrap has a set of contextual classes that can add color to your table rows or individual cells. `.active`, `.success`, `.info`, `.warning`, and `.danger`.

```
<!-- On rows -->
<tr class="active">...</tr>
<tr class="success">...</tr>
<tr class="warning">...</tr>
<tr class="danger">...</tr>
<tr class="info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="active">...</td>
  <td class="success">...</td>
  <td class="warning">...</td>
  <td class="danger">...</td>
  <td class="info">...</td>
</tr>
```

<p data-height="270" data-theme-id="22009" data-slug-hash="GoPpBJ" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/GoPpBJ/'>table contextual classes</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 6. Form

Bootstrap has a set of global styling for all form elements like `<input>`, `<textarea>`, and `<select>`. Use the classes `.form-control` and `.form-group` to give the forms a standard spacing.

```
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
```

<p data-height="340" data-theme-id="22009" data-slug-hash="XXomoP" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/XXomoP/'>form</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You can customize your forms using Bootstrap's classes. `.form-inline` will set the form elements to be inline for screen sizes bigger than 768px.

```
<form class="form-inline">
  <div class="form-group">
    ...
  </div>
  <div class="form-group">
    ...
  </div>
</form>
```

For the rest of the form classes, go to [Bootstrap's website](https://getbootstrap.com/css/#forms).

## 7. Button

Bootstrap has a standard style for buttons. Use the class `.btn` and optional classes `.btn-default`, `.btn-primary`, `.btn-success`, `.btn-info`, `.btn-warning`, `.btn-danger`, and `.btn-link` for quick styling.

```
<!-- Standard button -->
<button type="button" class="btn btn-default">Default</button>

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>

<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>

<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
```

<p data-height="81" data-theme-id="22009" data-slug-hash="WrLQVE" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/WrLQVE/'>btns</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You can also adjust button sizes with the classes `.btn-lg`, `.btn-sm`, and `.btn-xs`.

```
<p>
  <button type="button" class="btn btn-primary btn-lg">Large button</button>
  <button type="button" class="btn btn-default btn-lg">Large button</button>
</p>
<p>
  <button type="button" class="btn btn-primary">Default button</button>
  <button type="button" class="btn btn-default">Default button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-sm">Small button</button>
  <button type="button" class="btn btn-default btn-sm">Small button</button>
</p>
<p>
  <button type="button" class="btn btn-primary btn-xs">Extra small button</button>
  <button type="button" class="btn btn-default btn-xs">Extra small button</button>
</p>
```

<p data-height="214" data-theme-id="22009" data-slug-hash="YwdwKX" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/YwdwKX/'>btn sizes</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 8. Image

Bootstrap has a useful class `.img-responsive` that will make your images responsive to different screen sizes. It applies `max-width: 100%`, `height: auto;`, and `display: block;` to the image so that it scales nicely to the parent element. To center the image with `.img-responsive` class, use `.center-block`.

```
<img src="..." class="img-responsive" alt="image">
```

There are three extra image classes that will give a simple shape to your images. `.img-rounded`, `.img-circle`, and `.img-thumbnail`.

```
<img src="..." alt="..." class="img-rounded">
<img src="..." alt="..." class="img-circle">
<img src="..." alt="..." class="img-thumbnail">
```

<p data-height="206" data-theme-id="22009" data-slug-hash="EPGPVM" data-default-tab="result" data-user="xiaopow" class='codepen'>See the Pen <a href='http://codepen.io/xiaopow/pen/EPGPVM/'>image shapes</a> by xiao yang (<a href='http://codepen.io/xiaopow'>@xiaopow</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

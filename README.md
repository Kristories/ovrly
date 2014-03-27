# OVRLY

*Overlaying images with CSS*


## Install

### Bower

Make sure you have bower installed or install it via `npm install -g bower`.

```
bower install --save ovrly
```

### Old School

- [ovrly.css](https://raw.githubusercontent.com/Kristories/ovrly/master/css/ovrly.css)
- [ovrly.min.css](https://raw.githubusercontent.com/Kristories/ovrly/master/css/ovrly.min.css)



## Usage

### LESS

#### Basic

```less
.foo{
	.ovrly-pixel();
}
```

#### With color

```less
.foo{
	.ovrly-pixel(#ED5821);
}
```

### CSS

#### Basic

```css
.foo{
	.ovrly-pixel;
}
```

#### With color

Default color is `#333333`, but you can change `ovrly` color from [here](http://kristories.github.io/ovrly)


## Contributing

- Use **[OVRLY Generator](http://kristories.github.io/ovrly/generator)** to generate your PNG OVRLY
- Maximum PNG size `100 x 100` px
- Opacity `10%` & `20%`

Example PNG

![Example](https://raw.github.com/Kristories/ovrly/master/example/example.png)

[Download PSD](https://raw.github.com/Kristories/ovrly/master/example/example.psd)

## License

The MIT License (MIT)

Copyright (c) 2014 [Wahyu Kristianto](https://twitter.com/kristories)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
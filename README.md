# { ovrly }

Overlaying images with CSS


## Usage

#### LESS

```less
.target-a{
    .ovrly('pixel'); // Default color #333
}

.target-b{
    .ovrly('batik', red);
}

.target-c{
    .ovrly('galaxy', #333);
}
```

#### SASS

```sass
.target-a{
    @include ovrly('pixel'); // Default color #333
}

.target-b{
    @include ovrly('batik', red);
}

.target-c{
    @include ovrly('galaxy', #333);
}
```

#### CSS

```html
<div class="ovrly-pixel"></div>
```

Default `background-color` is `#333`. You can change `background-color` with this method :

```css
/* Default color #333 */
.ovrly-pixel:after{
    background-color: rgba(255, 255, 255, .6); /* Change color */
}
```


## Pattern type

- `ovrly-pixel`
- `ovrly-horizontal`
- `ovrly-vertical`
- `ovrly-diagonal-left`
- `ovrly-diagonal-righ`
- `ovrly-zigzag-horizontal`
- `ovrly-zigzag-vertical`
- `ovrly-snake`
- `ovrly-batik`
- `ovrly-galaxy`
- `ovrly-apolo`
- `ovrly-skull`


## License

MIT

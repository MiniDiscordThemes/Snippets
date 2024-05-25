[preview-new1]: https://minidiscordthemes.github.io/Snippets/ProfileBannerHeight/preview-new1.avif
[preview-new2]: https://minidiscordthemes.github.io/Snippets/ProfileBannerHeight/preview-new2.avif
[preview-new3]: https://minidiscordthemes.github.io/Snippets/ProfileBannerHeight/preview-new3.avif
[preview-old1]: https://minidiscordthemes.github.io/Snippets/ProfileBannerHeight/preview-old1.avif
[preview-old2]: https://minidiscordthemes.github.io/Snippets/ProfileBannerHeight/preview-old2.avif
[preview-old3]: https://minidiscordthemes.github.io/Snippets/ProfileBannerHeight/preview-old3.avif

# Profile Banner Height
![Status: working](https://img.shields.io/badge/status-working-green?style=flat-square)

Customisable profile banner height.

| Old profile                   | New profile experiment                    |
| ----------------------------- | ----------------------------------------- |
| ![Old themed][preview-old1]   | ![New themed][preview-new1]               |
| ![Old themed][preview-old2]   | ![New unthemed with status][preview-new2] |
| ![Old unthemed][preview-old3] | ![New unthemed][preview-new3]             |

## Usage
### `@import`
```css
@import url("https://minidiscordthemes.github.io/Snippets/ProfileBannerHeight/main.css");
```
### Replugged automatic theme
[Install now](https://replugged.dev/install?identifier=net.saltssaumure.ProfileBannerHeight)
### Replugged manual theme
[Download now](https://github.com/MiniDiscordThemes/Snippets/releases/latest/download/net.saltssaumure.ProfileBannerHeight.asar)
### Vencord online theme
```
https://minidiscordthemes.github.io/Snippets/ProfileBannerHeight/main.css
```

## Customisation
Paste the following at the end of Custom / Quick CSS, then edit the values:
```css
.userProfileInner__8ff35 {
    /* Plain colour banner */
    &:where(:not(:has(.banner__6d414[style*="background-image"]))) {
        --banner-height-desired: 60px;
    }
    /* Image banner */
    &:where(:has(.banner__6d414[style*="background-image"])) {
        --banner-height-desired: 70px;
    }
    /* All banner types in new profile experiment */
    &.biteSizeInnerThemed__5cdaf {
        --banner-height-desired: 65px;
    }
}
```
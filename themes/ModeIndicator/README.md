[preview]: https://minidiscordthemes.github.io/Snippets/ModeIndicator/preview.avif

# Mode Indicator
![Status: working](https://img.shields.io/badge/status-working-green?style=flat-square)

Adds a dark / light mode indicator on the titlebar. Especially useful for theme development.

![Mode Indicator in light and dark mode][preview]

## Usage
### `@import`
```css
@import url("https://minidiscordthemes.github.io/Snippets/ModeIndicator/main.css");
```
### Replugged automatic theme
[Install now](https://replugged.dev/install?identifier=net.saltssaumure.ModeIndicator)
### Replugged manual theme
[Download now](https://github.com/MiniDiscordThemes/Snippets/releases/latest/download/net.saltssaumure.ModeIndicator.asar)
### Vencord online theme
```
https://minidiscordthemes.github.io/Snippets/ModeIndicator/main.css
```

## Customisation
Paste the following at the end of Custom / Quick CSS, then edit the values:
```css
.theme-dark {
    --modeindicator-text: "Dark mode";
}
.theme-light {
    --modeindicator-text: "Light mode";
}
```
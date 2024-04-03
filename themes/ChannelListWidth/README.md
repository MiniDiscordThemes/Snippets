[previewWide]: https://minidiscordthemes.github.io/Snippets/ChannelListWidth/preview-wide.avif
[previewNarrow]: https://minidiscordthemes.github.io/Snippets/ChannelListWidth/preview-narrow.avif

# Channel List Width
![Status: working](https://img.shields.io/badge/status-working-green?style=flat-square)

Improved custom channel list width and header height, with fixes for server banners and user panel.

- Banners stretch/shrink correctly to fit any channel list width and header height.
- User panel buttons reposition above user info when channel list is narrow, and spread out when channel list is wide.

| 600px                              | 240px                                |
| ---------------------------------- | ------------------------------------ |
| ![600px channel list][previewWide] | ![240px channel list][previewNarrow] |

## Usage
### `@import`
```css
@import url("https://minidiscordthemes.github.io/Snippets/ChannelListWidth/main.css");
```
### Replugged automatic theme
[Install now](https://replugged.dev/install?identifier=net.saltssaumure.ChannelListWidth)
### Replugged manual theme
[Download now](https://github.com/MiniDiscordThemes/Snippets/releases/latest/download/net.saltssaumure.ChannelListWidth.asar)
### Vencord online theme
```
https://minidiscordthemes.github.io/Snippets/ChannelListWidth/main.css
```

## Customisation
Paste the following at the end of Custom / Quick CSS, then edit the values:
```css
:root {
    --channellist-width: 240px;
    --channellist-header-height: 48px;
}
```
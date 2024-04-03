[profilePreview]: https://minidiscordthemes.github.io/Snippets/AvatarDecorationCheckmark/profile.avif
[dmPreview]: https://minidiscordthemes.github.io/Snippets/AvatarDecorationCheckmark/dm.avif
[memberlistPreview]: https://minidiscordthemes.github.io/Snippets/AvatarDecorationCheckmark/memberlist.avif
[messagePreview]: https://minidiscordthemes.github.io/Snippets/AvatarDecorationCheckmark/message.avif

# Avatar Decoration Checkmark
![Status: working](https://img.shields.io/badge/status-working-green?style=flat-square)

Adds the Twitter Verified checkmark after the username of anyone using a paid avatar decoration.

>**OIRNOIR** ([Replugged : #plugin-dev](https://discord.com/channels/1000926524452647132/1000955966520557689/1157562169303515136))
>I wonder how complicated it would be to create a plugin that added a blue checkmark (or some other sarcastic indicator) to users using one of the paid avatar decorations

|   Location   |                                 Preview                                  |
| :----------: | :----------------------------------------------------------------------: |
| User profile |  ![Avatar Decoration Checkmark applied to user profile][profilePreview]  |
|  DM header   |      ![Avatar Decoration Checkmark applied to DM header][dmPreview]      |
| Member list  | ![Avatar Decoration Checkmark applied to member list][memberlistPreview] |
|   Message    |    ![Avatar Decoration Checkmark applied to message][messagePreview]     |

## Usage
### `@import`
```css
@import url("https://minidiscordthemes.github.io/Snippets/AvatarDecorationCheckmark/main.css");
```
### Replugged automatic theme
[Install now](https://replugged.dev/install?identifier=net.saltssaumure.AvatarDecorationCheckmark)
### Replugged manual theme
[Download now](https://github.com/MiniDiscordThemes/Snippets/releases/latest/download/net.saltssaumure.AvatarDecorationCheckmark.asar)
### Vencord online theme
```
https://minidiscordthemes.github.io/Snippets/AvatarDecorationCheckmark/main.css
```

## Customisation
To change the checkmark to another image or svg:
```css
:root {
    --adc-badge: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/180px-Smiley.svg.png");
}
```

## Includes
- [sass-fairy](https://github.com/roydukkey/sass-fairy) by [roydukkey](https://github.com/roydukkey) - [MIT License](https://github.com/roydukkey/sass-fairy/blob/master/LICENSE)
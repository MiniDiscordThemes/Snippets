# Want to contribute to this snippet collection?

## General guidelines
- All contributions must be your own work or contributed with permission from the author. By contributing, you agree to license the work under the [MIT License](LICENSE).
- Assets should be included in the snippet `asset` directory whenever possible. External fonts from Google Fonts are allowed. Other external assets are approved only on a case-by-case basis.
- Use class selectors rather than attribute selectors.
  
### File structure
| File                 | Mandatory | Location                 | Additional requirements     |
| -------------------- | --------- | ------------------------ | --------------------------- |
| Preview image(s)     | Yes       | `<snippet-name>/preview` | `.jpg`/`.png`/`.gif` format |
| Main SCSS file       | Yes       | `<snippet-name>/scss`    | Named `main.scss`           |
| Partial SCSS file(s) | No        | `<snippet-name>/scss`    | `.scss` format              |
| Description          | Yes       | `<snippet-name>`         | Named `README.md`           |
| Assets               | No        | `<snippet-name>/asset`   |                             |

Example snippet structure:

```
└── <snippet-name>/
    ├── preview/
    │   └── preview.png
    ├── scss/
    │   └── main.scss
    └── README.md
```

## Improve a snippet
1. Fork and clone this repository.
2. Make your changes to the snippet files.
3. Run `pnpm i && pnpm lint:fix` to ensure correct formatting.
4. Create a pull request.

## Add a snippet
1. Fork and clone this repository.
2. Create your snippet files in `themes/` directory (see [above](#file-structure) for structure).
3. Run `pnpm i && pnpm lint:fix` to ensure correct formatting.
4. Add your snippet to the main `README.md` catalogue.
5. Create a pull request.
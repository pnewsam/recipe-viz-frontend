# Recipe Visualizer

Recipe visualizer is an app designed to communicate recipe information in an intuitive way.

## Components

```
components
--/UI
```

## Styles

This project uses a combination of global styles and component-specific style modules.

### Global Styles

Global styles are intended to enforce consistency in styles across the project and cut down on the number of style declarations made at the component-level. The styles applied here - especially those defined in `base.css` - should reflect design system guidelines as closely as possible.

**Good Candidates for Global Styles:**

- Fonts
- Colors
- Spacing (Margin/Padding)
- Borders

#### Files

- `base.css`: Base styles applied to the HTML elements.
- `reset.css`: Style resets.
- `variables.css`: Global css variables.

### Style Modules

Whenever adding styles via a style module, first be sure that the style wouldn't more helpfully exist in global styles.

## Data Models

The `~/models` directory contains the data models used in the application.

## To Do List

- [ ] Add 12-column classes for use throughout.
- [ ] Add google fonts.
- [ ] Fix layout grid styles.

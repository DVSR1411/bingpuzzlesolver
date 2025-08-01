# Bing Puzzle Solver

A browser extension that solves Bing image puzzles automatically or manually.

## Features

- 🧩 Automatic puzzle solving
- 🎯 Manual solving assistance
- 🚀 Works on Bing Spotlight pages
- 🔧 Easy-to-use popup interface

## Installation

### From Source

1. Clone or download this repository
2. Open your browser’s extensions page:
    - Chrome/Brave/Opera: `chrome://extensions/`
    - Edge: `edge://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension icon should appear in your browser toolbar

## Usage

1. Navigate to any Bing Spotlight puzzle page (`https://www.bing.com/spotlight/*`)
2. Click the extension icon in your browser toolbar
3. Use the popup interface to solve puzzles automatically or get manual assistance

## Files Structure

```
├── manifest.json       # Extension configuration
├── popup.html          # Extension popup interface
├── popup.js            # Popup functionality
├── content.js          # Content script for Bing pages
├── solver.js           # Puzzle solving logic
├── LICENSE             # License file
└── images/             # Extension icons
    ├── image16.png
    ├── image32.png
    ├── image128.png
    ├── image192.png
    └── image512.png
```

## Permissions

This extension requires the following permissions:
- `scripting` - To inject solving scripts into web pages
- `activeTab` - To access the current tab
- `tabs` - To interact with browser tabs
- Host permission for `https://www.bing.com/spotlight/*`

## Development

### Prerequisites
- A Chromium-based browser (Chrome, Edge, Brave, Opera, etc.)
- Basic knowledge of JavaScript and Chrome Extensions

### Local Development
1. Make changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card to reload changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

See [LICENSE](LICENSE) file for details.

## Support
Thanks for using my extension! 🎉
If you encounter any issues or have questions, please open an issue in the repository.
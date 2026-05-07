# IsmailUSA - AhmedDev Payment App

Vite + React + Tailwind CSS payment page.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Logo + lang switcher + theme toggle
│   ├── Hero.jsx         # Title section
│   ├── MethodTabs.jsx   # Terminal / 0804 selector tabs
│   ├── TerminalPanel.jsx
│   ├── PhonePanel.jsx
│   ├── NumberRow.jsx    # Reusable number row with copy/pay buttons
│   └── Toast.jsx        # Copy confirmation toast
├── hooks/
│   ├── useTheme.js      # Dark/light mode with localStorage
│   └── useToast.js      # Toast notification state
├── data.js              # Phone numbers, terminal numbers, translations (TK/RU/TR)
├── App.jsx
├── main.jsx
└── index.css            # Tailwind + custom animations
```

## Customization

Edit `src/data.js` to update numbers or translations.

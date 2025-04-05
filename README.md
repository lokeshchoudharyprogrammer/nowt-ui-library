
# nowt-ui-library

A customizable and reusable React UI component library built with TypeScript. Perfect for React and Next.js projects.

> ⚠️ This library is currently under development. Only the `Button` component is available for now. More components coming soon!


---

## 🚀 Installation

```bash
npm install nowt-ui-library
```

---

## 📦 Usage

```tsx
import React from 'react';
import { Button } from 'nowt-ui-library';

const App = () => {
  return (
    <Button label="Click me" onClick={() => alert('Hi')} />
  );
};
```

---

## ⚙️ Props

| Prop        | Type                                                       | Default     | Description                                      |
|-------------|------------------------------------------------------------|-------------|--------------------------------------------------|
| `label`     | `string`                                                   | —           | Button text                                      |
| `onClick`   | `() => void`                                               | —           | Function to call on button click                 |
| `size`      | `'small' | 'medium' | 'large'`                             | `'medium'`  | Size of the button                               |
| `variant`   | `'primary' | 'secondary' | 'danger' | 'outline'`       | `'primary'` | Visual style of the button                       |
| `loading`   | `boolean`                                                  | `false`     | Shows a loading spinner if `true`               |
| `disabled`  | `boolean`                                                  | `false`     | Disables the button                              |
| `fullWidth` | `boolean`                                                  | `false`     | Makes the button take full width                 |
| `bgColor`   | `string`                                                   | —           | Custom background color (overrides variant)      |
| `textColor` | `string`                                                   | —           | Custom text color                                |

---

## 📚 Examples

### 🔵 Primary Button

```tsx
<Button label="Primary" />
```

### 🔴 Danger with Large Size

```tsx
<Button label="Delete" variant="danger" size="large" />
```

### ⏳ Loading State

```tsx
<Button label="Loading..." loading />
```

### ⚫ Disabled Button

```tsx
<Button label="Disabled" disabled />
```

### 🌈 Custom Colors

```tsx
<Button label="Custom" bgColor="#222" textColor="#0f0" />
```

### ⬜ Outline Style

```tsx
<Button label="Outline" variant="outline" />
```

### 🔄 Full Width

```tsx
<Button label="Full Width" fullWidth />
```

---

## 🧑‍💻 Author

Made with ❤️ by Lokesh Choudhary  
Feel free to contribute or suggest improvements!

---

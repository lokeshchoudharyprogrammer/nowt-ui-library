# 🌿 nowt-ui

> **Nothing unnecessary. Just clean UI.**  
A lightweight and customizable UI component library built for speed and simplicity.

---

## 🚀 Features

- 🎯 **Minimal & Performant** – Designed with performance in mind.
- 🎨 **Themeable** – Customize styles to fit your brand.
- 🧱 **Reusable Components** – Common building blocks like Button, Input, Modal, etc.
- ⚛️ **Framework Friendly** – Works great with React and modern JS frameworks.
- 🛠️ **Easy to Extend** – Build on top of it or fork it easily.


##  ❤️ Why "nowt-ui"?
“Nowt” is British slang for “nothing” — because this library adds nothing unnecessary. Just clean, reusable components that work.

---
## 🛠️ Getting Started
> ⚠️ This library is currently under development. Only the `Button , Input , Card` component is available for now. More components coming soon!


---

## 🚀 Installation

```bash
npm install nowt-ui-library
```

---

# 🖼️ Components

- [Button Component](#button-component)  
- [Input Component](#input-component)
- [Card Component](#card-component)
- [TextArea Component](#textarea-component)


## 📦 Usage
## Button Component
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


## Input Component

This version includes a powerful and reusable `<Input />` component with full TypeScript support.

```
npm install nowt-ui-library
```
## 🔥 Features

- ✅ Fully typed with TypeScript  
- 🎯 Easy to customize with icons, styles, and classNames  
- ⚠️ Supports validation + error handling  
- 🧠 Works in React & Next.js  
- 🎨 Lightweight and reusable  


### 💡 All Features Example

```tsx

import React, { useState } from 'react';
 // import from your UI lib
import { Mail, Lock, User } from 'lucide-react'; // optional icons
import { Input } from 'nowt-ui-library';

export default function Example() {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 32, maxWidth: 450, margin: 'auto' }}>
      {/* ✅ label */}
      <Input
        label="Email"
        placeholder="Enter your email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* ✅ labelClassName */}
      <Input
        label="Styled Label"
        labelClassName="custom-label"
        placeholder="With custom label"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* ✅ containerClassName */}
      <Input
        label="Container Class"
        containerClassName="custom-container"
        placeholder="Styled container"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* ✅ containerStyle */}
      <Input
        label="Container Style"
        containerStyle={{ backgroundColor: '#f3f4f6', padding: 10 }}
        placeholder="Styled container"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* ✅ helperText */}
      <Input
        label="Username"
        placeholder="e.g. lokesh_dev"
        helperText="Must be unique"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* ✅ error */}
      <Input
        label="Invalid Email"
        placeholder="example.com"
        error="This is not a valid email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* ✅ leftIcon */}
      <Input
        label="With Left Icon"
        placeholder="example@email.com"
        leftIcon={<Mail size={16} />}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* ✅ rightIcon */}
      <Input
        label="With Right Icon"
        placeholder="Enter password"
        type="password"
        rightIcon={<span style={{ fontSize: 12 }}>👁️</span>}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* ✅ Combined all */}
      <Input
        label="Full Combo"
        labelClassName="text-blue-500"
        containerClassName="rounded-md shadow"
        containerStyle={{ marginTop: 20 }}
        placeholder="All props together"
        helperText="Everything included"
        error={value.length < 3 ? 'Min 3 characters' : ''}
        leftIcon={<User size={16} />}
        rightIcon={<span style={{ fontSize: 12 }}>✅</span>}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}




```
### 🎨 Custom Styles
You can easily style the `<Input />` component using CSS. Here's an example of how you can style the label and container:
```

.custom-label {
  font-weight: bold;
  color: green;
}

.custom-container {
  background: #fff0f0;
  padding: 10px;
  border-radius: 6px;
  color: #333;
}


```
---

## 📘 Props



| Prop               | Type                          | Description                            |
|--------------------|-------------------------------|----------------------------------------|
| `label`            | `string`                      | Label displayed above the input        |
| `labelClassName`   | `string`                      | Class for styling the label            |
| `containerClassName`| `string`                     | Custom class for the input container   |
| `containerStyle`   | `React.CSSProperties`         | Inline styles for the input container  |
| `helperText`       | `string`                      | Info/help message under the input      |
| `error`            | `string`                      | Error message (turns text red)         |
| `leftIcon`         | `React.ReactNode`             | Icon to show inside input on the left  |
| `rightIcon`        | `React.ReactNode`             | Icon to show inside input on the right |
| `...rest`          | Native `<input>` props        | Supports all native input props        |

---

## Card Component


A clean, modern, and highly customizable React component for displaying premium cards — ideal for SaaS apps, dashboards, e-commerce, portfolios, testimonials, and more.

> Built with ❤️ for developers who care about design and usability.

---

## 🔥 Features

- ⚡ Production-ready card UI
- 💅 Customizable props (themes, actions, avatars, tags, etc.)
- 🎨 Light & dark themes
- 📱 Responsive & mobile-friendly
- 🧩 Supports cover images, avatars, progress bars, badges, status icons & more



## 📦 Installation

```bash
npm install nowt-ui-library
```
---

## 🚀 Usage
```tsx
import React from 'react';
import {Card} from 'nowt-ui-library';

const App = () => {
  return (
    <Card
    title="AI Conference 2025"
    subtitle="Starts April 14, 2025"
    image="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    description="Join over 10,000 developers and learn about the future of AI and ML."
    tag="Online"
    tags={['AI', 'ML', 'Future Tech']}
    theme="dark"
    width={400}
    hlight
    status="success"
    badge="Live"
    footer={<span style={{ fontWeight: 500 }}>Save your seat →</span>}
    />
  );
};

```

---

## ✨ Props

| Prop         | Type                  | Description                                                              |
|--------------|-----------------------|--------------------------------------------------------------------------|
| `title`      | `string`              | Main title                                                               |
| `subtitle`   | `string`              | Subtitle text                                                            |
| `description`| `string`              | Optional card description                                                |
| `image`      | `string`              | Optional cover image                                                     |
| `avatar`     | `string`              | Optional avatar image (circular)                                         |
| `badge`      | `string`              | Small badge on top-left (e.g., Pro, Beta)                                |
| `tag`        | `string`              | Highlighted tag above title                                              |
| `tags`       | `string[]`            | Array of tags (displayed as chips)                                       |
| `status`     | `"success"` \| `"warning"` \| `"error"` \| `"neutral"` | Status dot beside avatar or tag                         |
| `progress`   | `number`              | Optional progress bar (0-100)                                            |
| `theme`      | `"light"` \| `"dark"` | Theme styling                                                            |
| `width`      | `number`              | Width of the card (default `320`)                                        |
| `footer`     | `ReactNode`           | Content shown at bottom                                                  |
| `actions`    | `ReactNode`           | Buttons, links, etc. for user action                                     |
| `hlight`     | `boolean`             | Apply hover highlight effect                                             |

---

## 🎨 Custom Styling

Wrap the component in your own layout or apply Tailwind/CSS classes via container.  
You can also extend it with your own `theme`, `animation`, or even slot-based customization.


---


## TextArea Component



## 📦 Installation

```bash
npm install nowt-ui-library
```
---

## 🚀 Usage
```tsx
import React from 'react';
import {TextArea} from 'nowt-ui-library';

const App = () => {
  return (
        <TextArea
          label="Leave Feedback"
          theme="dark"
          autosize
          maxLength={300}
          onChange={(e) => setText(e.target.value)}
          value={text}
          emoji={true}
          width="100%"
          height={120}
          placeholder="Tell us what you think..."
          isMic={true}
        />
  );
};

```
## ✨ Props

| Prop        | Type                                   | Description                                           |
|-------------|----------------------------------------|-------------------------------------------------------|
| `label`     | `string` \| `null` \| `undefined`      | Optional label for the textarea                      |
| `maxLength` | `number`                               | Maximum number of characters allowed                 |
| `autosize`  | `boolean`                              | Whether the textarea should auto-resize              |
| `theme`     | `Theme`                                | Custom theme object for styling                      |
| `draftKey`  | `string`                               | Key used to save textarea content as draft           |
| `width`     | `string` \| `number`                   | Width of the textarea                                |
| `height`    | `string` \| `number`                   | Height of the textarea                               |
| `emoji`     | `boolean`                              | Enable emoji input inside textarea                   |
| `isMic`     | `boolean`                              | Show microphone icon for voice input                 |
| `...rest`   | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` | All standard `<textarea>` HTML attributes |


## 🧑‍💻 Author

Made with ❤️ by **Lokesh Choudhary**

- 🐙 GitHub: [@lokesh-choudhary](https://github.com/lokeshchoudharyprogrammer)  
- 🐦 Twitter (X): [@itscrazylokesh](https://x.com/itscrazylokesh)

---

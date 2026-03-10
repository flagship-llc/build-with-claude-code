# Building Mobile Apps with Claude Code

With React Native + Expo, you can build apps for both iOS and Android from a single codebase.
Even without coding experience, you can build an app by conversing with Claude Code.

---

## Why Expo?

- **One codebase for iOS and Android** — No need to learn Swift or Kotlin separately
- **Instant preview with Expo Go** — Just scan a QR code on your phone
- **No simulator required** — No Xcode or Android Studio needed
- **Great with Claude Code** — "Add a button that goes to the next screen" just works

---

## Getting Started

### 1. Create a Project

Tell Claude Code:

```
"I want to build a [description] app with Expo. Set up the project."
```

### 2. Preview on Your Phone

1. Install **Expo Go** ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
2. Tell Claude Code "start the dev server"
3. Scan the QR code
4. The app runs on your device

### 3. Add Features Incrementally

```
"Add a login screen"
"Make the button navigate to a list screen"
"Add camera functionality to take and save photos"
"Make the design cleaner"
```

Build small, test often.

---

## Example Prompts

| Goal | Prompt |
|---|---|
| Navigation | "Create 3 screens (home, list, detail) with tab navigation" |
| Data storage | "Save input locally and restore on next launch" |
| API integration | "Fetch data from this API and display in a list" |
| Design | "Make it simpler and more modern" |

---

## Building with Swift / Xcode

For native iOS development:

- **Xcode** — Install from Mac App Store (~15GB)
- **Apple ID** — Personal Apple ID works (no developer enrollment needed)

Tell Claude Code "I want to build an iOS app with Swift" to get started.

---

## References

- [Expo Official](https://expo.dev/)
- [Expo Go (Mobile App)](https://expo.dev/go)
- [React Native Official](https://reactnative.dev/)

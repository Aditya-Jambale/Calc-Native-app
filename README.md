# NativeScript Calculator

A simple NativeScript calculator app that performs basic arithmetic operations with a clean and user-friendly design. The app features a visually appealing display where the current operation is blurred, and the result is shown in a bold, prominent style. The app includes a credit line at the bottom that reads "Calc by Aditya Jambale."

---

## Features
- Perform basic arithmetic operations: Addition, Subtraction, Multiplication, and Division.
- Blurred or dimmed display for the current operation (e.g., `2+2`).
- Bold and large font display for the result.
- A green "=" button for calculating results.
- Developer credit at the bottom of the screen: "Calc by Aditya Jambale."

---

## Technologies Used
- **NativeScript**: For building the cross-platform mobile application.
- **JavaScript/TypeScript**: Core programming languages for app logic.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aditya-Jambale/Calc-Native-app.git
   cd nativescript-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app on a connected Android or iOS device:
   - **For Android**:
     ```bash
     ns run android
     ```
   - **For iOS** (requires macOS and Xcode):
     ```bash
     ns run ios
     ```

---

## Building the APK

1. Build the release APK:
   ```bash
   ns build android --release
   ```

2. Find the generated APK in:
   ```
   platforms/android/app/build/outputs/apk/release/app-release.apk
   ```

3. Transfer the APK to your Android device to test the app.

---

## Screenshot
![Calculator Screenshot](assets/Screenshot.jpg)

---

## Future Enhancements
- Add advanced calculator features like trigonometric functions, percentages, and memory buttons.
- Improve UI/UX with animations and themes.
- Add support for internationalization (i18n).

---

## Credits
- Developed by **Aditya Jambale**.

---

## License
This project is licensed under the [MIT License](LICENSE).


# pcf-file-upload-button

The `pcf-file-upload-button` is a PowerApps PCF (PowerApps Component Framework) component that enables users to upload a file through a button. The uploaded file's contents are converted into a Base64 string, which is then accessible via the component's output property. 

## Features

- **File Upload**: Allows users to click the button to select and upload a file.
- **Base64 Encoding**: Retrieves and converts the file contents into a Base64 string which is accessible as an output property.

## Properties

- `content`: Outputs the file's contents as a Base64-encoded string.
- `fileName`: Outputs the name of the uploaded file.

## Usage

1. Install the `pcf-file-upload-button` into your PowerApps app.
2. Add the component to your screen.
3. Bind the `content` and `fileName` output properties to controls or use them in your logic to process the uploaded file.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/akleinvm/pcf-file-upload-button.git
    ```
2. Navigate to the project directory:
    ```bash
    cd pcf-file-upload-button
    ```
3. Build and deploy the component:
    ```bash
    npm install
    npm run build
    pac pcf push
    ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a suggestion.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

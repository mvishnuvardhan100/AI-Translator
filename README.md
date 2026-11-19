# AI Translator

A browser-based AI translation application built with React and JavaScript. It uses a locally running multilingual AI model through Hugging Face Transformers.js to translate text between English and Telugu without relying on paid translation APIs.

## Overview

AI Translator provides a simple and responsive interface for translating text between English and Telugu. The application runs the translation model directly in the browser, allowing users to translate text without requiring an external API key.

The project focuses on integrating machine learning models into modern web applications while keeping the implementation accessible and cost-effective.

## Features

- English to Telugu translation
- Telugu to English translation
- AI-powered translation using the NLLB model
- In-browser model inference using Transformers.js
- No paid API keys required
- Swap translation direction
- Copy translated text
- Clear input and output fields
- Responsive user interface
- Error handling during translation

## Tech Stack

| Technology                   | Purpose                             |
| ---------------------------- | ----------------------------------- |
| React                        | Frontend user interface             |
| JavaScript                   | Application logic                   |
| Vite                         | Development server and build tool   |
| Hugging Face Transformers.js | Running the AI model in the browser |
| NLLB-200 Distilled 600M      | Multilingual translation model      |
| CSS                          | Styling and responsive design       |

## AI Model

This project uses the `Xenova/nllb-200-distilled-600M` model.

**Model:** NLLB-200 Distilled 600M  
**Provider:** Meta AI  
**Platform:** Hugging Face  
**Library:** Transformers.js

The model supports multiple languages, including English and Telugu.

Language codes used:

- English: `eng_Latn`
- Telugu: `tel_Telu`

The model is downloaded when required and runs locally in the browser using Transformers.js. The initial download may take some time depending on your internet connection. Subsequent usage can benefit from browser caching.

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/mvishnuvardhan100/AI-Translator.git
```

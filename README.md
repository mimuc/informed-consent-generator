# 📝 Informed Consent Generator

> A tool for generating GDPR-compliant informed consents, specifically designed for HCI research.

## Features
- Tailored for **Human-Computer Interaction (HCI)** studies
- Outputs **GDPR-compliant** informed consent forms
- **Print-optimized**: Works seamlessly with browser print functions  _(e.g., Chrome → Print → Remove header/footer)_

## Usage: Parsing Templates

To parse and compile the template:

```bash
cd templates
handlebars template_en.handlebars -f template_en.precompiled.js

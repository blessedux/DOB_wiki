---
title: Contributing to Documentation
description: A guide for non-technical users on how to edit documentation content
---

# How to Edit Documentation Content

This guide explains how non-technical team members can contribute to the DOB Protocol documentation without needing to work with code or GitHub repositories.

## Accessing the Editor

1. Navigate to the DOB Protocol documentation site
2. Click on the "Edit Content" link in the top navigation bar
3. Enter the editor password when prompted (ask your team admin for the password)

## The Editor Interface

The editor interface consists of two main sections:

1. **File Browser** - Shows all the content files in the documentation
2. **Content Editor** - Allows you to edit the selected file

## Creating a New Document

1. Click the "Create New File" button in the file browser
2. Enter the file path (e.g., `guides/new-feature.md`)
   - Always include the `.md` extension
   - Use directories to organize content (e.g., `guides/`, `components/`)
3. Click "Create"
4. The new file will open in the editor with a basic template

## Editing Existing Content

1. Find the file you want to edit in the file browser
2. Click the "Edit" button next to the file name
3. Make your changes in the content editor
4. Click "Save Changes" when done

## Markdown Formatting

All content is written in Markdown format. Here are the basic formatting options:

### Headlines

```
# Main Headline (H1)
## Section Headline (H2)
### Subsection Headline (H3)
```

### Text Formatting

```
**Bold text**
*Italic text*
`Code or technical terms`
```

### Lists

```
- Item 1
- Item 2
  - Nested item A
  - Nested item B
```

Numbered lists:

```
1. First step
2. Second step
3. Third step
```

### Links

```
[Link text](https://example.com)
[Link to another page](/guides/getting-started)
```

### Images

```
![Alt text](/images/diagram.png)
```

### Code Blocks

````
​```bash
# Command-line example
echo "Hello World"
​```
````

### Front Matter

Each file must start with front matter - a section at the top of the file enclosed in three dashes:

```
---
title: Your Page Title
description: A brief description of the page content
---
```

## Best Practices

1. **Be Concise**: Use clear, simple language
2. **Use Proper Structure**: Organize content with headings (H2, H3, H4)
3. **Add Examples**: Include code examples or screenshots where helpful
4. **Link Related Content**: Reference other relevant documentation pages
5. **Preview Your Changes**: Check how your changes look before publishing

## Getting Help

If you encounter any issues with the editor or have questions about formatting, please contact the documentation team.

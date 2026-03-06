# Post Template

Use this template to add a new post/log. Copy the structure below and add it to `src/data/posts.ts`.

## Template

```typescript
{
  id: 'unique-id',  // Unique identifier (use next sequential number)
  title: 'Your Post Title',  // Clear, descriptive title
  type: 'Research Log',  // Options: 'Research Log', 'CTF Writeup', 'Build Diary', 'Paper Notes'
  date: 'YYYY-MM-DD',  // Publication date in YYYY-MM-DD format
  abstract: 'Brief summary of your post (1-2 sentences)',
  content: `# Your Content Here

Write your full post using Markdown formatting.

## Sections

Use headers, code blocks, lists, and other Markdown features.

### Code Example
\\\`\\\`\\\`python
def example():
    print("Your code here")
\\\`\\\`\\\`

### Key Points
- Point 1
- Point 2
- Point 3

## Conclusion

Wrap up your thoughts.
`,
}
```

## Full Example

```typescript
{
  id: '4',
  title: 'Reverse Engineering Android Malware: A Deep Dive',
  type: 'Research Log',
  date: '2026-03-15',
  abstract: 'Detailed analysis of a sophisticated Android banking trojan. Covers unpacking, deobfuscation, and C2 communication protocols.',
  content: `# Overview

This research examines a recently discovered Android banking trojan targeting financial applications in Southeast Asia.

## Initial Analysis

The malware was distributed through a fake productivity app. Upon installation, it:

1. Requests extensive permissions
2. Downloads encrypted payload
3. Establishes persistence

### Static Analysis

Using jadx-gui for decompilation:

\\\`\\\`\\\`java
public class MainActivity extends AppCompatActivity {
    private void downloadPayload() {
        // Obfuscated C2 communication
        String c2 = decrypt("aGRzZGZzZGY=");
        // ... payload download logic
    }
}
\\\`\\\`\\\`

## Dynamic Analysis

Using Frida to hook critical functions:

\\\`\\\`\\\`javascript
Java.perform(function() {
    var MainActivity = Java.use('com.fake.app.MainActivity');
    MainActivity.downloadPayload.implementation = function() {
        console.log("Payload download intercepted!");
        this.downloadPayload();
    };
});
\\\`\\\`\\\`

## C2 Communication

The malware uses a custom protocol over HTTPS:

- **Encryption**: AES-256-CBC
- **Authentication**: HMAC-SHA256
- **Command Format**: JSON-based

## IOCs (Indicators of Compromise)

- Package: com.fake.productivity.app
- C2 Domains: malicious[.]example[.]com
- File Hashes: SHA256:abc123...

## Mitigation

Recommendations for detection and prevention:

1. Monitor for suspicious permission requests
2. Implement network traffic analysis
3. Use behavioral detection systems

## Conclusion

This trojan demonstrates increasingly sophisticated Android malware. Organizations should update detection signatures and user education programs.
`,
}
```

## How to Add

1. Open `src/data/posts.ts`
2. Find the `posts` array
3. Add your post object to the array
4. Make sure to add a comma after the previous entry
5. Save the file

## Field Descriptions

- **id**: Unique identifier (use next sequential number as string)
- **title**: Clear, descriptive title for your post
- **type**: Choose from:
  - 'Research Log': Original research and analysis
  - 'CTF Writeup': CTF challenge solutions
  - 'Build Diary': Development/build logs
  - 'Paper Notes': Academic paper summaries
- **date**: Format as 'YYYY-MM-DD'
- **abstract**: 1-2 sentence summary (shown on posts page)
- **content**: Full Markdown content

## Content Formatting

Your content field supports full Markdown:

- **Headers**: Use #, ##, ### for hierarchy
- **Code blocks**: Use triple backticks with language
- **Lists**: Use - or 1. for lists
- **Links**: `[text](url)`
- **Bold/Italic**: `**bold**` or `*italic*`
- **Blockquotes**: Use > for quotes

## Tips

- Write clear, technical content
- Include code examples where relevant
- Use proper Markdown formatting
- Keep abstract concise but informative
- Add sections for methodology, findings, and conclusions
- Include IOCs, tools, or resources when applicable

## Post Type Colors

Different types display in different colors:

- **Research Log**: Pink (#FF6B9D)
- **CTF Writeup**: Cyan (#00E5FF)
- **Build Diary**: Green (#00FF9D)
- **Paper Notes**: Orange (#FFB86C)

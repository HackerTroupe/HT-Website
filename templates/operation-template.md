# Operation Template

Use this template to add a new operation to `src/data/operations.ts`.

> **Note:** `id` is auto-generated — do not include it. Operations are automatically sorted newest first.

---

## CTF Template

```typescript
{
  category: 'CTF',
  name: 'CTF Name Year',           // Full event name
  date: 'YYYY-MM',                 // e.g., '2026-03'
  outcome: 'What was achieved',    // Key result or deliverable
  placement: 'Top 50 globally',    // Optional: ranking or placement
  organizer: 'Google',             // Optional: who ran it
  tags: ['web', 'cryptography'],   // Optional: challenge categories solved
  writeupUrl: 'https://...',       // Optional: link to writeup
  description: 'Extra context',    // Optional: additional notes
}
```

## Hackathon Template

```typescript
{
  category: 'Hackathon',
  name: 'Hackathon Name Year',
  date: 'YYYY-MM',
  outcome: 'What was achieved',
  placement: '1st Place',          // Optional: ranking or award
  organizer: 'Organizer Name',     // Optional
  project: 'What was built',       // Optional: project name or description
  tags: ['rust', 'web security'],  // Optional: tech stack or themes
  writeupUrl: 'https://...',       // Optional: project link or demo
  description: 'Extra context',    // Optional
}
```

## Research Template

```typescript
{
  category: 'Research',
  name: 'Research Project Name',
  date: 'YYYY-MM',
  outcome: 'Key finding or deliverable',
  topic: 'Research area or subject',   // Optional: what was studied
  tags: ['fuzzing', 'CVE'],            // Optional: topics or keywords
  writeupUrl: 'https://...',           // Optional: paper, blog, or repo link
  description: 'Extra context',        // Optional
}
```

---

## How to Add

1. Open `src/data/operations.ts`
2. Find the `defaultOperations` array
3. Pick the template matching your category, fill in the fields, and add it to the array
4. No need to assign an `id` — it's generated automatically when using `addOperation()`
5. For entries directly in `defaultOperations`, add a short descriptive `id` string (e.g., `'htb-ctf-2026'`)

---

## Field Descriptions

| Field         | Required | Description                                            |
| ------------- | -------- | ------------------------------------------------------ |
| `category`    | Yes      | `'CTF'`, `'Hackathon'`, or `'Research'`                |
| `name`        | Yes      | Full name of the event or project                      |
| `date`        | Yes      | `'YYYY-MM'` format — used for sorting and year filter  |
| `outcome`     | Yes      | Concrete result, finding, or deliverable               |
| `placement`   | No       | Ranking or award (CTF / Hackathon)                     |
| `organizer`   | No       | Who organized the event                                |
| `tags`        | No       | Challenge categories, tech stack, or research keywords |
| `project`     | No       | What was built (Hackathon)                             |
| `topic`       | No       | Research area or subject (Research)                    |
| `writeupUrl`  | No       | Link to writeup, paper, or blog post                   |
| `description` | No       | Any extra notes or context                             |

## Category Colors

Different categories display in different colors:

- **CTF**: Cyan (#00E5FF)
- **Hackathon**: Green (#00FF9D)
- **Research**: Pink (#FF6B9D)

## Tips

- Be specific about your role and contributions
- Focus on technical outcomes over rankings
- Include any tools, papers, or artifacts produced
- Date should reflect when the operation concluded

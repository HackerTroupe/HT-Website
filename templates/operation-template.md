# Operation Template

Use this template to add a new operation. Copy the structure below and add it to `src/data/operations.ts`.

## Template

```typescript
{
  id: 'unique-id',  // Unique identifier (use next available number or descriptive ID)
  category: 'CTF',  // Options: 'CTF', 'Hackathon', or 'Research'
  name: 'Operation Name',  // Full name of the CTF/Hackathon/Research project
  role: 'Your Role',  // e.g., 'Team Lead', 'Team Participant', 'Solo Research'
  focus: 'Focus areas',  // Main technical areas covered
  outcome: 'Results achieved',  // What you accomplished or learned
  date: 'YYYY-MM',  // Date in YYYY-MM format (e.g., '2026-03')
}
```

## Example

```typescript
{
  id: '9',
  category: 'CTF',
  name: 'HackTheBox CTF 2026',
  role: 'Team Participant',
  focus: 'Web exploitation, cryptography',
  outcome: 'Top 30 globally, documented novel XSS bypass technique',
  date: '2026-03',
}
```

## How to Add

1. Open `src/data/operations.ts`
2. Find the `defaultOperations` array
3. Add your operation object to the array
4. Make sure to add a comma after the previous entry
5. Save the file

## Field Descriptions

- **id**: Unique identifier. Use the next sequential number (string format)
- **category**: Choose from 'CTF', 'Hackathon', or 'Research'
- **name**: Full name of the event or research project
- **role**: Your specific role (Team Lead, Participant, Solo, etc.)
- **focus**: Technical areas you worked on
- **outcome**: Concrete results, placement, or deliverables
- **date**: Format as 'YYYY-MM' (e.g., '2026-03')

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

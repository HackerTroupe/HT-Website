# Member Template

Use this template to add a new member. Copy the structure below and add it to `src/data/members.ts`.

## Template

```typescript
{
  id: 'YYYY0000X',  // Replace YYYY with year (e.g., 2026) and X with sequential number
  alias: 'your_alias',  // Your hacker alias
  realName: 'Your Real Name',  // Optional: Your real name
  domain: 'Your Domain',  // e.g., 'Web Security', 'Reverse Engineering', 'AI Security'
  skills: 'Your specific skills',  // e.g., 'Binary analysis & malware research'
  year: '2026',  // Year you joined (e.g., '2026', '2027')
  isLeader: false,  // Optional: Set to true if you're a year leader
  github: 'github-username',  // Optional: GitHub username
  linkedin: 'linkedin-profile',  // Optional: LinkedIn profile name
  website: 'https://your-website.com',  // Optional: Your website URL
  twitter: 'twitter-handle',  // Optional: Twitter/X handle
  instagram: 'instagram-handle',  // Optional: Instagram handle
  email: 'your.email@example.com',  // Optional: Contact email
  image: 'https://your-image-url.com/photo.jpg',  // Profile image URL
}
```

## Example

```typescript
{
  id: '20260001',
  alias: 'cyber_ninja',
  realName: 'Jane Smith',
  domain: 'Penetration Testing',
  skills: 'Network security & vulnerability assessment',
  year: '2026',
  isLeader: true,
  github: 'cyberninjatech',
  linkedin: 'jane-smith-security',
  image: 'https://images.unsplash.com/photo-1xxx',
}
```

## How to Add

1. Open `src/data/members.ts`
2. Find the `members` array
3. Add your member object to the array (copy from template above)
4. Make sure to add a comma after the previous entry
5. Save the file

## Field Descriptions

- **id**: Unique identifier. Format: YYYY0000X where YYYY is year, X is sequential number
- **alias**: Your hacker/team alias (required)
- **realName**: Your real name (optional, can be omitted)
- **domain**: Your area of expertise (required)
- **skills**: Specific skills and technologies (required)
- **year**: Year you joined the troupe (required, e.g., '2026')
- **isLeader**: Set to true if you're the leader for your year cohort
- **Social Links**: All optional - include only the ones you'd like to share
- **image**: Profile picture URL. You can use Unsplash or other image hosting services

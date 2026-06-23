import{t as e}from"./jsx-runtime-DGeXAQPT.js";import{d as t}from"./index-CDBSwVHe.js";import{t as n}from"./arrow-left-DXasr-vi.js";var r=e();function i(){return(0,r.jsxs)(`div`,{className:`dark min-h-screen bg-background text-foreground antialiased pb-24`,children:[(0,r.jsx)(`header`,{className:`relative overflow-hidden border-b border-border`,style:{background:`var(--gradient-hero)`},children:(0,r.jsxs)(`div`,{className:`container relative mx-auto max-w-4xl px-6 pt-12 pb-20 md:pt-16 md:pb-28`,children:[(0,r.jsxs)(t,{to:`/resources`,className:`inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground`,children:[(0,r.jsx)(n,{className:`h-4 w-4`}),` Back to Resources`]}),(0,r.jsx)(`div`,{className:`mt-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary`,children:`Technical Guide`}),(0,r.jsx)(`h1`,{className:`mt-4 text-4xl font-bold tracking-tight md:text-5xl`,children:`Sample iGaming Gamification Event Payloads`}),(0,r.jsx)(`p`,{className:`mt-6 text-lg text-muted-foreground md:text-xl`,children:`Illustrative JSON event payloads for integrating Gamifly into your PAM.`})]})}),(0,r.jsxs)(`main`,{className:`container mx-auto max-w-4xl px-6 mt-12`,children:[(0,r.jsxs)(`section`,{className:`mb-12`,children:[(0,r.jsx)(`h2`,{className:`text-2xl font-bold mb-4`,children:`1. Casino Round Completed`}),(0,r.jsx)(`div`,{className:`bg-muted/50 p-6 rounded-xl overflow-x-auto border border-border`,children:(0,r.jsx)(`pre`,{className:`text-sm font-mono text-primary`,children:`{
  "event_id": "evt_123456789",
  "event_type": "casino_round_completed",
  "timestamp": "2026-06-23T15:45:00Z",
  "player_id": "usr_98765xyz",
  "currency": "EUR",
  "data": {
    "game_id": "starburst_netent",
    "provider": "netent",
    "wager_amount": 5.00,
    "win_amount": 25.00,
    "multiplier": 5.0
  }
}`})})]}),(0,r.jsxs)(`section`,{className:`mb-12`,children:[(0,r.jsx)(`h2`,{className:`text-2xl font-bold mb-4`,children:`2. Sportsbook Bet Settled`}),(0,r.jsx)(`div`,{className:`bg-muted/50 p-6 rounded-xl overflow-x-auto border border-border`,children:(0,r.jsx)(`pre`,{className:`text-sm font-mono text-primary`,children:`{
  "event_id": "evt_987654321",
  "event_type": "sportsbook_bet_settled",
  "timestamp": "2026-06-23T16:00:00Z",
  "player_id": "usr_98765xyz",
  "currency": "EUR",
  "data": {
    "bet_id": "bet_abc123",
    "bet_type": "accumulator",
    "legs": 4,
    "wager_amount": 10.00,
    "win_amount": 150.00,
    "status": "won",
    "total_odds": 15.0
  }
}`})})]})]})]})}export{i as component};
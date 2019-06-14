export default [
  { text: 'Do you absolutely have to fix this bug ASAP?', fix: true },
  { text: 'Are you prepared to fix this bug right now?', fix: true },
  { text: 'Ok, so you want to save it in a list somewhere?', fix: false },
  { text: "Oh, you're holding on to the bug because it might come in handy one day?", fix: false },
  { text: 'Hang on, you should fix this bug, but other stuff is more important?', fix: false },
  { text: 'I see! You need to fix this bug, but you just want to fix it later?', fix: false },
  { text: 'Ok, let me get this straight, you really do want to fix it?', fix: true },
  { text: 'But you want to fix it later?', fix: false },
  { text: 'Ok! Are you finally ready to prioritize it?', fix: true },
];

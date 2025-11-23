---
"@tma.js/sdk": patch
---

When opening QrScanner, update the isOpened flag. Listen to its changes to resolve the promise. After the promise was resolved, update the flag again.

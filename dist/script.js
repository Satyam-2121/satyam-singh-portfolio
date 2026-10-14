const clock = document.getElementById('clock');
const clockFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function updateClock() {
  const now = new Date();
  clock.textContent = clockFormat.format(now) + ' IST';
  clock.dateTime = now.toISOString();
  document.getElementById('year').textContent = new Intl.DateTimeFormat('en', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
  }).format(now);
}

updateClock();
setInterval(updateClock, 30000);

const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
let feedbackTimeout;

if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    clearTimeout(feedbackTimeout);
    try {
      await navigator.clipboard.writeText('satyamsingh200421@gmail.com');
      copyStatus.textContent = 'Email copied!';
    } catch {
      copyStatus.textContent = 'Select the email address to copy it.';
    }
    feedbackTimeout = setTimeout(() => { copyStatus.textContent = ''; }, 5000);
  });
}

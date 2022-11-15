const callbackPrompt = {
  message: 'Enter your phone-number:',

  showPrompt() {
    console.log(this);
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    console.log(this);
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
// callbackPrompt.showPrompt();

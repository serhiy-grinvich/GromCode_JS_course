const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John Silver', age: 16, email: 'johnsilver@mail.com' },
    { name: 'Tatiana Vakaryuk', age: 56, email: 'just-ask-tatiana@mail.com' },
    { name: 'Richard Gir', age: 89, email: 'gir@mail.com' },
    { name: 'Lolita', age: 14, email: 'oh-no-daddy@mail.com' },
    { name: 'Sasha S1mple', age: 19, email: 'zywoo-must-die@mail.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => {
        return { email, message: `Dear ${name}! ${this.message}` };
      });
  },
};

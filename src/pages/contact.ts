import Component from "../components/component";

export default class Contact extends Component {

  constructor()  {
    super();

    this.root.setAttribute("id", "contact-page");

    const h1 = document.createElement('h1');
    h1.textContent = "Contact us !";

    const phone = document.createElement('p');
    phone.textContent = "📞 123 456 789";

    const address = document.createElement('p');
    address.textContent = "🏠 Via Irnerio, 25, Bologna, Italy";

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.7484112483444!2d11.347071315743284!3d44.49982170528972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4a32dfd0dcb%3A0x3c7dd5a3afa6f626!2sVia%20Irnerio%2C%2025%2C%2040126%20Bologna%20BO%2C%20Italie!5e0!3m2!1sfr!2sbe!4v1661451008492!5m2!1sfr!2sbe"
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    const section = document.createElement('section');
    section.append(
      phone, 
      address, 
      iframe
    );

    this.root.append(
      h1,
      section
    );
  }
}
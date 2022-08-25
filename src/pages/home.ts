import Component from "../components/component";

export default class Home extends Component {
  private readonly hours = [
    {
      dayName: 'monday',
      start: '8am',
      end: '8pm'
    },
    {
      dayName: 'tuesday',
      start: '8am',
      end: '8pm'
    },
    {
      dayName: 'wednesday',
      start: '8am',
      end: '8pm'
    },
    {
      dayName: 'thursday',
      start: '8am',
      end: '8pm'
    },
    {
      dayName: 'friday',
      start: '8am',
      end: '8pm'
    },
    {
      dayName: 'saturday',
      start: '8am',
      end: '8pm'
    },
    {
      dayName: 'sunday',
      start: '8am',
      end: '8pm'
    }
  ];

  constructor() {
    super();

    this.root.setAttribute("id", "home-page");

    const h1 = document.createElement('h1');
    h1.textContent = "The best pizza in town !";

    const hoursSection = document.createElement('section');
    
    const headerHoursSection = document.createElement('header');
    const h2Hours = document.createElement('h2');
    h2Hours.textContent = "Hours";
    headerHoursSection.appendChild(h2Hours);

    const containerHoursSection = document.createElement('div');
    containerHoursSection.classList.add("container");

    this.hours.forEach((hour) => {
      const p = document.createElement('p');
      p.textContent = `${hour.dayName}: ${hour.start} - ${hour.end}`;

      containerHoursSection.appendChild(p);
    });

    hoursSection.append(
      headerHoursSection,
      containerHoursSection
    );

    this.root.append(
      h1,
      hoursSection
    );
  }
}
import Component from "../components/component";
import pizza from "../assets/images/pizza.jpg";

export default class Menu extends Component {

  private readonly pizzas = [
    {
      name: 'Pomodoro',
      ingredients: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
      imagePath: pizza
    },
    {
      name: 'Disgustoso',
      ingredients: 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
      imagePath: pizza
    },
    {
      name: 'Salsiccia',
      ingredients: 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
      imagePath: pizza
    },
    {
      name: 'Carne',
      ingredients: 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
      imagePath: pizza
    }
  ];

  constructor() {
    super();

    this.root.setAttribute("id", "menu-page");

    const h1 = document.createElement('h1');
    h1.textContent = "Our menu";

    const section = document.createElement('section');

    this.pizzas.forEach((pizza) => {
      const article = document.createElement('article');
      const img = document.createElement('img');
      const name = document.createElement('h2');
      const ingredients = document.createElement('p');

      img.src = pizza.imagePath;
      name.textContent = pizza.name;
      ingredients.textContent = pizza.ingredients;

      article.append(
        img,
        name,
        ingredients
      );

      section.appendChild(article);
    });

    this.root.append(
      h1,
      section,
    );
  }
}
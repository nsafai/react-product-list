# React Product List Challenge

This is a learning project to deepen my React knowledge. The goal is to create a page that displays a list of **products** and a list of **categories** for those products, using React components. Clicking one of the category buttons should filter the list of products.


This project makes use of functional programming concepts in React and explores Javascript functions including [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), and [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). 


## Database

Instead of a database, this repo includes a `categories` array and an `inventory` array in the `inventory.js` file. 

You can use this mock data in any file by including the line `import inventory, { categories } from './inventory'` at the top of the file.

### Mock Data Models:
- `categories`: `[String]` an Array of category name Strings
- `inventory`: `[Object]` an Array of Objects with the following properties
  - `id`: `Number` a unique number id
  - `name`: `String` a String name of product
  - `description`: `String` a String description of product
  - `price`: `String` a _String_ price with two decimal places
  - `category`: `String` a String category name

### Example Object
```JS
{
  'id':1,
  'name':'Duobam',
  'description':'Implemented even-keeled info-mediaries',
  'price':'7.77',
  'category':'Outdoors'
}
```

## Getting functional

## Installing locally
1. Fork this Repo.
2. Post a link to the progress tracker for class.
3. `npm install` to install dependencies
4. `npm start` to run the project at [http://localhost:3000](http://localhost:3000)

## Milestones

- [x] Display the categories and products.
  - [x] 1. List all of the categories at the top of the page. 
        - Display the categories as buttons. 
        - Use `Array.map()` to transform the `category` array into an array of JSX/Components
  - [x] 2. List all of products below the categories. 
    - Display product with name, category, description and price. 
    - Add custom classes to JSX elements using `className` 
- [x] Click on a category button to filter the list of products so only products in the chosen category are displayed using `state` and `Array.filter()`
  ```js
  inventory.filter((item) => {
    return item.category === this.state.currentCategory || this.state.currentCategory === null
  })
  ```
- [x] Component-ize `Category` and `Product`, passing functions and state down to those components from their parent, `App.js`
- [x] Style the components and page using CSS Grid and CSS Flexbox
- [x] Add a `Display All` category
  - [x] Keep track of current category using state `this.currentCategory` and pass that down to `Category` component so it looks different
- [ ] Use `Array.reduce()` to get the sum of all of the prices for all Products. 
  - Remember the prices are stored as Strings you'll need to convert these to numbers. Something like: `Number(item.price)` should work.  
  - Display this somewhere on the page. If you got this far I don't need to add too much explaination here. 
- [ ] Using `Array.reduce()` again, sum the total for currently selected products. In other the sum of all the prices for the products in the currently selected category. 
- [ ] Use `Array.reduce()` to count the number of products in each category. 
  - Display count for each category as "badge" next to the category label in each category button. 

## Credit
This project was bootstrapped with [Create React App](notes/create-react-app-notes.md)
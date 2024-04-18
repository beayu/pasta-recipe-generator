let pastas = [
  // long (0)
  ['spaghetti', 
  'fettuccine', 
  'bucatini', 
  'angel hair', 
  'linguine', 
  'tagliatelle'], 
  // stuffed (1)
  ['cannelloni',
  'ravioli', 
  'tortelini'], 
  // other (2)
  ['orecchiette', 
  'rigatoni', 
  'farfalle', 
  'penne', 
  'fusili', 
  'gnocchi', 
  'cavatappi', 
  'ditalini', 
  'orzo', 
  'macaroni', 
  'cavatelli',  
  'gemelli', 
  'rotini', 
  'conchiglie', 
  'rotelle'] 
];
let sauces = [
  'marinara', 
  'alfredo', 
  'pesto', 
  'olive oil', 
  'garlic butter', 
  'creamy tomato', 
  'arrabiata', 
  'carbonara', 
]; 
let proteins = [
  // meats (0)
  ['ground beef', 
  'chicken', 
  'ground turkey', 
  'meatballs', 
  'sausage', 
  'beef/steak', 
  'lamb', 
  'veal', 
  'pork', 
  'spam', 
  'bacon', ], 
  // seafoods (1)
  ['shrimp', 
  'scallops', 
  'salmon', 
  'octopus', 
  'clams', 
  'mussels', 
  'squid', 
  'barramundi', 
  'rockfish', 
  'tilapia', 
  'cod', ]
]; 
let vegetables = [
  'tomatoes', 
  'bell peppers', 
  'zucchini', 
  'spinach', 
  'mushrooms', 
  'squash', 
  'asparagus', 
  'broccoli', 
  'peas', 
  'carrots', 
  'cauliflower', 
  'eggplant', 
  'potatoes', 
];
let cheeses = [
  'parmesan', 
  'feta', 
  'fontina', 
  'gouda', 
  'asiago', 
  'provolone', 
  'mozzarella', 
  'gruyère', 
  'ricotta', 
  'pecorino romano', 
  'gorgonzola', 
  'swiss', 
  'cheddar', 
  // 'mexican blend cheese', 
  'goat cheese', 
]; 
let otherIngredients = [
  'garlic', 
  'onion', 
  'red wine', 
  'white wine', 
  'heavy cream', 
  'butter', 
  'tomato paste', 
  'broth', 
  'gochujang', 
  'olives', 
  'shallots', 
  'pepperoncini', 
]; 
let garnishes = [
  // 'red pepper flakes', 
  'chili flakes', 
  'olive oil', 
  'lemon juice', 
  'balsamic vinegar', 
  'capers', 
  'black pepper', 
  'parsley', 
  'basil', 
  'green onion', 
  'cilantro', 
  'truffle', 
  'pine nuts', 
]; 
let recipe = []; 
let mslider, sslider, pslider, vslider, oslider, cslider, gslider; 
let mtext, stext, ptext, vtext, otext, ctext, gtext; 
let previousIngredient; 

function setup() {
  createCanvas(600, 700);
  background(253, 245, 231);
  
  textFont('courier new'); 
  textSize(16); 
  
  mslider = createSlider(0, proteins[0].length, 1, 1); 
  mslider.position(25, 50); 
  sslider = createSlider(0, proteins[1].length, 0, 1); 
  sslider.position(25, 100); 
  vslider = createSlider(0, vegetables.length, 1, 1); 
  vslider.position(225, 50); 
  oslider = createSlider(0, otherIngredients.length, 1, 1); 
  oslider.position(225, 100); 
  cslider = createSlider(0, cheeses.length, 1, 1); 
  cslider.position(425, 50); 
  gslider = createSlider(0, garnishes.length, 1, 1); 
  gslider.position(425, 100); 
  
  generatebutton = createButton('generate pasta recipe'); 
  generatebutton.style('font-family', 'courier new'); 
  generatebutton.style('font-size', '16px');
  generatebutton.style('background-color', '#f7dfaf');
  generatebutton.position(185, 170); 
  generatebutton.mousePressed(generate);
}

function draw() {
  push(); 
  noStroke(); 
  fill(253, 245, 231);
  rect(0, 0, 600, 150);
  pop(); 
  
  textAlign(CENTER);
  text('customize your generated pasta recipe', 300, 25); 
  
  if (mslider.value() == 1) {
    mtext = text(mslider.value() + ' meat', 25 + mslider.width / 2, 85); 
  }
  else {
    mtext = text(mslider.value() + ' meats', 25 + mslider.width / 2, 85); 
  }
  
  if (sslider.value() == 1) {
    stext = text(sslider.value() + ' seafood', 25 + sslider.width / 2, 135); 
  }
  else {
    stext = text(sslider.value() + ' seafoods', 25 + sslider.width / 2, 135); 
  }
  
  if (vslider.value() == 1) {
    vtext = text(vslider.value() + ' vegetable', 225 + vslider.width / 2, 85); 
  }
  else {
    vtext = text(vslider.value() + ' vegetables', 225 + vslider.width / 2, 85); 
  }
  
  if (oslider.value() == 1) {
    otext = text(oslider.value() + ' other ingredient', 225 + oslider.width / 2, 135); 
  }
  else {
    otext = text(oslider.value() + ' other ingredients', 225 + oslider.width / 2, 135); 
  }
  
  if (cslider.value() == 1) {
    ctext = text(cslider.value() + ' cheese', 425 + cslider.width / 2, 85); 
  }
  else {
    ctext = text(cslider.value() + ' cheeses', 425 + cslider.width / 2, 85); 
  }
  
  if (gslider.value() == 1) {
    gtext = text(gslider.value() + ' garnish', 425 + gslider.width / 2, 135); 
  }
  else {
    gtext = text(gslider.value() + ' garnishes', 425 + gslider.width / 2, 135); 
  }
}

function generate() {
  recipe = []; 
  background(253, 245, 231); 
  textAlign(LEFT); 
  
  // generate pasta 
  pasta = random(random(pastas));
  append(recipe, pasta);
  
  // generate sauce 
  sauce = random(sauces); 
  append(recipe, sauce); 
  
  // generate meat 
  for (let i = 0; i < mslider.value(); i++) {
    if (proteins[0].includes(previousIngredient) && !recipe.includes(previousIngredient)) {
      append(recipe, previousIngredient); 
    }
    else {
      meat = random(proteins[0]); 
      while (recipe.includes(meat)) {
        meat = random(proteins[0]); 
      }
      append(recipe, meat); 
    }
  }
  
  // generate seafood
  for (let i = 0; i < sslider.value(); i++) {
    if (proteins[1].includes(previousIngredient) && !recipe.includes(previousIngredient)) {
      append(recipe, previousIngredient); 
    }
    else {
      seafood = random(proteins[1]); 
      while(recipe.includes(seafood)) {
        seafood = random(proteins[1]); 
      }
      append(recipe, seafood); 
    }
  }
  
  // generate vegetable 
  for (let i = 0; i < vslider.value(); i++) {
    if (vegetables.includes(previousIngredient) && !recipe.includes(previousIngredient)) {
      append(recipe, previousIngredient); 
    }
    else {
      vegetable = random(vegetables); 
      while(recipe.includes(vegetable)) {
        vegetable = random(vegetables); 
      }
      append(recipe, vegetable); 
    }
  }
  
  // generate other ingredients 
  for (let i = 0; i < oslider.value(); i++) {
    if (otherIngredients.includes(previousIngredient) && !recipe.includes(previousIngredient)) {
      append(recipe, previousIngredient); 
    }
    else {
      otherIngredient = random(otherIngredients); 
      while(recipe.includes(otherIngredient)) {
        otherIngredient = random(otherIngredients); 
      }
      append(recipe, otherIngredient); 
    }
  }
  
  // generate cheese 
  for (let i = 0; i < cslider.value(); i++) {
    if (cheeses.includes(previousIngredient) && !recipe.includes(previousIngredient)) {
      append(recipe, previousIngredient); 
    }
    else {
      cheese = random(cheeses); 
      while(recipe.includes(cheese)) {
        cheese = random(cheeses); 
      }
      append(recipe, cheese); 
    }
  }
  
  // generate garnish 
  for (let i = 0; i < gslider.value(); i++) {
    if (vegetables.includes(previousIngredient) && !recipe.includes(previousIngredient)) {
      append(recipe, previousIngredient); 
    }
    else {
      garnish = random(garnishes); 
      while(recipe.includes(garnish)) {
        garnish = random(garnishes); 
      }
      append(recipe, garnish); 
    }
  }
  
  if (recipe.length > 45) {
    push(); 
    textStyle(BOLD); 
    textAlign(CENTER); 
    textSize(18); 
    text('your recipe contains too many ingredients to display', 300, 300); 
    text('please select fewer ingredient customizations', 300, 325); 
    pop(); 
  }
  else {
    push(); 
    textStyle('bold');
    textSize(18); 
    text('ingredients:', 25, 225); 
    pop(); 

    let h = 275;
    for (let i = 0; i < recipe.length; i++) {
      if (i == 15) {
        h = 275; 
      }
      if (i == 30) {
        h = 275; 
      }

      if (i > 29) {
        text(recipe[i], 425, h); 
      }
      else if (i > 14) {
        text(recipe[i], 225, h); 
      }
      else {
        text(recipe[i], 25, h);
      }

      h += 25;
    }

    push(); 
    textAlign(CENTER); 
    text('previous ingredient: ' + previousIngredient, 300, 675);
    pop(); 
  }
  
  previousIngredient = recipe[int(random(2, recipe.length))]; 
}


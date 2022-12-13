<h1 align="center"> shopping-cart 🛒 </h1>  

#### Click [here](https://lisa-go.github.io/shopping-cart/) for live preview.
<br><br>

# Made with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<br><br>

# Description

#### A basic shopping website built using [maplestory api](https://maplestory.io/) for the items.
<br><br>

# Features
- Image Carousel
- Different categories in the shop to choose from
- A working search feature to search through all available items matching the input given
- Cart tracks amount of items inside, and reflects the number on the navbar
- Add and remove easily using the + and - buttons in the cart
- Audio of the original Maplestory cash shop background music.
- Custom cursor from Maplestory
<br><br>

# Previews

### Home Page
<img src="https://i.imgur.com/S0qlQuG.png" alt="homepage" width="700" />

### Shop Page
<img src="https://i.imgur.com/6lvr5OH.png" alt="homepage" width="700" />
<br><br>

# Things I learned from this Project

* How to implement a image carousel from scratch, utilizing state, effects and setInterval
```js
    useEffect(() => {
        const interval = setInterval(() => handleImage('right'), 5000);
        return () => clearInterval(interval);
    }, []);
```
* Usage of ternary operators in React
```js
    {loading ?
        <img src={loadgif} alt="loading" style={{ height: '100px' }} />
    :
        items.map((item) =>
            <Item
                key={item.id}
                item={item}
                addToCart={addToCart} />
        )}
```
* Better understanding of passing states around
* How to use react-router-dom, and using HashRouter to counter the problems with implementing BrowserRouter with GitHub
* I can easily add a new property in an array of objects 
```js
    item.image = 'https://maplestory.io/api/GMS/237/item/' + item.id + '/icon';
```
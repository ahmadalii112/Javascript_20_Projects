##1. First Step Setup Html and CSS
[Hero Patterns](http://www.heropatterns.com/)
select the Circuit Board adjust the color accordin to you and paste it on your css file 
```css
html{
    box-sizing: border-box;
}
body{
    margin: 0;
    min-height: 100vh;
    /*paste here which you copied ..... */
}
```
[Google Fonts {Montserrat Style}](https://fonts.google.com/specimen/Montserrat?preview.text_type=custom#standard-styles)
select your font and paste it on the top of your css file
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
/*Add in body*/

body{
    /*Previous ...*/
    color: #000;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    text-align: center;
    display: flex;
    align-items: center; /* Align things Vertically */
    justify-content: center; /* Align things Horizontally */
}
```
##2. Fetching Data with JS
API
`https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`

to avoid CORS policy use these
    
`https://cors-anywhere.herokuapp.com/`

`https://cors.bridged.cc/`


#Enjoy 
All things done in the Code
// Unsplash API

const count = 10;
const apiKey = 'C-18OnPNyUDnvtjTGvvriKBPxUmIvmaq-hNyjQY4o10'
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (e) {
        // catch error here

    }
}

getPhotos();
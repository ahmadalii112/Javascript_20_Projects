const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];

// Unsplash API

const count = 10;
const apiKey = 'C-18OnPNyUDnvtjTGvvriKBPxUmIvmaq-hNyjQY4o10'
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`

// Helper function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create elements, links and Photos, Add to Dom
function displayPhotos() {
    // run func for each object in photoArray
    photosArray.forEach((photo) => {
        console.log(photo);
        // create <a> to link to unsplash
        const item = document.createElement("a");
        /*
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target", "_blank");
        */
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank"
        })
        // create <img> for photo
        const img = document.createElement('img');
        /*img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description);
        img.setAttribute("title", photo.alt_description);*/
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        // put <img> inside <a>, then put both inside in our imageContainer element
        item.appendChild(img) // <a><img src="" alt="" title=""></a>
        imageContainer.appendChild(item);
    })
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (e) {
        // catch error here

    }
}
// check to see if scrolling is  near bottom of page, load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
    }
})

// on load
getPhotos();
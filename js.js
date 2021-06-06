const photoImageContainer = document.getElementById('photo-image-container')

const contentDesc = [{
        text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        firstName: 'Tanya',
        fullName: 'Tanya Sinclair',
        occupation: 'UX Engineer'
    },
    {
        text: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        firstName: 'John',
        fullName: 'John Tarkpor',
        occupation: 'Junior Front-end Developer'
    },
    {
        text: '“ wau wau wau wau wau wauuuuuu wau wau wau eh eh eh eh eh eh wof. ”',
        firstName: 'Dog',
        fullName: 'Dog Wolves',
        occupation: 'Pet'
    }
]

const imgContent = document.createElement('div')
imgContent.classList.add('images')

const fragment = document.createDocumentFragment()

for (const key in contentDesc) {
    const img = document.createElement('img')
    const photo = `images/image-${contentDesc[key].firstName.toLowerCase()}.jpg`
    img.setAttribute('src', photo)
    img.classList.add('image')

    fragment.appendChild(img)
    imgContent.appendChild(fragment)
}

photoImageContainer.prepend(imgContent)


const descriptionContainer = document.getElementById('description-container')
const fragmentDesc = document.createDocumentFragment()
const fragmentDescr = document.createDocumentFragment()

const description = document.createElement('div')

description.classList.add('description')
for (const key in contentDesc) {

    const paragraph = document.createElement('p')
    const author = document.createElement('p')
    const position = document.createElement('span')
    const descr = document.createElement('div')
    descr.setAttribute('class','descr')

    paragraph.classList.add('paragraph')
    author.classList.add('author')
    position.classList.add('position')

    paragraph.textContent = contentDesc[key].text
    author.textContent = contentDesc[key].fullName
    position.textContent = contentDesc[key].occupation

    fragmentDescr.appendChild(paragraph)
    fragmentDescr.appendChild(author)
    fragmentDescr.appendChild(position)

    descr.appendChild(fragmentDescr)
    description.appendChild(descr)
}

descriptionContainer.appendChild(description)

const spanButtons = document.querySelectorAll('.button-arrow')
const numbersImages = document.querySelectorAll('.image').length

let ImageIndex = 1
let indexChildren = 0
let translateX = 0
let translateY = 0

spanButtons.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.id === 'left') {
            if (ImageIndex !== 1) {
                ImageIndex--
                indexChildren--

                translateX += 100
                translateY += 212
                description.children[indexChildren].style.opacity = '1'
                description.children[indexChildren].nextElementSibling.style.opacity = '0'
            }
        } else {
            if (ImageIndex !== numbersImages) {
                ImageIndex++
                indexChildren++

                translateX -= 100
                translateY -= 212
                description.children[indexChildren].style.opacity = '1'
                description.children[indexChildren].previousElementSibling.style.opacity = '0'
            }
        }
        description.style.transform = `translateY(${translateY}px)`
        imgContent.style.transform = `translateX(${translateX}%)`
    })
})
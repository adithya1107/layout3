const teamCards = document.querySelectorAll('.team-card');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalRole = document.getElementById('modal-role');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('closeModal');

const teamData = {
    1: {
        img: '	https://ik.imagekit.io/sayou7z5b/thrustMIT_website_pics/Parth%20Jain%20.jpeg?updatedAt=1705866476206',
        name: 'jiaefa',
        role: 'lead',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea perspiciatis accusantium voluptas sed minima architecto nulla ipsa. Minus numquam nobis culpa laudantium quibusdam magnam, aliquid assumenda, iusto mollitia quasi itaque ut consequuntur. Cum, maxime? Vel est dolor sapiente voluptatibus magni?'
    },
    
    2: {
        img: '	https://ik.imagekit.io/sayou7z5b/thrustMIT_website_pics/Parth%20Jain%20.jpeg?updatedAt=1705866476206g',
        name: 'rtgssffv',
        role: 'role',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea perspiciatis accusantium voluptas sed minima architecto nulla ipsa. Minus numquam nobis culpa laudantium quibusdam magnam, aliquid assumenda, iusto mollitia quasi itaque ut consequuntur. Cum, maxime? Vel est dolor sapiente voluptatibus magni?.'
    },
    3: {
        img: '	https://ik.imagekit.io/sayou7z5b/thrustMIT_website_pics/Parth%20Jain%20.jpeg?updatedAt=1705866476206',
        name: 'thtrfv',
        role: 'role',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea perspiciatis accusantium voluptas sed minima architecto nulla ipsa. Minus numquam nobis culpa laudantium quibusdam magnam, aliquid assumenda, iusto mollitia quasi itaque ut consequuntur. Cum, maxime? Vel est dolor sapiente voluptatibus magni?.'
    }
};

// Open modal on card click
teamCards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const { img, name, role, description } = teamData[id];
        
        // Update modal content
        modalImg.src = img;
        modalName.textContent = name;
        modalRole.textContent = role;
        modalDescription.textContent = description;
        
        // Activate modal with transition
        modal.classList.add('active');
    });
});

// Close modal on button click
window.addEventListener('click', function(e) {
    if(e.target==modal){
        modal.classList.remove('active');
    }
    
});


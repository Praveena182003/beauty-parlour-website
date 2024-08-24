const the_animation = document.querySelectorAll('.animated')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
            observer.unobserve(entry.target);// to stop animation after visiting it one time
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.2
   });

  the_animation.forEach((element) => {
    observer.observe(element);
}); 

function validate(){
    var name=document.getElementById("name").value.trim();
    var num=document.getElementById("no").value.trim();
    var address=document.getElementById("address").value.trim();
    if(name === "" || num === "" || address === ""){
        alert("fill the information");
    }
    else{
        alert("Welcome");
    }
}


const animation = document.querySelectorAll('.about-animated')

const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('about-scroll-animation')
            observers.unobserve(entry.target);// to stop animation after visiting it one time
        }
            else {
                entry.target.classList.remove('about-scroll-animation')
            }
        
    })
},
   { threshold: 0.2
   });

   animation.forEach((element) => {
    observers.observe(element);
}); 


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.flip-card-inner').classList.toggle('flip');
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const chatboxBody = document.getElementById('chatboxBody');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            appendMessage('user', messageText);
            messageInput.value = '';
            // Simulate bot response after a short delay
            setTimeout(() => {
                appendMessage('bot', 'Hello! how can I help you?.');
            }, 1000);

            const botMessages = [
                'Please wait a moment.',
                'OK.sure',
                'Thank you for your patience.'
            ];
            
            setInterval(() => {
                const randomIndex = Math.floor(Math.random() * botMessages.length);
                appendMessage('bot', botMessages[randomIndex]);
            }, 10000);
            
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatboxBody.appendChild(messageElement);
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }
});
window.addEventListener('scroll', () => {

    const scrollToTopButton = document.querySelector('.scroll-top');

    if (window.scrollY > 0) {
        scrollToTopButton.classList.add("active");
    } else {
        scrollToTopButton.classList.remove("active");
    }
});
scrollToTopButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

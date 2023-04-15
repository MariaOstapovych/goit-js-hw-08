import throttle from 'lodash.throttle';



const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea")



form.addEventListener('input', throttle((event) => {
    const email = emailInput.value;
    const message = messageInput.value;
    const feedbackFormData = {
        email,
        message
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
}, 500));

window.addEventListener('load', () => {
    const feedbackFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (feedbackFormData) {
        emailInput.value = feedbackFormData.email;
        messageInput.value = feedbackFormData.message;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const message = messageInput.value;
    const feedbackFormData = {
        email,
        message
    };
    console.log('Form data:', feedbackFormData);

    localStorage.removeItem('feedback-form-state');
    form.reset();
})



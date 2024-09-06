const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked or touched
const onYesClick = () => {
    question.innerHTML = "ME TOOOOO! 😘";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJ0NDZ4enBiNzQ4bXFidnA3dTZ5cGQxaWR3aW9sZng4N3I3Z2dheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MSBEiH9mCp39K/giphy.gif";
};

// Handle touch and mouse click for the Yes button
yesBtn.addEventListener("click", onYesClick);
yesBtn.addEventListener("touchstart", onYesClick);

// Function to make No button move randomly
const moveNoBtn = () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
};

// Make No button move randomly on hover or touch
noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", moveNoBtn);

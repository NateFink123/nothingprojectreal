// Array of image filenames with the new paths
const images = [
    'https://drive.google.com/file/d/11kFYfN8mBe2hwOm9KTcpiZq2w_G9KRIT/view?usp=sharing',
    'file:///D:/downloads%20real/ezgif-4-72df588de3-jpg/ezgif-frame-002.jpg',
    'file:///D:/downloads%20real/ezgif-4-72df588de3-jpg/ezgif-frame-003.jpg',
    'file:///D:/downloads%20real/ezgif-4-72df588de3-jpg/ezgif-frame-004.jpg',
    // Add more photo filenames as needed
    'file:///D:/downloads%20real/ezgif-4-72df588de3-jpg/ezgif-frame-150.jpg'
  ];
  
  let currentIndex = 0; // Starting index
  
  // Get the image element and the navigation textboxes
  const photoElement = document.getElementById('photo');
  const backwardTextbox = document.getElementById('backward');
  const forwardTextbox = document.getElementById('forward');
  
  // Function to update the photo displayed
  function updatePhoto() {
    // Set the source of the image to the current photo in the array
    photoElement.src = images[currentIndex];
  }
  
  // Event listener for clicking the "Backward" textbox
  backwardTextbox.addEventListener('click', () => {
    // Move to the previous image in the array
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updatePhoto();
  });
  
  // Event listener for clicking the "Forward" textbox
  forwardTextbox.addEventListener('click', () => {
    // Move to the next image in the array
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updatePhoto();
  });
  
  // Event listener for keyboard navigation (left and right arrow keys)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      updatePhoto();
    } else if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      updatePhoto();
    }
  });
  
  // Initial photo load
  updatePhoto();
  
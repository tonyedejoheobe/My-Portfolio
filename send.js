document.getElementById('sendMessage').addEventListener('click', function() {
    // Get the values from the form
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Create the WhatsApp message
    const whatsappMessage = `Name: ${name}\nMessage: ${message}\nemail: ${email}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Construct the WhatsApp link
    const phoneNumber = '2348060608712'; // Your WhatsApp number in international format
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open the WhatsApp link
    window.open(whatsappLink, '_blank');
});
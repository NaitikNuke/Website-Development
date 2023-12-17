<script>
        // Your JavaScript code here
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none',
        }

        , nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        // Optional: Add event listeners for navigation buttons
        document.getElementById('prevBtn').addEventListener('click', prevSlide);
        document.getElementById('nextBtn').addEventListener('click', nextSlide);

        // Initial slide display
        showSlide(currentSlide);
    </script>
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.about-page .page-header-content');

    if (title) {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Title is at 20vh.
            // Content starts at 70vh.
            // Distance is 50vh.
            // When we scroll 50vh, the top of content hits the title.
            // The "gradient edge" likely refers to the visual start of the blurred content.
            // We want the fade to trigger right as it hits.

            const triggerPoint = windowHeight * 0.3; // 30vh scroll mark

            if (scrollY > triggerPoint) {
                title.classList.add('fade-out');
            } else {
                title.classList.remove('fade-out');
            }
        };

        // Initial check
        handleScroll();

        // Add listener
        window.addEventListener('scroll', handleScroll);
    }
});

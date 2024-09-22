const spans = document.querySelectorAll('.word span');
        spans.forEach((span, idx) => {
            span.addEventListener('click', (e) => {
                e.target.classList.add('active');
            });
            span.addEventListener('animationend', (e) => {
                e.target.classList.remove('active');
            });

            // Initial animation
            setTimeout(() => {
                span.classList.add('active');
            }, 750 * (idx + 1));
        });

        document.addEventListener('DOMContentLoaded', function() {
            const link = document.getElementById('redirect-link');
            
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior
                setTimeout(function() {
                    window.location.href = link.href; // Redirect after delay
                }, 1000); // 1500 milliseconds delay
            });
        });
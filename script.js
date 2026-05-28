document.addEventListener('DOMContentLoaded', function () {
    // Filter Videos
    const filterButtons = document.querySelectorAll('.btn-filter');
    const videoItems = document.querySelectorAll('.video-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            videoItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    //animasi counter angka statistik
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace(/,/g, '');
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = (count + increment).toLocaleString();
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target.toLocaleString('id-ID');
                }
            };
            updateCount();
        });
    };

    // Jalankan animasi saat halaman dimuat
    animateCounters();
});
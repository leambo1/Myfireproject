
    const observerOptions = {
        threshold: 0.15 // ໃຫ້ເຫັນເນື້ອຫາ 15% ແລ້ວຈຶ່ງເລີ່ມສະແດງຜົນ
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // ຕິດຕາມທັງ class .reveal ແລະ .fade-in
    document.querySelectorAll('.reveal, .fade-in').forEach((el) => {
        observer.observe(el);
    });
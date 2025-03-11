document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    let scrollingInProgress = false;

    // 初始化导航栏状态
    const updateNavbar = (currentScroll) => {
        if (window.innerWidth > 576) {
            // 桌面端效果
            navbar.classList.toggle('navbar-scroll', currentScroll > 50);
        } else {
            // 移动端效果
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.classList.add('navbar-active');
            } else {
                navbar.classList.remove('navbar-active');
            }
        }
        lastScroll = Math.max(currentScroll, 0); // 确保 lastScroll 不为负
    };

    // 滚动事件处理
    const onScroll = () => {
        if (!scrollingInProgress) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;
                updateNavbar(currentScroll);
                scrollingInProgress = false;
            });
            scrollingInProgress = true;
        }
    };

    // 事件绑定
    window.addEventListener('scroll', onScroll);

    // 页面加载时立即更新状态
    updateNavbar(window.pageYOffset);
});

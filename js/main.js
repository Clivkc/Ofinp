// 导航栏滚动交互
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // 桌面端效果
    if (window.innerWidth > 576) {
      navbar.classList.toggle('navbar-scroll', currentScroll > 50);
    } 
    // 移动端效果
    else {
      navbar.classList.toggle('navbar-active', currentScroll > lastScroll && currentScroll > 100);
      lastScroll = currentScroll;
    }
  });
});

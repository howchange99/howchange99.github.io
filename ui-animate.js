// 附加動畫支援，供主頁和AR頁使用
window.addEventListener("DOMContentLoaded", ()=>{
  // 所有 .slide-in 進場動畫
  document.querySelectorAll('.slide-in').forEach((el,i)=> {
    el.style.opacity = 0;
    setTimeout(()=>{
      el.classList.add('slide-in');
      el.style.opacity = 1;
    }, 150 + i*80);
  });
  // .glass-panel、.info-panel 動畫
  setTimeout(()=>{
    document.querySelectorAll('.animate-panel').forEach(panel=>{
      panel.style.opacity=0;
      panel.style.transform='translateY(-16px) scale(0.97)';
      setTimeout(()=>{
        panel.style.transition='all .78s cubic-bezier(.52,1.72,.48,1.08)';
        panel.style.opacity=1;
        panel.style.transform='translateY(0) scale(1)';
      },60);
    });
  }, 80);
});
// 玻璃浮光波紋 for fancy-btn
const style = document.createElement('style');
style.innerHTML = `.ripple {
  position: absolute; width: 48px; height: 48px;
  pointer-events: none; border-radius: 50%; background: rgba(70,255,255,0.19);
  transform: translate(-50%,-50%) scale(0.7);
  animation: ripple-ani .56s cubic-bezier(.32,1.5,.46,1) forwards; z-index:2;
}
@keyframes ripple-ani { to{ opacity: 0; transform:translate(-50%,-50%) scale(2.6);} }`;
document.head.appendChild(style);

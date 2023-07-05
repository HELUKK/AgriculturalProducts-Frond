import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
// 数据懒加载函数
export const useLazyData = () => {
  const target = ref(null);
  const isLazy = ref(false);
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // 不注释代码，函数只能触发一次 
      // stop();
      isLazy.value = true;
    }
  });

  return {
    target,
    isLazy,
  };
};

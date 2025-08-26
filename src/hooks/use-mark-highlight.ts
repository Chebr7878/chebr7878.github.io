import { useEffect, useRef } from 'react';

export function useMarkHighlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeKeyRef = useRef<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const markKey = target.getAttribute('data-mark-key');
      
      if (markKey) {
        // Убираем предыдущую подсветку
        container.querySelectorAll('[data-mark-key]').forEach(el => {
          el.classList.remove('hover-highlight');
        });

        // Если это групповой ключ (начинается с "group-"), подсвечиваем всю группу
        if (markKey.startsWith('group-')) {
          container.querySelectorAll(`[data-mark-key="${markKey}"]`).forEach(el => {
            el.classList.add('hover-highlight');
          });
        } else {
          // Подсвечиваем все элементы с тем же ключом
          container.querySelectorAll(`[data-mark-key="${markKey}"]`).forEach(el => {
            el.classList.add('hover-highlight');
          });
        }
      }
    };

    const handleMouseLeave = () => {
      // Убираем hover подсветку, но оставляем активную
      container.querySelectorAll('[data-mark-key]').forEach(el => {
        el.classList.remove('hover-highlight');
      });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const markKey = target.getAttribute('data-mark-key');
      
      if (markKey) {
        if (activeKeyRef.current === markKey) {
          // Снимаем активную подсветку
          container.querySelectorAll(`[data-mark-key="${markKey}"]`).forEach(el => {
            el.classList.remove('is-active');
          });
          activeKeyRef.current = null;
        } else {
          // Убираем предыдущую активную подсветку
          if (activeKeyRef.current) {
            container.querySelectorAll(`[data-mark-key="${activeKeyRef.current}"]`).forEach(el => {
              el.classList.remove('is-active');
            });
          }
          
          // Устанавливаем новую активную подсветку
          container.querySelectorAll(`[data-mark-key="${markKey}"]`).forEach(el => {
            el.classList.add('is-active');
          });
          activeKeyRef.current = markKey;
        }
      } else {
        // Клик вне элементов - снимаем все подсветки
        container.querySelectorAll('[data-mark-key]').forEach(el => {
          el.classList.remove('is-active');
        });
        activeKeyRef.current = null;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const markKey = target.getAttribute('data-mark-key');
      
      if (markKey && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        handleClick(event as any);
      }
    };

    // Добавляем обработчики событий
    container.addEventListener('mouseenter', handleMouseEnter, true);
    container.addEventListener('mouseleave', handleMouseLeave, true);
    container.addEventListener('click', handleClick);
    container.addEventListener('keydown', handleKeyDown);

    // Очистка при размонтировании
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter, true);
      container.removeEventListener('mouseleave', handleMouseLeave, true);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return containerRef;
}


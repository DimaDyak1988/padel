{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "name": "Padel Club Design Tokens",
  "version": "1.0.0",
  "description": "Система дизайн-токенов для веб-приложения Padel Club",
  "metadata": {
  "author": "Padel Club Design Team",
    "created": "2026-01-01",
    "maxWidth": "1440px",
    "gridBase": "8px",
    "fontFamily": "Inter",
    "framework": "CSS Custom Properties"
},
  "color": {
  "background": {
    "page": {
      "value": "#F3F4F8",
        "type": "color",
        "usage": "Основной фон страницы (светлый лавандово-серый)"
    },
    "card": {
      "value": "#FFFFFF",
        "type": "color",
        "usage": "Фон карточек, модальных окон, хедера"
    },
    "input": {
      "value": "#FFFFFF",
        "type": "color",
        "usage": "Фон полей ввода"
    },
    "inputHover": {
      "value": "#FAFAFA",
        "type": "color",
        "usage": "Фон инпутов при наведении"
    },
    "info": {
      "value": "#F0F4FF",
        "type": "color",
        "usage": "Информационные блоки и подсказки"
    },
    "warning": {
      "value": "#FFF8F0",
        "type": "color",
        "usage": "Блоки предупреждений"
    },
    "success": {
      "value": "#F0FFF4",
        "type": "color",
        "usage": "Блоки успешных действий"
    },
    "danger": {
      "value": "#FFF0F0",
        "type": "color",
        "usage": "Блоки ошибок"
    },
    "modalOverlay": {
      "value": "rgba(0, 0, 0, 0.5)",
        "type": "color",
        "usage": "Затемнение фона при открытом модальном окне"
    }
  },
  "primary": {
    "default": {
      "value": "#1A1A1A",
        "type": "color",
        "usage": "Главные кнопки (Сохранить, Добавить участника), активные элементы навигации"
    },
    "hover": {
      "value": "#333333",
        "type": "color",
        "usage": "Hover-состояние основных кнопок"
    },
    "active": {
      "value": "#000000",
        "type": "color",
        "usage": "Active-состояние при нажатии"
    },
    "disabled": {
      "value": "#9CA3AF",
        "type": "color",
        "usage": "Disabled-состояние кнопок и инпутов"
    }
  },
  "secondary": {
    "default": {
      "value": "#6B7280",
        "type": "color",
        "usage": "Второстепенный текст, иконки"
    },
    "hover": {
      "value": "#4B5563",
        "type": "color",
        "usage": "Hover-состояние второстепенных элементов"
    }
  },
  "text": {
    "primary": {
      "value": "#111827",
        "type": "color",
        "usage": "Основной текст, заголовки, имена пользователей"
    },
    "secondary": {
      "value": "#6B7280",
        "type": "color",
        "usage": "Подзаголовки, описания, метки (РЕЙТИНГ), контакты"
    },
    "hint": {
      "value": "#9CA3AF",
        "type": "color",
        "usage": "Placeholder в инпутах, подсказки, неактивный текст"
    },
    "inverse": {
      "value": "#FFFFFF",
        "type": "color",
        "usage": "Текст на тёмных кнопках и фонах"
    },
    "link": {
      "value": "#2563EB",
        "type": "color",
        "usage": "Ссылки"
    }
  },
  "border": {
    "default": {
      "value": "#E5E7EB",
        "type": "color",
        "usage": "Границы карточек, инпутов, разделители"
    },
    "light": {
      "value": "#F3F4F6",
        "type": "color",
        "usage": "Лёгкие границы, внутренние разделители"
    },
    "focus": {
      "value": "#1A1A1A",
        "type": "color",
        "usage": "Рамка фокуса инпутов"
    }
  },
  "status": {
    "danger": {
      "value": "#DC2626",
        "hover": "#B91C1C",
        "bg": "#FEF2F2",
        "border": "#FECACA",
        "type": "color",
        "usage": "Кнопка «Удалить», текст ошибок, иконка корзины"
    },
    "success": {
      "value": "#16A34A",
        "bg": "#F0FDF4",
        "border": "#BBF7D0",
        "type": "color",
        "usage": "Индикатор онлайн, сообщение об успехе"
    },
    "warning": {
      "value": "#EA580C",
        "bg": "#FFF7ED",
        "border": "#FED7AA",
        "type": "color",
        "usage": "Предупреждения, активные бронирования"
    }
  },
  "star": {
    "filled": {
      "value": "#F59E0B",
        "type": "color",
        "usage": "Заполненные звёзды рейтинга"
    },
    "empty": {
      "value": "#D1D5DB",
        "type": "color",
        "usage": "Пустые звёзды рейтинга"
    }
  },
  "accent": {
    "green": {
      "value": "#22C55E",
        "type": "color",
        "usage": "Индикатор онлайн-статуса (зелёная точка)"
    }
  },
  "gradient": {
    "header": {
      "value": "linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)",
        "type": "gradient",
        "usage": "Фон хедера с лёгким вертикальным градиентом"
    }
  }
},
  "typography": {
  "fontFamily": {
    "primary": {
      "value": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        "type": "fontFamily",
        "usage": "Основной шрифт интерфейса"
    },
    "mono": {
      "value": "'SF Mono', 'Fira Code', monospace",
        "type": "fontFamily",
        "usage": "Моноширинный шрифт для кода и значений"
    }
  },
  "fontSize": {
    "xs": {
      "value": "11px",
        "type": "fontSize",
        "lineHeight": 1.5,
        "usage": "Мелкие метки, uppercase labels (РЕЙТИНГ, НОВЫХ)"
    },
    "sm": {
      "value": "13px",
        "type": "fontSize",
        "lineHeight": 1.5,
        "usage": "Подписи, метки карточек, текст кнопок"
    },
    "base": {
      "value": "14px",
        "type": "fontSize",
        "lineHeight": 1.5,
        "usage": "Базовый UI текст, кнопки, инпуты, метки форм"
    },
    "md": {
      "value": "15px",
        "type": "fontSize",
        "lineHeight": 1.5,
        "usage": "Промежуточный размер текста"
    },
    "lg": {
      "value": "16px",
        "type": "fontSize",
        "lineHeight": 1.5,
        "usage": "Основной текст описаний, подзаголовок страницы"
    },
    "xl": {
      "value": "18px",
        "type": "fontSize",
        "lineHeight": 1.375,
        "usage": "Подзаголовки, логотип в хедере"
    },
    "2xl": {
      "value": "20px",
        "type": "fontSize",
        "lineHeight": 1.375,
        "usage": "Заголовки H4, имена в карточках"
    },
    "3xl": {
      "value": "24px",
        "type": "fontSize",
        "lineHeight": 1.2,
        "usage": "Заголовки H3"
    },
    "4xl": {
      "value": "32px",
        "type": "fontSize",
        "lineHeight": 1.2,
        "usage": "Заголовки H2, заголовки страниц (Пользователи)"
    },
    "5xl": {
      "value": "40px",
        "type": "fontSize",
        "lineHeight": 1.2,
        "usage": "Заголовки H1, пустые состояния"
    }
  },
  "fontWeight": {
    "regular": {
      "value": 400,
        "type": "fontWeight",
        "usage": "Основной текст, описания"
    },
    "medium": {
      "value": 500,
        "type": "fontWeight",
        "usage": "Метки, подписи, текст кнопок"
    },
    "semibold": {
      "value": 600,
        "type": "fontWeight",
        "usage": "Подзаголовки, имена"
    },
    "bold": {
      "value": 700,
        "type": "fontWeight",
        "usage": "Заголовки, логотип, важные элементы"
    }
  },
  "lineHeight": {
    "tight": {
      "value": 1.2,
        "type": "lineHeight",
        "usage": "Крупные заголовки H1-H3"
    },
    "snug": {
      "value": 1.375,
        "type": "lineHeight",
        "usage": "Подзаголовки H4-xl"
    },
    "normal": {
      "value": 1.5,
        "type": "lineHeight",
        "usage": "Основной текст, описания"
    },
    "relaxed": {
      "value": 1.625,
        "type": "lineHeight",
        "usage": "Длинные тексты, параграфы"
    }
  }
},
  "spacing": {
  "base": "8px",
    "description": "Все отступы кратны 4px. Основной шаг — 8px.",
    "scale": {
    "1": {
      "value": "4px",
        "type": "spacing",
        "usage": "Микро-отступы между иконкой и текстом"
    },
    "2": {
      "value": "8px",
        "type": "spacing",
        "usage": "Мелкие отступы, gap между иконками в хедере"
    },
    "3": {
      "value": "12px",
        "type": "spacing",
        "usage": "Отступы в компактных элементах, padding тегов"
    },
    "4": {
      "value": "16px",
        "type": "spacing",
        "usage": "Стандартный padding кнопок, отступ в хедере"
    },
    "5": {
      "value": "20px",
        "type": "spacing",
        "usage": "Промежуточный отступ"
    },
    "6": {
      "value": "24px",
        "type": "spacing",
        "usage": "Padding карточек, gap между карточками, padding контейнера"
    },
    "8": {
      "value": "32px",
        "type": "spacing",
        "usage": "Padding форм и секций, отступ от заголовка"
    },
    "10": {
      "value": "40px",
        "type": "spacing",
        "usage": "Отступы между крупными блоками"
    },
    "12": {
      "value": "48px",
        "type": "spacing",
        "usage": "Отступы между секциями страницы"
    },
    "16": {
      "value": "64px",
        "type": "spacing",
        "usage": "Крупные отступы"
    },
    "20": {
      "value": "80px",
        "type": "spacing",
        "usage": "Максимальные отступы"
    }
  }
},
  "borderRadius": {
  "sm": {
    "value": "6px",
      "type": "borderRadius",
      "usage": "Теги, мелкие элементы, бейджи"
  },
  "md": {
    "value": "8px",
      "type": "borderRadius",
      "usage": "Инпуты, кнопки, иконки-кнопки в хедере"
  },
  "lg": {
    "value": "12px",
      "type": "borderRadius",
      "usage": "Карточки участников, секции, блоки"
  },
  "xl": {
    "value": "16px",
      "type": "borderRadius",
      "usage": "Модальные окна, крупные карточки"
  },
  "2xl": {
    "value": "20px",
      "type": "borderRadius",
      "usage": "Крупные CTA-кнопки (Добавить участника)"
  },
  "full": {
    "value": "9999px",
      "type": "borderRadius",
      "usage": "Pill-кнопки, бейджи, закруглённые элементы"
  },
  "circle": {
    "value": "50%",
      "type": "borderRadius",
      "usage": "Аватары, круглые иконки, логотип"
  }
},
  "shadow": {
  "xs": {
    "value": "0 1px 2px rgba(0, 0, 0, 0.04)",
      "type": "shadow",
      "usage": "Минимальная глубина, почти незаметная тень"
  },
  "sm": {
    "value": "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
      "type": "shadow",
      "usage": "Лёгкая тень для небольших элементов"
  },
  "card": {
    "value": "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
      "type": "shadow",
      "usage": "Карточки участников (основная тень)"
  },
  "md": {
    "value": "0 4px 6px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03)",
      "type": "shadow",
      "usage": "Hover-состояние карточек"
  },
  "lg": {
    "value": "0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.04)",
      "type": "shadow",
      "usage": "Выпадающие меню, popover"
  },
  "xl": {
    "value": "0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.06)",
      "type": "shadow",
      "usage": "Крупные popover, тултипы"
  },
  "modal": {
    "value": "0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.08)",
      "type": "shadow",
      "usage": "Модальные окна подтверждения"
  },
  "header": {
    "value": "0 1px 0 rgba(0, 0, 0, 0.06)",
      "type": "shadow",
      "usage": "Тень хедера (border-like, только снизу)"
  },
  "button": {
    "value": "0 1px 2px rgba(0, 0, 0, 0.1)",
      "type": "shadow",
      "usage": "Кнопки в обычном состоянии"
  },
  "buttonHover": {
    "value": "0 4px 8px rgba(0, 0, 0, 0.12)",
      "type": "shadow",
      "usage": "Кнопки при наведении"
  }
},
  "transition": {
  "fast": {
    "value": "150ms ease",
      "type": "transition",
      "usage": "Быстрые микро-взаимодействия (hover иконки)"
  },
  "normal": {
    "value": "200ms ease",
      "type": "transition",
      "usage": "Стандартные переходы (кнопки, карточки)"
  },
  "slow": {
    "value": "300ms ease",
      "type": "transition",
      "usage": "Медленные анимации (модалки, панели)"
  }
},
  "layout": {
  "maxWidth": {
    "value": "1440px",
      "type": "layout",
      "usage": "Максимальная ширина контейнера"
  },
  "headerHeight": {
    "value": "64px",
      "type": "layout",
      "usage": "Высота хедера"
  },
  "sidebarWidth": {
    "value": "240px",
      "type": "layout",
      "usage": "Ширина сайдбара (если будет)"
  },
  "cardGridGap": {
    "value": "24px",
      "type": "layout",
      "usage": "Gap между карточками в сетке"
  },
  "cardColumns": {
    "value": 3,
      "type": "layout",
      "usage": "Количество колонок карточек на десктопе"
  }
}
}

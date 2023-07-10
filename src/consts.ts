export const TODO_FILTERRS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
} as const

export const FILTER_BUTTONS = {
    [TODO_FILTERRS.ALL]: {
        literal: 'Todos',
        href: `/?filter=${TODO_FILTERRS.ALL}`
    },
    [TODO_FILTERRS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${TODO_FILTERRS.ACTIVE}`
    },
    [TODO_FILTERRS.COMPLETED]: {
        literal: 'Completados',
        href: `/?filter=${TODO_FILTERRS.COMPLETED}`
    },
} as const
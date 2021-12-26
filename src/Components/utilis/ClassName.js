export const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

// https://michaeluloth.com/filter-boolean
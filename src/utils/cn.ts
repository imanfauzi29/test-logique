export const cn = (...classnames: (string | undefined)[]) => {

    if (!classnames) return ""

    return classnames.join(" ")
}
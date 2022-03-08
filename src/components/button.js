export function Button({onClick, id, children, disabled = false}) {
    return (
        <button onClick={onClick} id={id} disabled={disabled}>{children}</button>
    )
}

// interface for Card props
export interface CardProps {
    title: string,
    content: string,
}

// interface for PostModalProps
export interface PostModalProps {
    isOpen: boolean,
    onClose: () => void,
    onSave: (title: string, content: string) => void, 
}
